/*! yt-player. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
var EventEmitter = function () {
    this.events = {};
  };
  
  EventEmitter.prototype.on = function (event, listener) {
    if (typeof this.events[event] !== 'object') {
        this.events[event] = [];
    }
  
    this.events[event].push(listener);
  };
  
  EventEmitter.prototype.removeListener = function (event, listener) {
    var idx;
  
    if (typeof this.events[event] === 'object') {
        idx = this.indexOf(this.events[event], listener);
  
        if (idx > -1) {
            this.events[event].splice(idx, 1);
        }
    }
  };
  
  EventEmitter.prototype.emit = function (event) {
    var i, listeners, length, args = [].slice.call(arguments, 1);
  
    if (typeof this.events[event] === 'object') {
        listeners = this.events[event].slice();
        length = listeners.length;
  
        for (i = 0; i < length; i++) {
            listeners[i].apply(this, args);
        }
    }
  };
  
  EventEmitter.prototype.once = function (event, listener) {
    this.on(event, function g () {
        this.removeListener(event, g);
        listener.apply(this, arguments);
    });
  };
  
  var loadScript = function (src, attrs, parentNode) {
    return new Promise((resolve, reject) => {
      var script = document.createElement('script')
      script.async = true
      script.src = src
  
      for (var [k, v] of Object.entries(attrs || {})) {
        script.setAttribute(k, v)
      }
  
      script.onload = () => {
        script.onerror = script.onload = null
        resolve(script)
      }
  
      script.onerror = () => {
        script.onerror = script.onload = null
        reject(new Error(`Failed to load ${src}`))
      }
  
      var node = parentNode || document.head || document.getElementsByTagName('head')[0]
      node.appendChild(script)
    })
  }
  
  var YOUTUBE_IFRAME_API_SRC = 'https://www.youtube.com/iframe_api'
  
  var YOUTUBE_STATES = {
    '-1': 'unstarted',
    0: 'ended',
    1: 'playing',
    2: 'paused',
    3: 'buffering',
    5: 'cued'
  }
  
  var YOUTUBE_ERROR = {
    // The request contains an invalid parameter value. For example, this error
    // occurs if you specify a videoId that does not have 11 characters, or if the
    // videoId contains invalid characters, such as exclamation points or asterisks.
    INVALID_PARAM: 2,
  
    // The requested content cannot be played in an HTML5 player or another error
    // related to the HTML5 player has occurred.
    HTML5_ERROR: 5,
  
    // The video requested was not found. This error occurs when a video has been
    // removed (for any reason) or has been marked as private.
    NOT_FOUND: 100,
  
    // The owner of the requested video does not allow it to be played in embedded
    // players.
    UNPLAYABLE_1: 101,
  
    // This error is the same as 101. It's just a 101 error in disguise!
    UNPLAYABLE_2: 150
  }
  
  var loadIframeAPICallbacks = []
  
  /**
   * YouTube Player. Exposes a better API, with nicer events.
   * @param {HTMLElement|selector} element
   */
   YouTubePlayer = class YouTubePlayer extends EventEmitter {
    constructor (element, opts) {
      super()
  
      var elem = typeof element === 'string'
        ? document.querySelector(element)
        : element
        
      if (elem.id) {
        this._id = elem.id // use existing element id
      } else {
        this._id = elem.id = 'ytplayer-' + Math.random().toString(16).slice(2, 8)
      }
  
      this._opts = Object.assign({
        width: 640,
        height: 360,
        autoplay: false,
        captions: undefined,
        controls: true,
        keyboard: true,
        fullscreen: true,
        annotations: true,
        modestBranding: false,
        related: true,
        timeupdateFrequency: 1000,
        playsInline: true,
        start: 0
      }, opts)
  
      this.videoId = null
      this.destroyed = false
  
      this._api = null
      this._autoplay = false // autoplay the first video?
      this._player = null
      this._ready = false // is player ready?
      this._queue = []
      this.replayInterval = []
  
      this._interval = null
  
      // Setup listeners for 'timeupdate' events. The YouTube Player does not fire
      // 'timeupdate' events, so they are simulated using a setInterval().
      this._startInterval = this._startInterval.bind(this)
      this._stopInterval = this._stopInterval.bind(this)
  
      this.on('playing', this._startInterval)
      this.on('unstarted', this._stopInterval)
      this.on('ended', this._stopInterval)
      this.on('paused', this._stopInterval)
      this.on('buffering', this._stopInterval)
  
      this._loadIframeAPI((err, api) => {
        if (err) return this._destroy(new Error('YouTube Iframe API failed to load'))
        this._api = api
  
        // If load(videoId, [autoplay, [size]]) was called before Iframe API
        // loaded, ensure it gets called again now
        if (this.videoId) this.load(this.videoId, this._autoplay, this._start)
      })
    }

    indexOf (haystack, needle) {
      var i = 0, length = haystack.length, idx = -1, found = false;

      while (i < length && !found) {
          if (haystack[i] === needle) {
              idx = i;
              found = true;
          }

          i++;
      }

      return idx;
    }
  
    load (videoId, autoplay = false, start = 0) {
      if (this.destroyed) return
  
      this._startOptimizeDisplayEvent()
      this._optimizeDisplayHandler('center, center')

      this.videoId = videoId
      this._autoplay = autoplay
      this._start = start
  
      // If the Iframe API is not ready yet, do nothing. Once the Iframe API is
      // ready, `load(this.videoId)` will be called.
      if (!this._api) return
  
      // If there is no player instance, create one.
      if (!this._player) {
        this._createPlayer(videoId)
        return
      }
  
      // If the player instance is not ready yet, do nothing. Once the player
      // instance is ready, `load(this.videoId)` will be called. This ensures that
      // the last call to `load()` is the one that takes effect.
      if (!this._ready) return
  
      // If the player instance is ready, load the given `videoId`.
      if (autoplay) {
        this._player.loadVideoById(videoId, start)
      } else {
        this._player.cueVideoById(videoId, start)
      }
    }
  
    play () {
      if (this._ready) this._player.playVideo()
      else this._queueCommand('play')
    }

    replayFrom(num) {
      const find = this.replayInterval.find((obj) => {
        return obj.iframeParent === this._player.i.parentNode
      })
      if (find || !num) return
      this.replayInterval.push({
        iframeParent: this._player.i.parentNode,
        interval: setInterval(() => {
          if (this._player.getCurrentTime() >= this._player.getDuration() - Number(num)) {
            this.seek(0);
            for (const [key, val] of this.replayInterval.entries()) {
              if (Object.hasOwnProperty.call(this.replayInterval, key)) {
                clearInterval(this.replayInterval[key].interval)
                this.replayInterval.splice(key, 1)
              }
            }
          }
        }, Number(num) * 1000)
      })
    }
  
    pause () {
      if (this._ready) this._player.pauseVideo()
      else this._queueCommand('pause')
    }
  
    stop () {
      if (this._ready) this._player.stopVideo()
      else this._queueCommand('stop')
    }
  
    seek (seconds) {
      if (this._ready) this._player.seekTo(seconds, true)
      else this._queueCommand('seek', seconds)
    }
    
    _optimizeDisplayHandler(anchor) {
      if (!this._player) return
      const YTPlayer = this._player.i
      const YTPAlign = anchor.split(",");
      if (YTPlayer) {
          const win = {}, 
            el = YTPlayer.parentElement;
          
            if (el) {
              const computedStyle = window.getComputedStyle(el), 
                outerHeight = el.clientHeight + parseFloat(computedStyle.marginTop, 10) + parseFloat(computedStyle.marginBottom, 10) + parseFloat(computedStyle.borderTopWidth, 10) + parseFloat(computedStyle.borderBottomWidth, 10),
                outerWidth = el.clientWidth + parseFloat(computedStyle.marginLeft, 10) + parseFloat(computedStyle.marginRight, 10) + parseFloat(computedStyle.borderLeftWidth, 10) + parseFloat(computedStyle.borderRightWidth, 10),
                ratio = 1.7,
                vid = YTPlayer;
              
              win.width = outerWidth;
              win.height = outerHeight + 80;
  
              vid.style.width = win.width + 'px';
              vid.style.height = Math.ceil(parseFloat(vid.style.width, 10) / ratio) + 'px';
              vid.style.marginTop = Math.ceil(-((parseFloat(vid.style.height, 10) - win.height) / 2)) + 'px';
              vid.style.marginLeft = 0;
  
              const lowest = parseFloat(vid.style.height, 10) < win.height;

              if (lowest) {
                vid.style.height = win.height + 'px',
                vid.style.width = Math.ceil(parseFloat(vid.style.height, 10) * ratio) + 'px',
                vid.style.marginTop = 0,
                vid.style.marginLeft = Math.ceil(-((parseFloat(vid.style.width, 10) - win.width) / 2)) + 'px' 
              }
              for (const align in YTPAlign)
                  if (YTPAlign.hasOwnProperty(align)) {
                      const al = YTPAlign[align].replace(/ /g, "");
                      switch (al) {
                      case "top":
                          vid.style.marginTop = lowest ? -((parseFloat(vid.style.height, 10) - win.height) / 2) + 'px' : 0;
                          break;
                      case "bottom":
                          vid.style.marginTop = lowest ? 0 : -(parseFloat(vid.style.height, 10) - win.height) + 'px';
                          break;
                      case "left":
                          vid.style.marginLeft = 0;
                          break;
                      case "right":
                          vid.style.marginLeft = lowest ? -(parseFloat(vid.style.width, 10) - win.width) : 0 + 'px';
                          break;
                      default:
                        parseFloat(vid.style.width, 10) > win.width && (vid.style.marginLeft = -((parseFloat(vid.style.width, 10) - win.width) / 2) + 'px') 
                      }
                  }
          }
      }
    }

    stopResize () {
      window.removeEventListener('resize', this._resizeListener)
      this._resizeListener = null
    }

    stopReplay (iframeParent) {
      for (const [key, val] of this.replayInterval.entries()) {
        if (Object.hasOwnProperty.call(this.replayInterval, key)) {
          if (iframeParent === this.replayInterval[key].iframeParent) {
            clearInterval(this.replayInterval[key].interval);
            this.replayInterval.splice(key, 1)
          }
        }
      }
    }
  
    setVolume (volume) {
      if (this._ready) this._player.setVolume(volume)
      else this._queueCommand('setVolume', volume)
    }

    loadPlaylist () {
      if (this._ready) this._player.loadPlaylist(this.videoId)
      else this._queueCommand('loadPlaylist', this.videoId)
    }

    setLoop (bool) {
      if (this._ready) this._player.setLoop(bool)
      else this._queueCommand('setLoop', bool)
    }
  
    getVolume () {
      return (this._ready && this._player.getVolume()) || 0
    }
  
    mute () {
      if (this._ready) this._player.mute()
      else this._queueCommand('mute')
    }
  
    unMute () {
      if (this._ready) this._player.unMute()
      else this._queueCommand('unMute')
    }
  
    isMuted () {
      return (this._ready && this._player.isMuted()) || false
    }
  
    setSize (width, height) {
      if (this._ready) this._player.setSize(width, height)
      else this._queueCommand('setSize', width, height)
    }
  
    setPlaybackRate (rate) {
      if (this._ready) this._player.setPlaybackRate(rate)
      else this._queueCommand('setPlaybackRate', rate)
    }
  
    setPlaybackQuality (suggestedQuality) {
      if (this._ready) this._player.setPlaybackQuality(suggestedQuality)
      else this._queueCommand('setPlaybackQuality', suggestedQuality)
    }
  
    getPlaybackRate () {
      return (this._ready && this._player.getPlaybackRate()) || 1
    }
  
    getAvailablePlaybackRates () {
      return (this._ready && this._player.getAvailablePlaybackRates()) || [1]
    }
  
    getDuration () {
      return (this._ready && this._player.getDuration()) || 0
    }
  
    getProgress () {
      return (this._ready && this._player.getVideoLoadedFraction()) || 0
    }
  
    getState () {
      return (this._ready && YOUTUBE_STATES[this._player.getPlayerState()]) || 'unstarted'
    }
  
    getCurrentTime () {
      return (this._ready && this._player.getCurrentTime()) || 0
    }
  
    destroy () {
      this._destroy()
    }
  
    _destroy (err) {
      if (this.destroyed) return
      this.destroyed = true
  
      if (this._player) {
        this._player.stopVideo && this._player.stopVideo()
        this._player.destroy()
      }
  
      this.videoId = null
  
      this._id = null
      this._opts = null
      this._api = null
      this._player = null
      this._ready = false
      this._queue = null
  
      this._stopInterval()

      this.removeListener('playing', this._startInterval)
      this.removeListener('paused', this._stopInterval)
      this.removeListener('buffering', this._stopInterval)
      this.removeListener('unstarted', this._stopInterval)
      this.removeListener('ended', this._stopInterval)
  
      if (err) this.emit('error', err)
    }
  
    _queueCommand (command, ...args) {
      if (this.destroyed) return
      this._queue.push([command, args])
    }
  
    _flushQueue () {
      while (this._queue.length) {
        var command = this._queue.shift()
        this[command[0]].apply(this, command[1])
      }
    }
  
    _loadIframeAPI (cb) {
      // If API is loaded, there is nothing else to do
      if (window.YT && typeof window.YT.Player === 'function') {
        return cb(null, window.YT)
      }
  
      // Otherwise, queue callback until API is loaded
      loadIframeAPICallbacks.push(cb)
  
      var scripts = Array.from(document.getElementsByTagName('script'))
      var isLoading = scripts.some(script => script.src === YOUTUBE_IFRAME_API_SRC)
  
      // If API <script> tag is not present in the page, inject it. Ensures that
      // if user includes a hardcoded <script> tag in HTML for performance, another
      // one will not be added
      if (!isLoading) {
        loadScript(YOUTUBE_IFRAME_API_SRC).catch(err => {
          while (loadIframeAPICallbacks.length) {
            var loadCb = loadIframeAPICallbacks.shift()
            loadCb(err)
          }
        })
      }
  
      var prevOnYouTubeIframeAPIReady = window.onYouTubeIframeAPIReady
      window.onYouTubeIframeAPIReady = () => {
        if (typeof prevOnYouTubeIframeAPIReady === 'function') {
          prevOnYouTubeIframeAPIReady()
        }
        while (loadIframeAPICallbacks.length) {
          var loadCb = loadIframeAPICallbacks.shift()
          loadCb(null, window.YT)
        }
      }
    }
  
    _createPlayer (videoId) {
      if (this.destroyed) return
  
      var opts = this._opts
  
      this._player = new this._api.Player(this._id, {
        width: opts.width,
        height: opts.height,
        videoId: videoId,
  
        // (Not part of documented API) This parameter controls the hostname that
        // videos are loaded from. Set to `'https://www.youtube-nocookie.com'`
        // for enhanced privacy.
        host: opts.host,
  
        playerVars: {
          // This parameter specifies whether the initial video will automatically
          // start to play when the player loads. Supported values are 0 or 1. The
          // default value is 0.
          autoplay: opts.autoplay ? 1 : 0,

          mute: opts.mute ? 1 : 0,
  
          // Setting the parameter's value to 1 causes closed captions to be shown
          // by default, even if the user has turned captions off. The default
          // behavior is based on user preference.
          // cc_load_policy: opts.captions != null
          //   ? opts.captions !== false ? 1 : 0
          //   : undefined, // default to not setting this option
  
          // Sets the player's interface language. The parameter value is an ISO
          // 639-1 two-letter language code or a fully specified locale. For
          // example, fr and fr-ca are both valid values. Other language input
          // codes, such as IETF language tags (BCP 47) might also be handled
          // properly.
          hl: (opts.captions != null && opts.captions !== false)
            ? opts.captions
            : undefined, // default to not setting this option
  
          // This parameter specifies the default language that the player will
          // use to display captions. Set the parameter's value to an ISO 639-1
          // two-letter language code.
          cc_lang_pref: (opts.captions != null && opts.captions !== false)
            ? opts.captions
            : undefined, // default to not setting this option
  
          // This parameter indicates whether the video player controls are
          // displayed. For IFrame embeds that load a Flash player, it also defines
          // when the controls display in the player as well as when the player
          // will load. Supported values are:
          //   - controls=0 – Player controls do not display in the player. For
          //                  IFrame embeds, the Flash player loads immediately.
          //   - controls=1 – (default) Player controls display in the player. For
          //                  IFrame embeds, the controls display immediately and
          //                  the Flash player also loads immediately.
          //   - controls=2 – Player controls display in the player. For IFrame
          //                  embeds, the controls display and the Flash player
          //                  loads after the user initiates the video playback.
          controls: opts.controls ? 2 : 0,
  
          // Setting the parameter's value to 1 causes the player to not respond to
          // keyboard controls. The default value is 0, which means that keyboard
          // controls are enabled.
          // disablekb: opts.keyboard ? 0 : 1,
  
          // Setting the parameter's value to 1 enables the player to be
          // controlled via IFrame or JavaScript Player API calls. The default
          // value is 0, which means that the player cannot be controlled using
          // those APIs.
          enablejsapi: 1,
  
          // Setting this parameter to 0 prevents the fullscreen button from
          // displaying in the player. The default value is 1, which causes the
          // fullscreen button to display.
          allowfullscreen: true,
  
          // Setting the parameter's value to 1 causes video annotations to be
          // shown by default, whereas setting to 3 causes video annotations to not
          // be shown by default. The default value is 1.
          iv_load_policy: opts.annotations ? 1 : 3,
  
          // This parameter lets you use a YouTube player that does not show a
          // YouTube logo. Set the parameter value to 1 to prevent the YouTube logo
          // from displaying in the control bar. Note that a small YouTube text
          // label will still display in the upper-right corner of a paused video
          // when the user's mouse pointer hovers over the player.
          modestbranding: opts.modestBranding ? 1 : 0,
  
          // This parameter provides an extra security measure for the IFrame API
          // and is only supported for IFrame embeds. If you are using the IFrame
          // API, which means you are setting the enablejsapi parameter value to 1,
          // you should always specify your domain as the origin parameter value.
          origin: '*',
  
          // This parameter controls whether videos play inline or fullscreen in an
          // HTML5 player on iOS. Valid values are:
          //   - 0: This value causes fullscreen playback. This is currently the
          //        default value, though the default is subject to change.
          //   - 1: This value causes inline playback for UIWebViews created with
          //        the allowsInlineMediaPlayback property set to TRUE.
          // playsinline: opts.playsInline ? 1 : 0,
  
          // This parameter indicates whether the player should show related
          // videos from the same channel (0) or from any channel (1) when
          // playback of the video ends. The default value is 1.
          rel: opts.related ? 1 : 0,
  
          // (Not part of documented API) Allow html elements with higher z-index
          // to be shown on top of the YouTube player.
          mode: 'transparent',
          showinfo: 0,
          html5: 1,
          version: 3,
          playerapiid: 'iframe_YTP_1624972482514'
          // version=3&playerapiid=iframe_YTP_1624972482514
          // This parameter causes the player to begin playing the video at the given number
          // of seconds from the start of the video. The parameter value is a positive integer.
          // Note that similar to the seek function, the player will look for the closest
          // keyframe to the time you specify. This means that sometimes the play head may seek
          // to just before the requested time, usually no more than around two seconds.
          // start: opts.start
        },
        events: {
          onReady: () => this._onReady(videoId),
          onStateChange: (data) => this._onStateChange(data),
          onPlaybackQualityChange: (data) => this._onPlaybackQualityChange(data),
          onPlaybackRateChange: (data) => this._onPlaybackRateChange(data),
          onError: (data) => this._onError(data)
        }
      })
    }
  
    /**
     * This event fires when the player has finished loading and is ready to begin
     * receiving API calls.
     */
    _onReady (videoId) {
      if (this.destroyed) return
      
      this._ready = true

      // Once the player is ready, always call `load(videoId, [autoplay, [size]])`
      // to handle these possible cases:
      //
      //   1. `load(videoId, true)` was called before the player was ready. Ensure that
      //      the selected video starts to play.
      //
      //   2. `load(videoId, false)` was called before the player was ready. Now the
      //      player is ready and there's nothing to do.
      //
      //   3. `load(videoId, [autoplay])` was called multiple times before the player
      //      was ready. Therefore, the player was initialized with the wrong videoId,
      //      so load the latest videoId and potentially autoplay it.
      this.load(this.videoId, this._autoplay, this._start)
  
      this._flushQueue()
    }
  
    /**
     * Called when the player's state changes. We emit friendly events so the user
     * doesn't need to use YouTube's YT.PlayerState.* event constants.
     */
    _onStateChange (data) {
      if (this.destroyed) return
  
      var state = YOUTUBE_STATES[data.data]
  
      if (state) {
        // Send a 'timeupdate' anytime the state changes. When the video halts for any
        // reason ('paused', 'buffering', or 'ended') no further 'timeupdate' events
        // should fire until the video unhalts.
        if (['paused', 'buffering', 'ended'].includes(state)) this._onTimeupdate()
  
        this.emit(state)
  
        // When the video changes ('unstarted' or 'cued') or starts ('playing') then a
        // 'timeupdate' should follow afterwards (never before!) to reset the time.
        if (['unstarted', 'playing', 'cued'].includes(state)) this._onTimeupdate()
      } else {
        throw new Error('Unrecognized state change: ' + data)
      }
    }
  
    /**
     * This event fires whenever the video playback quality changes. Possible
     * values are: 'small', 'medium', 'large', 'hd720', 'hd1080', 'highres'.
     */
    _onPlaybackQualityChange (data) {
      if (this.destroyed) return
      this.emit('playbackQualityChange', data.data)
    }
  
    /**
     * This event fires whenever the video playback rate changes.
     */
    _onPlaybackRateChange (data) {
      if (this.destroyed) return
      this.emit('playbackRateChange', data.data)
    }
  
    /**
     * This event fires if an error occurs in the player.
     */
    _onError (data) {
      if (this.destroyed) return
  
      var code = data.data
  
      // The HTML5_ERROR error occurs when the YouTube player needs to switch from
      // HTML5 to Flash to show an ad. Ignore it.
      if (code === YOUTUBE_ERROR.HTML5_ERROR) return
  
      // The remaining error types occur when the YouTube player cannot play the
      // given video. This is not a fatal error. Report it as unplayable so the user
      // has an opportunity to play another video.
      if (code === YOUTUBE_ERROR.UNPLAYABLE_1 ||
          code === YOUTUBE_ERROR.UNPLAYABLE_2 ||
          code === YOUTUBE_ERROR.NOT_FOUND ||
          code === YOUTUBE_ERROR.INVALID_PARAM) {
        return this.emit('unplayable', this.videoId)
      }
  
      // Unexpected error, does not match any known type
      this._destroy(new Error('YouTube Player Error. Unknown error code: ' + code))
    }

    _startOptimizeDisplayEvent () {
      if (this._resizeListener) return;
      this._resizeListener = () => this._optimizeDisplayHandler('center, center')
      window.addEventListener('resize', this._resizeListener);
    }

    /**
     * This event fires when the time indicated by the `getCurrentTime()` method
     * has been updated.
     */
    _onTimeupdate () {
      this.emit('timeupdate', this.getCurrentTime())
    }
  
    _startInterval () {
      this._interval = setInterval(() => this._onTimeupdate(), this._opts.timeupdateFrequency)
    }
  
    _stopInterval () {
      clearInterval(this._interval)
      this._interval = null
    }
  }
  
  
  