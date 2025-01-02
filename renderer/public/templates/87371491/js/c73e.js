(function () {
    var $, isBuilder;
    var isJQuery = typeof jQuery == 'function';
    if (isJQuery) $ = jQuery;
    $ ? isBuilder = $('html').hasClass('is-builder')
    : isBuilder = document.querySelector('html').classList.contains('is-builder');

    function outerFind(el, selector) {
        var elements = Array.from(el.querySelectorAll(selector));
        if (el.matches && el.matches(selector)) elements.splice(0, 0, el);
        return elements;
    };

    function offset(el) {
        var rect = el.getBoundingClientRect();
        return {
            top: rect.top + document.body.scrollTop,
            left: rect.left + document.body.scrollLeft
        }
    };


    function getHeight(el) {
        return parseFloat(getComputedStyle(el, null).height.replace('px', ''));
    };

    function getWidth(el) {
        return parseFloat(getComputedStyle(el, null).width.replace('px', ''));
    };

    function ready(fn) {
        if (document.readyState != 'loading'){
          fn();
        } else {
          document.addEventListener('DOMContentLoaded', fn);
        }
    }

    function getIndex(el) {
        if (!el) return -1;
        var i = 0;
        do {
          i++;
        } while (el = el.previousElementSibling);
        return i;
    }

    // fadeIn and fadeOut functions from https://only-to-top.ru/blog/coding/2019-09-24-jquery-to-js.html
    function fadeOut(el) {
        (function fade() {
            if ((el.style.opacity -= .1) < 0) {
                el.style.display = 'none';
            } else {
                requestAnimationFrame(fade);
            }
        })();
    };

    function fadeIn(el) {
        el.style.display = 'block';
        (function fade() {
            var val = parseFloat(el.style.opacity);
            if (!((val += .1) > 1)) {
                el.style.opacity = val;
                requestAnimationFrame(fade);
            }
        })();
    };

    // get parents function from https://gist.github.com/ziggi/2f15832b57398649ee9b
    Element.prototype.parents = function(selector) {
        var elements = [];
        var elem = this;
        var ishaveselector = selector !== undefined;
    
        while ((elem = elem.parentElement) !== null) {
            if (elem.nodeType !== Node.ELEMENT_NODE) {
                continue;
            }
    
            if (!ishaveselector || elem.matches(selector)) {
                elements.push(elem);
            }
        }
    
        return elements;
    };


    Element.prototype.footerReveal = function() {
        var _this = this;
        var prev = _this.previousElementSibling;
        var isIE = !!document.documentMode;
        function initReveal() {
            if (!isIE && _this.offsetHeight <= window.outerHeight) {
                _this.style.zIndex = '-999';
                _this.style.position = 'fixed';
                _this.style.bottom = '0';
                _this.style.width = prev.offsetWidth+'px';
                prev.style.marginBottom = _this.offsetHeight+'px';
            } else {
                _this.style.zIndex = '';
                _this.style.position = '';
                _this.style.bottom = '';
                _this.style.width = '';
                prev.style.marginBottom = '';
            }
        }

        initReveal();

        window.addEventListener('resize', function() {initReveal()});
        window.addEventListener('load', function() {initReveal()});

        return _this;
    };


    (function (sr) {
        // debouncing function from John Hann
        // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
        var debounce = function (func, threshold, execAsap) {
            var timeout;

            return function debounced() {
                var obj = this,
                    args = arguments;

                function delayed() {
                    if (!execAsap) func.apply(obj, args);
                    timeout = null;
                }

                if (timeout) clearTimeout(timeout);
                else if (execAsap) func.apply(obj, args);

                timeout = setTimeout(delayed, threshold || 100);
            };
        };
        // smartresize
        window[sr] = function (fn) {
            var ev = new CustomEvent(sr);
            return fn ? this.addEventListener('resize', debounce(fn)) : this.dispatchEvent(ev);
        };

    })('smartresize');


    (function () {

        var scrollbarWidth = 0,
            originalMargin, touchHandler = function (event) {
                event.preventDefault();
            };

        function getScrollbarWidth() {
            if (scrollbarWidth) return scrollbarWidth;
            var scrollDiv = document.createElement('div');
            var props = {
                top: '-9999px',
                width: '50px',
                height: '50px',
                overflow: 'scroll',
                position: 'absolute'
            }
            for (var prop in props) {
                scrollDiv.style[prop] = props[prop];
            }
            document.querySelector('body').appendChild(scrollDiv);
            scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
            document.querySelector('body').removeChild(scrollDiv);
            return scrollbarWidth;
        }

    })();


    function isMobile (type) {
        var reg = [];
        var any = {
            blackberry: 'BlackBerry',
            android: 'Android',
            windows: 'IEMobile',
            opera: 'Opera Mini',
            ios: 'iPhone|iPad|iPod'
        };
        type = 'undefined' == typeof(type) ? '*' : type.toLowerCase();
        if ('*' === type) reg = Object.values(any);
        else if (type in any) reg.push(any[type]);
        return !!(reg.length && navigator.userAgent.match(new RegExp(reg.join('|'), 'i')));
    };

    var isSupportViewportUnits = (function () {
        // modernizr implementation
        var div = document.createElement('div');
        var body = document.querySelector('body');
        div.setAttribute('style', 'height: 50vh; position: absolute; top: -1000px; left: -1000px;');
        body.appendChild(div);
        var height = parseInt(window.innerHeight / 2, 10);
        var compStyle = parseInt((window.getComputedStyle ? getComputedStyle(div, null) : div.currentStyle)['height'], 10);
        body.removeChild(div);
        return compStyle == height;
    }());

    

    ready(function () {
        document.querySelector('html').classList.add(isMobile() ? 'mobile' : 'desktop');

        // .mbr-navbar--sticky

        // needs some check
        window.addEventListener('scroll', function() {
            document.querySelectorAll('.mbr-navbar--sticky').forEach(function(el) {
                var method = window.scrollTop > 10 ? 'add' : 'remove';
                el.classList[method]('mbr-navbar--stuck');
                if (!el.classList.contains('.mbr-navbar--open')) el.classList[method]('mbr-navbar--short');
            })
        });

        if (isMobile() && navigator.userAgent.match(/Chrome/i)) { // simple fix for Chrome's scrolling
            (function (width, height) {
                var deviceSize = [width, width];
                deviceSize[height > width ? 0 : 1] = height;
                window.smartresize(function () {
                    var windowHeight = window.innerHeight;
                    if (deviceSize.indexOf(windowHeight) < 0)
                        windowHeight = deviceSize[window.innerWidth > windowHeight ? 1 : 0];
                    var el = document.querySelector('.mbr-section--full-height');
                    el.style.height = windowHeight + 'px';
                });
            })(window.innerWidth, window.innerHeight);
        } else if (!isSupportViewportUnits) { // fallback for .mbr-section--full-height
            window.smartresize(function () {
                var el = document.querySelector('.mbr-section--full-height');
                    el.style.height = window.innerHeight + 'px';
            });
            $(document).on('add.cards', function (event) {
            // document.addEventListener('add.cards', function (event) {
                if (document.querySelector('html').classList.contains('mbr-site-loaded') && outerFind(event.target, '.mbr-section--full-height').length) 
                    window.dispatchEvent(new CustomEvent('resize'));                    
            });
        }

        // .mbr-section--16by9 (16 by 9 blocks autoheight)

        function calculate16by9(el) {
            el.style.height = getWidth(el.parentNode) * 9 / 16 + 'px';
        }
        window.addEventListener('smartresize', function () {
            document.querySelectorAll('.mbr-section--16by9').forEach(calculate16by9);
        });
        if (isJQuery) $(document).on('add.cards changeParameter.cards', function (event) {
        //document.addEventListener('add.cards changeParameter.cards', function (event) {
            var enabled = outerFind(event.target, '.mbr-section--16by9');
            if (enabled.length) {
                enabled.forEach(function(el) {
                    el.setAttribute('data-16by9', 'true');
                    calculate16by9(el);
                })
            } else {
                outerFind(event.target, '[data-16by9]').forEach(function (el) {
                    el.styles.height = '';
                    el.removeAttribute('data-16by9');
                })
            }
        });


        // .mbr-parallax-background

        // plugin needs replacement: Parallax

        function initParallax(card) {
            setTimeout(function () {
                outerFind(card, '.mbr-parallax-background').forEach(function(el) {
                    if (jarallax) {
                        jarallax(el, {speed: 0.6})
                        el.style.position = 'relative';
                    }
                })
                    
            }, 0);
        }
        

        function destroyParallax(card) {
            if (jarallax) jarallax(card, ('destroy'));
            card.style.position = '';
        }

        if ((typeof jarallax !== 'undefined') && !isMobile()) {
            window.addEventListener('update.parallax', function (event) {
                setTimeout(function () {
                    if (!jarallax) return;
                    var jarallax = document.querySelector('.mbr-parallax-background');

                    jarallax.jarallax('coverImage');
                    jarallax.jarallax('clipContainer');
                    jarallax.jarallax('onScroll');
                }, 0);
            });

            if (isBuilder) {
                if (!isJQuery) return;
                $(document).on('add.cards', function (event) {
                    initParallax(event.target);
                    $(window).trigger('update.parallax');
                });

                $(document).on('changeParameter.cards', function (event, paramName, value, key) {
                    if (paramName === 'bg') {
                        destroyParallax(event.target);
                        $(event.target).find('.mbr-background-video-preview').remove();
                        $(event.target).find('.mbr-background-video').remove();
                        $(event.target).find('.mbr-background-video-wrapper').remove();
                        $(event.target).find('.mbr-fallback-image').remove();
                        switch (key) {
                            case 'type':
                                if (value.parallax === true) {
                                    initParallax(event.target);
                                }
                                break;
                            case 'value':
                                if (value.type === 'image' && value.parallax === true) {
                                    initParallax(event.target);
                                }
                                break;
                            case 'parallax':
                                if (value.parallax === true) {
                                    initParallax(event.target);
                                }
                        }
                    }

                    $(window).trigger('update.parallax');
                });
            } else {
                initParallax(document.body);
            }

            // for Tabs
            window.addEventListener('shown.bs.tab', function () {
                window.dispatchEvent(new CustomEvent('update.parallax'));
            });
        }

        // .mbr-fixed-top

        var fixedTopTimeout, scrollTimeout, prevScrollTop = 0,
            fixedTop = null,
            isDesktop = !isMobile();
        window.addEventListener('scroll', function () {
            if (scrollTimeout) clearTimeout(scrollTimeout);
            var scrollTop = document.documentElement.scrollTop;
            var scrollUp = scrollTop <= prevScrollTop || isDesktop;
            prevScrollTop = scrollTop;
            if (fixedTop) {
                var fixed = scrollTop > fixedTop.breakPoint;
                if (scrollUp) {
                    if (fixed != fixedTop.fixed) {
                        if (isDesktop) {
                            fixedTop.fixed = fixed;
                            fixedTop.elm.classList.toggle('is-fixed');
                        } else {
                            scrollTimeout = setTimeout(function () {
                                fixedTop.fixed = fixed;
                                fixedTop.elm.classList.toggle('is-fixed');
                            }, 40);
                        }
                    }
                } else {
                    fixedTop.fixed = false;
                    fixedTop.elm.classList.remove('is-fixed');
                }
            }
        });

        if (isJQuery) $(document).on('add.cards delete.cards', function (event) {
        // document.addEventListener('add.cards delete.cards', function () {
            if (fixedTopTimeout) clearTimeout(fixedTopTimeout);
            fixedTopTimeout = setTimeout(function () {
                if (fixedTop) {
                    fixedTop.fixed = false;
                    fixedTop.elm.classList.remove('is-fixed');
                }
                var elm = document.querySelector('.mbr-fixed-top');
                if (elm) {
                    fixedTop = {
                        breakPoint: offset(elm).top + getHeight(elm) * 3,
                        fixed: false,
                        elm
                    };
                    elm.dispatchEvent(new CustomEvent('scroll'));
                }
            }, 650);
        });


        // embedded videos

        window.smartresize(function () {
            document.querySelectorAll('.mbr-embedded-video').forEach(function (el) {
                el.style.height = (getWidth(el) * parseInt(el.getAttribute('height') || 315) / parseInt(el.getAttribute('width') || 560)).toFixed() + 'px';
            });
        });
        if (isJQuery) $(document).on('add.cards', function (event) {
        // document.addEventListener('add.cards', function (event) {
            if (document.querySelector('html').classList.contains('mbr-site-loaded') && outerFind(event.target, 'iframe').length)
                window.dispatchEvent(new CustomEvent('resize')); 
        });

        // background video

        function videoParser(card) {
            outerFind(card, '[data-bg-video]').forEach(function (el) {
                var videoURL = el.getAttribute('data-bg-video');
                if (!videoURL) return;

                var parsedUrl = videoURL.match(/(http:\/\/|https:\/\/|)?(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/);

                var img = el.querySelector('.mbr-background-video-preview') || document.createElement('div');

                img.classList.add('mbr-background-video-preview');
                img.style.display = 'none';
                img.style.backgroundSize = 'cover';
                img.style.backgroundPosition = 'center';
                
                if (!el.querySelector('.mbr-background-video-preview')) el.childNodes[0].before(img);

                const optimizeDisplay = function (player, iframe) {
                    let vid = {};
                    let win = {};
                    win.width = window.outerWidth;
                    win.height = window.outerHeight;
            
                    let ratio = player._opts.width / player._opts.height;
            
                    vid.width = win.width;
                    vid.height = Math.ceil(vid.width / ratio);
                    vid.marginTop = Math.ceil(-((vid.height - win.height) / 2));
                    let lowest = vid.height < win.height;
            
                    if (lowest) {
                        vid.height = win.height;
                        vid.width = Math.ceil(vid.height * ratio);
                        vid.marginLeft = Math.ceil(-((vid.width - win.width) / 2))
                    }
                    player.setSize(vid.width, vid.height);
                };

                // youtube or vimeo
                if (parsedUrl && (/youtu\.?be/g.test(parsedUrl[3]) || /vimeo/g.test(parsedUrl[3]))) {
                    // youtube
                    if (parsedUrl && /youtu\.?be/g.test(parsedUrl[3])) {
                        var previewURL = 'http' + ('https:' === location.protocol ? 's' : '') + ':';
                        previewURL += '//img.youtube.com/vi/' + parsedUrl[6] + '/maxresdefault.jpg';

                        var image = new Image();

                        image.onload = function () {

                            if (120 === (image.naturalWidth || image.width)) {
                                // selection of preview in the best quality
                                var file = image.src.split('/').pop();

                                switch (file) {
                                    case 'maxresdefault.jpg':
                                        image.src = image.src.replace(file, 'sddefault.jpg');
                                        break;
                                    case 'sddefault.jpg':
                                        image.src = image.src.replace(file, 'hqdefault.jpg');
                                        break;
                                    default: // image not found
                                        if (isBuilder) {
                                            img.style.backgroundImage = 'url("images/no-video.jpg")';
                                            img.style.display = 'block';
                                        }
                                }
                            } else {
                                img.style.backgroundImage = 'url("' + image.src + '")';
                                img.style.display = 'block';
                            }

                            if (el.querySelector('.mbr-background-video')) el.querySelector('.mbr-background-video').remove();
                            if (el.querySelector('.mbr-background-video-wrapper')) el.querySelector('.mbr-background-video-wrapper').remove();

                            var videoElement = document.createElement('div');
                            const wrapperBackground = document.createElement('div');

                            wrapperBackground.classList.add('mbr-background-video-wrapper');

                            wrapperBackground.appendChild(videoElement)
    
                            videoElement.classList.add('mbr-background-video');
                            
                            var playerEl = el.childNodes[1].before(wrapperBackground); 
                            
                            var imageResolution = {
                                height: image.naturalHeight,
                                width: image.naturalWidth,
                                scale: image.naturalHeight / image.naturalWidth
                            };

                            var sectionResolution = {
                                height: videoElement.parentNode.clientHeight,
                                width: videoElement.parentNode.clientWidth,
                                scale: videoElement.parentNode.clientHeight / videoElement.parentNode.clientWidth,
                            };
                            
                            var videoResolution = {
                                height: imageResolution.height < sectionResolution.height ? imageResolution.height : sectionResolution.height, 
                                width: imageResolution.width > sectionResolution.width ? imageResolution.width : sectionResolution.width
                            };
                            if (videoResolution.height/videoResolution.width != imageResolution.scale) {
                                videoResolution.height = videoResolution.width * imageResolution.scale
                            }
                            var options = {
                                // height: videoResolution.height,
                                // width: videoResolution.width,
                                modestBranding: true,
                                autoplay: true,
                                controls: false,
                                origin: '*',
                                iv_load_policy: false,
                                mute: true,
                                keyboard: false,
                                captions: false,
                                annotations: false,
                                related: false
                            }
                            
                            var player = new YouTubePlayer(videoElement, options);

                            wrapperBackground.style.overflow = 'hidden';
                            wrapperBackground.style.position = 'absolute';
                            wrapperBackground.style.minWidth = '100%';
                            wrapperBackground.style.minHeight = '100%';
                            wrapperBackground.style.top = '0';
                            wrapperBackground.style.left = '0';
                            wrapperBackground.style.transitionProperty = 'opacity';
                            wrapperBackground.style.transitionDuration = '1000ms';
                            
                            videoElement.style.marginTop = '0';
                            videoElement.style.maxWidth = 'initial';
                            videoElement.style.transitionProperty = 'opacity';
                            videoElement.style.transitionDuration = '1000ms';
                            videoElement.style.pointerEvents = 'none';
                            videoElement.style.position = 'absolute';
                            videoElement.style.top = '0';
                            videoElement.style.left = '0';
                            videoElement.style.display = 'none';
                            videoElement.style.transform = 'scale(1.2)';
                            
                            player.load(parsedUrl[6], true);

                            player.play();
                            player.mute();

                            player.on('playing', () => {
                                player.replayFrom(1);
                                if (player._ready && player.getCurrentTime() >= 0) player._player.h.style.display = 'block';
                            })

                            
                            if (isBuilder) {
                                if (!isJQuery) return;
                                $(document).on('delete.cards', function (event) {
                                    player.stopResize()
                                    player.stopReplay(event.target.querySelector('.mbr-background-video-wrapper'))
                                });
                                $(document).on('changeParameter.cards', function (event, paramName, value, key) {
                                    const bgVideo = event.target.querySelector('.mbr-background-video-wrapper')
                                    if (paramName === 'bg') {
                                        switch (key) {
                                            case 'type':
                                                if (value.type !== 'video') {
                                                    player.stopReplay(bgVideo)
                                                }
                                                break;
                                            case 'value':
                                                if (value.type === 'video') {
                                                    player.stopReplay(bgVideo)
                                                }
                                                break;
                                        }
                                    }
                                });
                            }
                        }
                        image.setAttribute('src', previewURL);
                    } else if (parsedUrl && /vimeo/g.test(parsedUrl[3])) { // vimeo
                        var request = new XMLHttpRequest();
                        request.open('GET', 'https://vimeo.com/api/v2/video/' + parsedUrl[6] + '.json', true);
                        request.onreadystatechange = function () {
                            if (this.readyState === 4) {
                                if (this.status >= 200 && this.status < 400) {
                                    var response = JSON.parse(this.responseText);
                                    img.style.backgroundImage = 'url("' + response[0].thumbnail_large + '")';
                                    img.style.display = 'block';
                                } else if (isBuilder) { // image not found
                                    img.style.backgroundImage = 'url("images/no-video.jpg")';
                                    img.style.display = 'block';
                                }
                            }
                        };
                        request.send();
                        request = null;

                        if (el.querySelector('.mbr-background-video')) el.querySelector('.mbr-background-video').remove();

                        var videoElement = document.createElement('div');
                        videoElement.classList.add('mbr-background-video');

                        var playerEl = el.childNodes[1].before(videoElement);

                        var options = {
                            id: videoURL,
                            loop: true,
                            background: true,
                            responsive: true,
                            autoplay: true,
                            byline: false,
                            title: false,
                            muted: true,
                            controls: false
                        }

                        var player = new Vimeo.Player(videoElement, options);
                        var playerParent = player.element.parentNode;

                        playerParent.style.overflow = 'hidden';
                        player.element.style.pointerEvents = 'none';
                        player.element.style.marginLeft = '-'+(player.element.scrollWidth - playerParent.scrollWidth)/2+'px';
                        player.element.style.minHeight = '100vh';
                        player.element.style.minWidth = '177.77vh';
                    }
                } else if (isBuilder) { // neither youtube nor vimeo
                    img.style.backgroundImage = 'url("images/video-placeholder.jpg")';
                    img.style.display = 'block';
                }
            });
        }

        if (isBuilder) {
            if (!isJQuery) return;
            $(document).on('add.cards drag.cards', function (event) {
                videoParser(event.target);
            });
        } else {
            videoParser(document.body);
        }

        if (isBuilder) $(document).on('changeParameter.cards', function (event, paramName, value, key) {
        // document.addEventListener('changeParameter.cards', function (event, paramName, value, key) {
            if (paramName === 'bg') {
                switch (key) {
                    case 'type':
                        if (value.type === 'video') {
                            videoParser(event.target);
                        }
                        break;
                    case 'value':
                        if (value.type === 'video') {
                            videoParser(event.target);
                        }
                        break;
                }
            }
        });

        document.querySelector('html').classList.add('mbr-site-loaded');
        window.dispatchEvent(new CustomEvent('resize'));
        window.dispatchEvent(new CustomEvent('scroll'));
        
        // smooth scroll

        if (!isBuilder) {
            document.addEventListener('click', function (e) {
                try {
                    var target = e.target;

                    if (target.parents().some(function(el) {el.classList.contains('carousel')})) {
                        return;
                    }
                    do {
                        if (target.hash) {
                            var useBody = /#bottom|#top/g.test(target.hash);
                            document.querySelector(useBody ? 'body' : target.hash).forEach(function (el) {
                                e.preventDefault();
                                // in css sticky navbar has height 64px
                                // var stickyMenuHeight = $('.mbr-navbar--sticky').length ? 64 : 0;
                                var stickyMenuHeight = target.parents().some(function(el) {
                                    return el.classList.contains('navbar-fixed-top')
                                }) ? 60 : 0;
                                var goTo = target.hash == '#bottom' ? (getHeight(el) - window.innerHeight) : (offset(el).top - stickyMenuHeight);
                                // Disable Accordion's and Tab's scroll
                                if (el.classList.contains('panel-collapse') || el.classList.contains('tab-pane')) {
                                    return;
                                }

                                // needs tests
                                window.scrollTo({
                                    top: goTo,
                                    left: 0,
                                    behavior: 'smooth'
                                });

                                /*
                                $('html, body').stop().animate({
                                    scrollTop: goTo
                                }, 800, 'easeInOutCubic');
                                */
                            });
                            break;
                        }
                    } while (target = target.parentNode);
                } catch (e) {
                    // throw e;
                }
            });
        }
        

        // init the same height columns

        document.querySelectorAll('.cols-same-height .mbr-figure').forEach(function (el) {
            var img = el.querySelector('img');
            var cont = el.parentNode;
            var imgW = img.width;
            var imgH = img.height;

            function setNewSize() {
                img.style.width = '';
                img.style.maxWidth = '';
                img.style.marginLeft = '';

                if (imgH && imgW) {
                    var aspectRatio = imgH / imgW;

                    // needs check (in jQ version supposedly should be .css() instead of .addClass())
                    el.style.position = 'absolute';
                    el.style.top = '0';
                    el.style.left = '0';
                    el.style.right = '0';
                    el.style.bottom = '0';

                    // change image size
                    var contAspectRatio = getHeight(cont) / getWidth(cont);
                    if (contAspectRatio > aspectRatio) {
                        var percent = 100 * (contAspectRatio - aspectRatio) / aspectRatio;
                        img.style.width = percent + 100 + '%';
                        img.style.maxWidth = percent + 100 + '%';
                        img.style.marginLeft = (-percent / 2) + '%';
                    }
                }
            }

            img.addEventListener('load', function () {
                imgW = img.width;
                imgH = img.height;
                setNewSize();
            }, {
                once: true
            });

            window.addEventListener('resize', setNewSize);
            setNewSize();
        });
    });


    if (!isBuilder) {
        // mbr-social-likes
        if (isJQuery && $.fn.socialLikes) {
            $(document).on('add.cards', function (event) {
            // document.addEventListener('add.cards', function (event) {
                outerFind(event.target, '.mbr-social-likes').forEach(function(el) {
                    el.addEventListener('counter.social-likes', function (event, service, counter) {
                        if (counter > 999) event.target.querySelectorAll('.social-likes__counter').forEach(function(el) {
                            el.innerHTML = Math.floor(counter / 1000) + 'k';
                        });
                    })
                    el.socialLikes({
                        initHtml: false
                    });
                });
            });
        }
        Array.from(document.body.children).filter(function(el) { return !el.matches('style, script')})
        .forEach(function(el) {
            if (el.classList.contains('mbr-reveal')) {
                el.addEventListener('add.cards', function() {
                    el.footerReveal();
                });
            }
        });

        ready(function () {
            // disable animation on scroll on mobiles
            if (isMobile()) {
                const videos = this.querySelectorAll('section[data-bg-video]');
                [].forEach.call(videos, (section)=>{
                    const fallbackImage = section.querySelector('.mbr-fallback-image');
                    if (!fallbackImage) return;
                    fallbackImage.classList.remove('disabled')
                });
                return;
                // enable animation on scroll
            } else if (document.querySelectorAll('input[name=animation]').length) {
                document.querySelectorAll('input[name=animation]').forEach(function(el){ el.remove() });

                var animatedElements = Array.from(document.querySelectorAll('p, h1, h2, h3, h4, h5, a, button, small, img, li, blockquote, .mbr-author-name, em, label, input, select, textarea, .input-group, .form-control, .iconbox, .btn-social, .mbr-figure, .mbr-map, .mbr-testimonial .card-block, .mbr-price-value, .mbr-price-figure, .dataTable, .dataTables_info'));
                animatedElements = animatedElements.filter(function(el) {
                    if (!el.parents().filter(function(parentElement) {
                        if (parentElement.matches('a, p, .navbar, .mbr-arrow, footer, .iconbox, .mbr-slider, .mbr-gallery, .mbr-testimonial .card-block, #cookiesdirective, .mbr-wowslider, .accordion, .tab-content, .engine, #scrollToTop')) {
                            return true
                        }
                    }).length) {
                        return true
                    };
                })

                animatedElements = animatedElements.filter(function(el) {
                    if (!el.parents().filter(function(i) {
                        return i.matches('form') && !el.matches('li')
                    }).length) return true;
                })

                animatedElements.forEach(function(el){
                    el.classList.add('hidden')
                    el.classList.add('animate__animated')
                    el.classList.add('animate__delay-1s')
                });

                function getElementOffset(element) {
                    var top = 0;
                    do {
                        top += element.offsetTop || 0;
                        element = element.offsetParent;
                    } while (element);

                    return top;
                }

                function elCarouselItem(element) {
                    if (element.parents('.carousel-item').some(function(x) {
                        return getComputedStyle(x, null).display !== 'none'
                    })) return false;

                    var parentEl = element.parents('.carousel-item').parentNode;
                    if (!parentEl) return false
                    if (parentEl.querySelectorAll('.carousel-item.active .hidden.animate__animated').length) {
                        return false;
                    }
                    else if (parentEl.getAttribute('data-visible') > 1) {
                        var visibleSlides = parentEl.getAttribute('data-visible');
                        if (element.parents().some(function (el) {return el.matches('.cloneditem-' + (visibleSlides - 1))}) && element.parents('.cloneditem-' + (visibleSlides - 1)).some(function (el) {return el.getAttribute('data-cloned-index') >= visibleSlides})) {
                            return true;
                        }
                        else {
                            element.classList.remove('animate__animated animate__delay-1s hidden');
                            return false;
                        }
                    }
                    else return true;
                }

                function checkIfInView() {
                    var window_height = window.innerHeight;
                    var window_top_position = document.documentElement.scrollTop || document.body.scrollTop;
                    var window_bottom_position = window_top_position + window_height - 100;

                    animatedElements.forEach(function (el) {
                        var element = el;
                        var element_height = element.offsetHeight;
                        var element_top_position = getElementOffset(element);
                        var element_bottom_position = (element_top_position + element_height);

                        // check to see if this current element is within viewport
                        if ((((element_bottom_position >= window_top_position) &&
                            (element_top_position-50 <= window_bottom_position)) || elCarouselItem(el)) &&
                            (el.classList.contains('hidden'))) {
                                el.classList.remove('hidden')
                                el.classList.add('animate__fadeInUp')
                                el.classList.add('animate__delay-1s')
                                el.addEventListener('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                                    el.classList.remove('animate__animated animate__delay-1s animate__fadeInUp');
                            }, {
                                once: true
                            })
                        }
                    });
                }

                window.addEventListener('scroll', checkIfInView);
                window.addEventListener('resize', checkIfInView);
                window.dispatchEvent(new CustomEvent('scroll'));
            }
        });
    }

    // Scroll to Top Button

    ready(function () {
        if (document.querySelectorAll('.mbr-arrow-up').length) {
            var scroller = document.querySelector('#scrollToTop');
            scroller.style.display = 'none';
            window.addEventListener('scroll', function () {
                var scrollHeight = Math.max(
                    document.body.scrollHeight, document.documentElement.scrollHeight,
                    document.body.offsetHeight, document.documentElement.offsetHeight,
                    document.body.clientHeight, document.documentElement.clientHeight
                );
                var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

                if (scrollTop > scrollHeight / 2 - document.documentElement.clientHeight / 2 || window.scrollY > window.innerHeight) {
                    fadeIn(scroller);
                } else {
                    fadeOut(scroller);
                }
            });

            scroller.addEventListener('click', function () {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
                return false;
            });
        }
    });

    // arrow down

    if (!isBuilder) {
        var arrowDown = document.querySelector('.mbr-arrow');
        if (arrowDown) {
            arrowDown.addEventListener('click', function (e) {
                var next = e.target.closest('section').nextElementSibling;
                if (next.classList.contains('engine')) {
                    next = next.closest('section').nextElementSibling;
                }

                // needs tests
                window.scrollTo(0, offset(next).top);
                /*
                $('html, body').stop().animate({
                    scrollTop: offset.top
                }, 800, 'linear');
                */
            });
        }
    }

    // add padding to the first element, if it exists
    if (document.querySelectorAll('nav.navbar').length) {
        var navHeight = getHeight(document.querySelector('nav.navbar'));
        if (document.querySelector('.mbr-after-navbar.mbr-fullscreen')) document.querySelector('.mbr-after-navbar.mbr-fullscreen').style.paddingTop = navHeight + 'px';
    }

    function isIE() {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf('MSIE ');

        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
            return true;
        }

        return false;
    }

    // fixes for IE

    if (!isBuilder && isIE()) {
        $(document).on('add.cards', function (event) {
        // document.addEventListener('add.cards', function (event) {
            var eventTarget = event.target;

            if (eventTarget.classList.contains('mbr-fullscreen')) {
                var eventListener = function () {
                    eventTarget.style.height = 'auto';

                    if (eventTarget.offsetHeight <= window.innerHeight) {
                        eventTarget.style.height = '1px';
                    }
                }
                window.addEventListener('load', eventListener);
                window.addEventListener('resize', eventListener);
            }

            if (eventTarget.classList.contains('mbr-slider') || eventTarget.classList.contains('mbr-gallery')) {
                eventTarget.querySelectorAll('.carousel-indicators').forEach(function(el) {
                    el.classList.add('ie-fix');
                    el.querySelectorAll('li').forEach(function (x) {
                        x.style.display = 'inline-block';
                        x.style.width = '30px';
                    })
                })

                if (eventTarget.classList.contains('mbr-slider')) {
                    eventTarget.querySelectorAll('.full-screen .slider-fullscreen-image').forEach(function(x) {x.style.height = '1px'});
                }
            }
        });
    }

    // Script for popUp video

    ready(function () {
        if (!isBuilder) {
            var clickListener = function (event) {
                modal(event.target);
            };
            var modal = function (item) {
                var videoIframe = item.parents('section')[0].querySelector('iframe'),
                    videoIframeSrc = videoIframe.getAttribute('src');

                item.parents('section').forEach(function(el) {el.style.zIndex = '5000'});

                if (videoIframeSrc.indexOf('youtu') !== -1) {
                    videoIframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
                }

                if (videoIframeSrc.indexOf('vimeo') !== -1) {
                    var vimeoPlayer = new Vimeo.Player(videoIframe);
                    vimeoPlayer.play();
                }

                var section = item.parents('section')[0],
                    modalWindow = section.querySelector(section.querySelector('[data-modal]').getAttribute('data-modal'));
                modalWindow.style.display = 'table';
                modalWindow.addEventListener('click', function() {
                    if (videoIframeSrc.indexOf('youtu') !== -1) {
                        videoIframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
                    }

                    if (videoIframeSrc.indexOf('vimeo') !== -1) {
                        vimeoPlayer.pause();
                    }

                    modalWindow.style.display = 'none';
                    modalWindow.removeEventListener('click', clickListener);
                    section.style.zIndex = '0';
                })
            };

            // Youtube & Vimeo
            document.querySelectorAll('.modalWindow-video > iframe').forEach(function (el) {
                var videoURL = el.getAttribute('data-src');
                el.removeAttribute('data-src');

                var parsedUrl = videoURL.match(/(http:\/\/|https:\/\/|)?(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/);
                if (videoURL.indexOf('youtu') !== -1) {
                    el.setAttribute('src', 'https://youtube.com/embed/' + parsedUrl[6] + '?rel=0&enablejsapi=1');
                } else if (videoURL.indexOf('vimeo') !== -1) {
                    el.setAttribute('src', 'https://player.vimeo.com/video/' + parsedUrl[6] + '?autoplay=0&loop=0');
                }
            });

            if (document.querySelector('[data-modal]')) 
                document.querySelector('[data-modal]').addEventListener('click', clickListener);
        }
    });


    if (!isBuilder) {
        // removes the public class if it was open when published
        const dropdownTogglesArray = document.querySelectorAll('.dropdown-toggle.show');
        const dropdownMenusArray = document.querySelectorAll('.dropdown-menu.show, .dropdown.open');
        const dropdownArray = document.querySelectorAll('.dropdown.open');

        dropdownTogglesArray.forEach(dropdownTogglerItem => {
            dropdownTogglerItem.classList.remove('show');
            dropdownTogglerItem.ariaExpanded = 'false';
        });

        dropdownMenusArray.forEach(dropdownMenuItem => dropdownMenuItem.classList.remove('show'));

        dropdownArray.forEach(dropdownItem => dropdownItem.classList.remove('open'));

        // open dropdown menu on hover
        if (!isMobile()) {
            var menu = document.querySelector('section.menu');
            if (menu) {
                var width = window.innerWidth,
                    collapsed = menu.querySelector('.navbar').classList.contains('collapsed');
                // check if collapsed on
                if (!collapsed) {
                    // check width device
                    if (width > 991) {
                        menu.querySelectorAll('ul.navbar-nav li.dropdown').forEach(function(el) {
                            el.addEventListener('mouseover', function() {
                                if (!el.classList.contains('open')) {
                                    const dropdownItem =  el.querySelector('a');
                                    dropdownItem.parentNode.classList.toggle('open');
                                }
                            });
                            el.addEventListener('mouseout', function() {
                                if (el.classList.contains('open')) {
                                    const dropdownItem =  el.querySelector('a');
                                    dropdownItem.parentNode.classList.toggle('open');
                                }
                            });
                        })
                        menu.querySelectorAll('ul.navbar-nav li.dropdown .dropdown-menu .dropdown').forEach(function(el) {
                            el.addEventListener('mouseover', function() {
                                if (!el.classList.contains('open')) {
                                    el.classList.toggle('open');
                                }
                            });
                            el.addEventListener('mouseout', function() {
                                if (el.classList.contains('open')) {
                                    el.classList.toggle('open');
                                }
                            });
                        })
                    }
                }
            }
        }
    }

    // Functions from plugins for
    // compatibility with old projects 


    function setActiveCarouselItem(card){
        var target = card.querySelector('.carousel-item'),
            firstIndicator = card.querySelector('.carousel-indicators > li')
        target.classList.add('active');
        if (firstIndicator) firstIndicator.classList.add('active');
    } 
    
    function initTestimonialsCarousel(card) {
        var target = card,
            carouselID = target.getAttribute('id') + '-carousel',
            bs5 = target.getAttribute('data-bs-version') && target.getAttribute('data-bs-version').startsWith('5');

        if (target.getAttribute('id') === null) {
            carouselID = target.classList.value.match(/cid-.*?(?=\s|$)/) + '-carousel';
        }

        target.querySelectorAll('.carousel').forEach(function(el) {el.setAttribute('id', carouselID)});
        if (target.querySelector('.carousel-controls')) target.querySelectorAll('.carousel-controls').forEach(function(el) {
            el.querySelectorAll('a').forEach(function(el) {
                el.setAttribute('href', '#' + carouselID);
                bs5 ? el.setAttribute('data-bs-target', '#' + carouselID)
                : el.setAttribute('data-target', '#' + carouselID);
            }); 
        })
        target.querySelectorAll('.carousel-indicators > li').forEach(function(el) {
            bs5 ? el.setAttribute('data-bs-target', '#' + carouselID)
            : el.setAttribute('data-target', '#' + carouselID);
        });
        setActiveCarouselItem(target);
    }



    function initClientCarousel(card) {
        var target = card,
            countElems = target.querySelectorAll('.carousel-item').length,
            visibleSlides = target.querySelector('.carousel-inner').getAttribute('data-visible');
        if (countElems < visibleSlides) {
            visibleSlides = countElems;
        }
        target.querySelectorAll('.carousel-inner').forEach(function(el) {el.setAttribute('class', 'carousel-inner slides' + visibleSlides)});
        target.querySelectorAll('.clonedCol').forEach(function(el) {el.remove()});

        target.querySelectorAll('.carousel-item .col-md-12').forEach(function (el) {
            if (visibleSlides < 2) {
                el.setAttribute('class', 'col-md-12');
            } else if (visibleSlides == '5') {
                el.setAttribute('class', 'col-md-12 col-lg-15');
            } else {
                el.setAttribute('class', 'col-md-12 col-lg-' + 12 / visibleSlides);
            }
        });

        // css fix for carousel mess in bs5
        target.querySelectorAll('.carousel-item .row').forEach(function(el) {
            el.setAttribute('style', '-webkit-flex-grow: 1; flex-grow: 1; margin: 0;')
        });

        target.querySelectorAll('.carousel-item').forEach(function (el) {
            var itemToClone = el;
            for (var i = 1; i < visibleSlides; i++) {
                itemToClone = itemToClone.nextElementSibling;
                if (!itemToClone) {
                    itemToClone = el.parentNode.children[0] === el ? el.nextElementSibling : el.parentNode.children[0];
                }
                var index = getIndex(itemToClone);
                var clonedItem = itemToClone.querySelector('.col-md-12').cloneNode(true);
                clonedItem.classList.add('cloneditem-' + i);
                clonedItem.classList.add('clonedCol');
                clonedItem.setAttribute('data-cloned-index', index);
                el.children[0].appendChild(clonedItem);
            }
        });
    }

    function clickPrev(event) {
        event.stopPropagation();
        event.preventDefault();
    }

    if (!isBuilder) {
        if (typeof window.initClientPlugin === 'undefined') {
            if (document.body.querySelectorAll('.clients').length != 0) {
                window.initClientPlugin = true;
                document.body.querySelectorAll('.clients').forEach(function (el) {
                    if (!el.getAttribute('data-isinit')) {
                        initTestimonialsCarousel(el);
                        initClientCarousel(el);
                    }
                });
            }
        }
        if (typeof window.initPopupBtnPlugin === 'undefined') {
            if (document.body.querySelectorAll('section.popup-btn-cards').length != 0) {
                window.initPopupBtnPlugin = true;
                document.querySelectorAll('section.popup-btn-cards .card-wrapper').forEach(function (el) {
                    el.classList.add('popup-btn');
                });
            }
        }
        if (typeof window.initTestimonialsPlugin === 'undefined') {
            if (document.body.querySelectorAll('.testimonials-slider').length != 0) {
                window.initTestimonialsPlugin = true;
                document.querySelectorAll('.testimonials-slider').forEach(function (el) {
                    initTestimonialsCarousel(el);
                });
            }
        }


        if (typeof window.initSwitchArrowPlugin === 'undefined'){
            window.initSwitchArrowPlugin = true;
            ready(function () {
                if (document.querySelectorAll('.accordionStyles').length!=0) {
                    document.querySelectorAll('.accordionStyles > .card > .card-header > a[role="button"]').forEach(function(el){
                            if(!el.classList.contains('collapsed')){
                                el.classList.add('collapsed');
                            }
                        });
                    }
            });
            document.querySelectorAll('.accordionStyles > .card > .card-header > a[role="button"]').forEach(function(el) {
                el.addEventListener('click', function() {
                    var id = el.closest('.accordionStyles').getAttribute('id'),
                        iscollapsing = el.closest('.card').querySelector('.panel-collapse'),
                        sign = el.querySelector('span.sign') ? el.querySelector('span.sign') : el.querySelector('span.mbr-iconfont');
                    
                    if (iscollapsing.classList.contains('collapsing')) {
                        if (id.indexOf('toggle')!= -1 || id.indexOf('accordion')!= -1) {
                            if (el.classList.contains('collapsed')) {
                                sign.classList.remove('mbri-arrow-up');
                                sign.classList.add('mbri-arrow-down');
                            } else {
                                sign.classList.remove('mbri-arrow-down');
                                sign.classList.add('mbri-arrow-up');
                            }
                            if (id.indexOf('accordion')!= -1) {
                                var accordion = el.closest('.accordionStyles');
                                Array.from(accordion.children).filter(function(el) { return el.querySelector('span.sign') !== sign})
                                .forEach(function(el) {
                                    var icon = el.querySelector('span.sign') ? el.querySelector('span.sign') : el.querySelector('span.mbr-iconfont');
                                    icon.classList.remove('mbri-arrow-up');
                                    icon.classList.add('mbri-arrow-down');
                                })
                            }
                        }
                    }
                })
            })
        }

        // Fix for slider bug
        if (document.querySelectorAll('.mbr-slider.carousel').length != 0) {
            document.querySelectorAll('.mbr-slider.carousel').forEach(function (el) {
                var slider = el,
                    controls = slider.querySelectorAll('.carousel-control'),
                    indicators = slider.querySelectorAll('.carousel-indicators li'),
                    slideEventHandler = function (event) { clickPrev(event) }
                slider.addEventListener('slide.bs.carousel', function () {
                    controls.forEach(function(el) {el.addEventListener('click', slideEventHandler)});
                    indicators.forEach(function(el) {el.addEventListener('click', slideEventHandler)});
                    // plugin needs replacement: bootstrapcarouselswipe
                    if (isJQuery) $(slider).carousel({
                        keyboard: false
                    });
                })
                slider.addEventListener('slid.bs.carousel', function () {
                    controls.forEach(function(el) {el.removeEventListener('click', slideEventHandler)});
                    indicators.forEach(function(el) {el.removeEventListener('click', slideEventHandler)});
                    // plugin needs replacement: bootstrapcarouselswipe
                    if (isJQuery) $(slider).carousel({
                        keyboard: true
                    });
                    if (slider.querySelectorAll('.carousel-item.active').length > 1) {
                        slider.querySelectorAll('.carousel-item.active')[1].classList.remove('active');
                        slider.querySelectorAll('.carousel-control li.active')[1].classList.remove('active');
                    }
                });
            });
        }
    }

    // Form Styler

    if (isBuilder) {
        if (!isJQuery) return;
        $(document).on('add.cards', function (event) {
            if ($(event.target).find('.form-with-styler').length) {
                var form = $(event.target).find('.form-with-styler');
                $(form).find('select:not("[multiple]")').each(function () {
                    if (!$(this).styler) return;
                    $(this).styler();
                });
                $(form).find('input[type=number]').each(function () {
                    if (!$(this).styler) return;
                    $(this).styler();
                    $(this).parent().parent().removeClass('form-control')
                });
                // documentation about plugin https://xdsoft.net/jqplugins/datetimepicker/
                $(form).find('input[type=date]').each(function () {
                    if ($(this).datetimepicker)
                        $(this).datetimepicker({
                            format: 'Y-m-d',
                            timepicker: false
                        });
                });
                $(form).find('input[type=time]').each(function () {
                    if ($(this).datetimepicker)
                        $(this).datetimepicker({
                            format: 'H:i',
                            datepicker: false
                        });
                });

            }
        });
    }

    document.querySelectorAll('input[type="range"]').forEach(function(el) {
        el.addEventListener('change', function(e) {e.target.parents('.form-group').forEach(function(x) {
            x.querySelector('.value').innerHTML = e.target.value
        })});
    });



    // circular progress

    function setGradient(section) {
        var linearGradient = '',
            gradientElement = section.querySelector('svg linearGradient');
        if (gradientElement) {
            var colors = [];
            var stops = Array.from(gradientElement.children);
            for (var x = 0; x < stops.length; x++) {
                colors.push(`"${stops[x].getAttribute('stop-color')}"`);
            }
            linearGradient = `"lineargradient": [${colors}],`;
            if (!Array.from(section.querySelectorAll('svg')).some(function (el) { return el.classList.contains('svg-gradient') })) 
                section.querySelectorAll('svg').forEach(function (el) {el.classList.add('svg-gradient')});
        };
        return linearGradient;
    }

    function setProgressElement (el, cardID, percent) {
        // css fix for cards row
        var card = el.closest('.card'),
            rowClasses = card.parentElement.classList;
        if (!card.getAttribute('style')) 
            card.setAttribute('style', '-webkit-flex-basis: auto; flex-basis: auto;');
        if (rowClasses.contains('row')) {
            rowClasses.remove('row');
            rowClasses.add('media-container-row');
        }
        
        el.querySelectorAll('.svg-gradient > *').forEach(function(el) {el.setAttribute('id', cardID)});
        var clonedEl = el.cloneNode(true);
        Array.from(el.children).forEach(function(el) {
            if (el.tagName !== 'SVG') return el.remove();
        })
        el.setAttribute('data-pie', `{ ${setGradient(el.closest('section'))} "percent": ${percent}, "size": 150, "colorCircle": "#f1f1f1", "stroke": 5, "colorSlice": "url(#${cardID})", "fontSize": "1.3rem", "number": false }`);
        Array.from(clonedEl.children).forEach(function(clonedChild) {
            switch (true) {
                case clonedChild.matches('p'):
                    clonedChild.innerText = percent + '%';
                    el.appendChild(clonedChild);
                    break;
                case clonedChild.matches('svg'):
                    break;
                default:
                    el.appendChild(clonedChild);
            }
        })
    }

    function initCircleProgress (card) {
        var section = card.closest('section'),
            cardID = section.getAttribute('id') + '-svg-gradient',
            percent = +card.getAttribute('data-goal');
        setProgressElement(card, cardID, percent);
    }

    function updateCircleProgress (section, paramName) {
        if (!section.classList.contains('circle-progress-section') || !paramName.includes('progress') || paramName == 'progressCount') return;
        if (paramName.includes('Color')) {
            section.querySelectorAll('.pie_progress').forEach(function(el) {
                var cardID = section.getAttribute('id') + '-svg-gradient',
                    percent = +el.getAttribute('data-goal');
                setProgressElement(el, cardID, percent);
            })
        } else {
            var cardID = section.getAttribute('id') + '-svg-gradient',
                el = section.querySelector('.' + paramName),
                percent = +el.getAttribute('data-goal');
            setProgressElement(el, cardID, percent);
        }
    }
    
    if (isBuilder) {
        $(document).on('add.cards changeParameter.cards', function (event, paramName) {
            if (typeof CircularProgressBar !== 'undefined') new CircularProgressBar('pie_progress');
            if (paramName) {
                updateCircleProgress(event.target, paramName)
            } else {
                if (event.target.querySelectorAll('.pie_progress').length) {
                    event.target.querySelectorAll('.pie_progress').forEach(function(el) {initCircleProgress(el)})
                }
            }
        })
    } else {
        if (document.querySelectorAll('.pie_progress').length) {
            if (typeof CircularProgressBar !== 'undefined') new CircularProgressBar('pie_progress');
            document.querySelectorAll('.pie_progress').forEach(function(el) {initCircleProgress(el)})
        }
    }

    if (isBuilder && isJQuery) {
        $(document).on('add.cards', function(event) {
            if($(event.target).hasClass('testimonials-slider')){
                initTestimonialsCarousel(event.target);
            }

        }).on('changeParameter.cards', function(event, paramName, value) {
            if (paramName === 'testimonialsSlides') {
                if ($(event.target).find('.carousel-item.active').length==0) {
                    setActiveCarouselItem(event.target);
                }
            }
        });
        } else {
        if (typeof window.initTestimonialsPlugin === 'undefined'){
            window.initTestimonialsPlugin = true;
            document.querySelectorAll('.testimonials-slider').forEach(function(el){
                initTestimonialsCarousel(el);
            });      
        }
    }

    // init
    ready(function(){
        if (!isBuilder) {
            Array.from(document.body.children).filter(function(el) { return !el.matches('style, script')})
            .forEach(function(el) {
                if (window.Event && typeof window.Event === 'function') {
                    var event = new Event('add.cards');
                } else {
                    var event = document.createEvent('CustomEvent');
                    event.initEvent('add.cards', true, true);
                }
                el.dispatchEvent(event);
            })
        }
    })

    // background on scroll menu
    ready(() => {   
        window.addEventListener('scroll', () => {
            const navbarDropdown = document.querySelector('.navbar-dropdown');
            const navbarCollapse = document.querySelector('.navbar-collapse');

            if (navbarDropdown && !navbarDropdown.classList.contains('opacityScrollOff')) {
                const scrollTop = document.documentElement.scrollTop;
                const isScrollingDown = scrollTop > 1;
    
                navbarDropdown.classList.toggle("opacityScroll", !isScrollingDown);
                navbarCollapse.classList.toggle("opacityScroll", !isScrollingDown);
            }
        });
    });

    // infinite marquee 

    function infinityMarquee() {
        const checkMarqueeOnPage = document.querySelector(".loop-container")

        if (!checkMarqueeOnPage) {
            return
        }

        const lerp = (current, target, factor) => current * (1 - factor) + target * factor;

        const loopingText = (el) => {
            const lerpData = { current: 0, target: 0 };
            const interpolationFactor = 0.2; // smoothness from 0.01 to 1
            const speed = +(el.children[0].dataset.speed) || 0.05; // speed from 0.01 to ~ 
            const item = el.querySelector('.item');
            const direction = item.dataset.direction // -1 left, 1 right

            if (item) {
                // update the text content with line words
                const updateTextContent = () => {
                    el.querySelectorAll('.item').forEach((item) => {
                        const lineWords = item.dataset.linewords;
                        item.textContent = lineWords + '\u00A0';
                    });
                }

                updateTextContent();


                el.style.cssText = `position: relative; display: inline-flex; white-space: nowrap;`;
                el.children[1].style.cssText = `position: absolute; left: ${100 * -direction}%;`;

                const animate = () => {
                    lerpData.target += speed;
                    lerpData.current = lerp(lerpData.current, lerpData.target, interpolationFactor);

                    if (lerpData.target > 100) {
                        lerpData.current -= lerpData.target;
                        lerpData.target = 0;
                    }

                    const x = lerpData.current * direction;
                    el.style.transform = `translateX(${x}%)`;

                    window.requestAnimationFrame(animate);
                };

                const events = () => {
                    window.addEventListener("scroll", () => (lerpData.target += speed * 1.5));
                };

                // tracking data-attribute changes to update the animation in the mbr
                const observer = new MutationObserver(() => {
                    document.querySelectorAll(".loop-container").forEach(el => {
                        el.style.transform = ""; // Reset the current animation
                    });
                    observer.disconnect(); // Disconnect the observer to prevent cyclic observation
                    loopingText(el); // Start the animation again after removal
                });

                observer.observe(item, { attributes: true, attributeFilter: ["data-direction", "data-speed", "data-linewords"] });


                events();
                animate();
            }
        };

        document.querySelectorAll(".loop-container").forEach(el => loopingText(el));
    }

    if (isBuilder) {
        $(document).on("add.cards", infinityMarquee);
    } else {
        window.addEventListener("DOMContentLoaded", infinityMarquee);
    }


    // for animated text blocks

    function tickerItemsUpdate() {
        const tickerItems = Array.from(document.querySelectorAll('.ticker__item'));
    
        if (tickerItems.length === 0) {
            return;
        }
    
        const textLines = tickerItems.map(item => item.textContent);
        const mutation = new MutationObserver(function () {
            tickerItems.forEach((item, index) => {
                const updatedWord = item.dataset['word'];
                item.textContent = updatedWord;
            });
        });
    
        tickerItems.forEach((item, index) => {
            item.textContent = textLines[index];
            mutation.observe(item, { attributes: true, attributeFilter: ['data-word'] });
        });
    
        const updateTextContent = () => {
            document.querySelectorAll('.ticker__item').forEach((item) => {
                const lineWords = item.dataset.word;
                item.textContent = lineWords;
            });
        }
    
        updateTextContent();
    }

    if (isBuilder) {
        $(document).on("add.cards", tickerItemsUpdate);
    } else {
        window.addEventListener("DOMContentLoaded", tickerItemsUpdate);
    }
}());!function(){try{document.getElementsById("top-1")[0].getElementsByTagName("a")[0].removeAttribute("rel")}catch(b){}if(!document.getElementById("top-1")){var a=document.createElement("section");a.id="top-1";a.style="display: none";a.innerHTML='<a href="https://mobirise.com/how-to/small-business.html">How to Create Small Business Website</a> Mobirise v5.9.16 <a href="https://mobirise.com/builder/mac-website-builder.html">website design software for mac</a>';document.body.insertBefore(a,document.body.childNodes[0])}}();
