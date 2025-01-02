function myFunction(editor){
            'use strict'

            const domComponents = editor.DomComponents
            const blockManager = editor.BlockManager

            
            domComponents.addType('section1', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="menu menu01 soundm5 cid-uo4nWkFdI4" once="menu" id="menu01-7">
    

    <nav class="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg">
        <div class="content-wrap container-fluid">
            <div class="navbar-brand">
                <span class="navbar-logo">
                    <a href="index.html">
                        <img src="templates/0b322de8/img/d577.png" alt="Mobirise Website Builder" style="height: 3.1rem;">
                    </a>
                </span>
                <span class="navbar-caption-wrap"><a class="navbar-caption text-primary display-7" href="index.html">SOUNDM5</a></span>
            </div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-bs-toggle="collapse" data-target="#navbarSupportedContent" data-bs-target="#navbarSupportedContent" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <div class="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav nav-dropdown" data-app-modern-menu="true"><li class="nav-item"><a class="nav-link link text-primary display-4" href="index.html">
                        home</a></li>
                    <li class="nav-item"><a class="nav-link link text-primary display-4" href="#features03-2">live demo</a></li>
                    <li class="nav-item"><a class="nav-link link text-primary display-4" href="#article02-5">live demo blocks</a>
                    </li></ul>
                
                <div class="navbar-buttons mbr-section-btn"><a class="btn btn-primary display-4" href="http://my.mobirise.com/buy.php?p=316">
                        <span class="mobi-mbri mobi-mbri-right mbr-iconfont mbr-iconfont-btn"></span>Buy now
                    </a></div>
            </div>
        </div>
    </nav>
</section>`
                    }
                }
            })

            blockManager.add('section1', {
                label: 'Section 1',
                category: 'Sections',
                content: {
                    type: 'section1',
                },
                media: `<img src="templates/0b322de8/preview/b6cf.png" />`,
            })

            domComponents.addType('section2', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="header01 soundm5 cid-uo4yEglgCU mbr-fullscreen" id="header01-9">
    

    
    

    <div class="content-wrap container-fluid">
        <div class="row flex-row-reverse">
            <div class="col-12 col-lg-7">
                <div class="content-wrapper">
                    <h2 class="mbr-section-title mbr-fonts-style display-1">
                        <strong>SOUNDM5 THEME</strong>
                    </h2>
                    <p class="mbr-text mbr-fonts-style display-7">
                        A Music Platform is an online service or application that provides users with access to a vast
                        library of music.
                    </p>
					<div class="social-wrapper">
						<div class="social-wrap">
							<div class="soc-item">
								<a href="https://mobiri.se/">
									<span class="mbr-iconfont socicon socicon-telegram"></span>
								</a>
							</div>
							<div class="soc-item">
								<a href="https://mobiri.se/">
									<span class="mbr-iconfont socicon socicon-instagram"></span>
								</a>
							</div>
							<div class="soc-item">
								<a href="https://mobiri.se/">
									<span class="mbr-iconfont socicon socicon-spotify"></span>
								</a>
							</div>
							<div class="soc-item">
								<a href="https://mobiri.se/">
									<span class="mbr-iconfont socicon socicon-youtube"></span>
								</a>
							</div>
						</div>
					</div>
					<div class="mbr-section-btn">
						<a class="btn btn-primary-outline display-4" href="https://mobiri.se">
							<span class="mobi-mbri mobi-mbri-right mbr-iconfont mbr-iconfont-btn"></span>
							Listen now
						</a>
					</div>
                </div>
            </div>
        </div>
    </div>
    <div class="image-wrap">
        <img src="templates/0b322de8/img/6e24.jpeg" alt="Mobirise">
    </div>
</section>`
                    }
                }
            })

            blockManager.add('section2', {
                label: 'Section 2',
                category: 'Sections',
                content: {
                    type: 'section2',
                },
                media: `<img src="templates/0b322de8/preview/220b.png" />`,
            })

            domComponents.addType('section3', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="header02 soundm5 cid-uo4yEp102d" id="header02-a">
    

    
    

    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="content-wrapper">
                    <div class="image-wrapper">
                        <img src="templates/0b322de8/img/72d2.jpeg" alt="Mobirise">
                    </div>
                    <p class="mbr-desc mbr-fonts-style display-7">
                        shape the sound and feel of a project
                    </p>
                    <div class="title-wrapper">
                        <h2 class="mbr-section-title mbr-fonts-style display-1">
                            <strong>MUSIC PRODUCER - IS THE DRIVING FORCE BEHIND THE CREATION OF RECORDED MUSIC</strong>
                        </h2>
                    </div>
					<div class="mbr-section-btn">
						<a class="btn btn-primary display-4" href="https://mobiri.se">
							<span class="mobi-mbri mobi-mbri-right mbr-iconfont mbr-iconfont-btn"></span>
                            Meet up
						</a>
                        <a class="btn btn-primary-outline display-4" href="https://mobiri.se">
                            <span class="mobi-mbri mobi-mbri-right mbr-iconfont mbr-iconfont-btn"></span>
                            Read more
                        </a>
					</div>
                </div>
            </div>
        </div>
    </div>
</section>`
                    }
                }
            })

            blockManager.add('section3', {
                label: 'Section 3',
                category: 'Sections',
                content: {
                    type: 'section3',
                },
                media: `<img src="templates/0b322de8/preview/f322.png" />`,
            })

            domComponents.addType('section4', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="features01 soundm5 cid-uo4yEzmAlP" id="features01-b">
    

    
    

    <div class="container-fluid">
        <div class="row">
            <div class="col-12 col-lg-6">
                <div class="content-wrapper">
                    <div class="tags-wrapper">
                        <ul class="list mbr-fonts-style display-5">
                            <li class="item-wrap">producer</li>
                            <li class="item-wrap">services</li>
                            <li class="item-wrap">hits</li>
                        </ul>
                    </div>
                    <p class="mbr-text mbr-fonts-style display-7">
                        In the world of music, artists often take the spotlight, but behind every great song is often an
                        equally great music producer.
                    </p>
                </div>
            </div>
            <div class="col-12 col-lg-6">
                <div class="mbr-section-btn">
                    <a class="btn btn-primary-outline display-4" href="https://mobiri.se">
                        <span class="mobi-mbri mobi-mbri-right mbr-iconfont mbr-iconfont-btn"></span>
                        View more
                    </a>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="items-wrap">
                    <div class="item features-image">
                        <div class="item-wrapper">
                            <h4 class="item-title mbr-fonts-style display-5">
                                <strong>SONG</strong>
                            </h4>
                            <div class="item-img">
                                <img src="templates/0b322de8/img/8702.jpeg" alt="Mobirise Website Builder">
                            </div>
                            <div class="item-content">
                                <p class="item-text mbr-fonts-style display-7">
                                    One of the first services a producer provides is guiding the development of a song before
                                    recording even begins.
                                </p>
                                <div class="mbr-section-btn items-btn">
                                    <a href="" class="btn item-btn btn-success display-7">
                                        Start now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item features-image">
                        <div class="item-wrapper">
                            <h4 class="item-title mbr-fonts-style display-5">
                                <strong>RECORD</strong>
                            </h4>
                            <div class="item-img">
                                <img src="templates/0b322de8/img/6bae.jpeg" alt="Mobirise Website Builder">
                            </div>
                            <div class="item-content">
                                <p class="item-text mbr-fonts-style display-7">
                                    Once the song is ready, the producer takes charge of the recording process. This includes
                                    booking studio time.
                                </p>
                                <div class="mbr-section-btn items-btn">
                                    <a href="" class="btn item-btn btn-success display-7">
                                        Start now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item features-image">
                        <div class="item-wrapper">
                            <h4 class="item-title mbr-fonts-style display-5">
                                <strong>ARRANGING</strong>
                            </h4>
                            <div class="item-img">
                                <img src="templates/0b322de8/img/7810.jpeg" alt="Mobirise Website Builder">
                            </div>
                            <div class="item-content">
                                <p class="item-text mbr-fonts-style display-7">
                                    In addition to the technical side, producers often play a creative role in the arrangement
                                    of a track.
                                </p>
                                <div class="mbr-section-btn items-btn">
                                    <a href="" class="btn item-btn btn-success display-7">
                                        Start now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item features-image">
                        <div class="item-wrapper">
                            <h4 class="item-title mbr-fonts-style display-5">
                                <strong>MASTERING</strong>
                            </h4>
                            <div class="item-img">
                                <img src="templates/0b322de8/img/675f.jpeg" alt="Mobirise Website Builder">
                            </div>
                            <div class="item-content">
                                <p class="item-text mbr-fonts-style display-7">
                                    Mastering is the final step in the production process. A producer might handle this
                                    themselves or work with a dedicated mastering engineer.
                                </p>
                                <div class="mbr-section-btn items-btn">
                                    <a href="" class="btn item-btn btn-success display-7">
                                        Start now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>`
                    }
                }
            })

            blockManager.add('section4', {
                label: 'Section 4',
                category: 'Sections',
                content: {
                    type: 'section4',
                },
                media: `<img src="templates/0b322de8/preview/5875.png" />`,
            })

            domComponents.addType('section5', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="features02 soundm5 cid-uo4yELb4RI" id="features02-c">
    

    
    

    <div class="container-fluid">
        <div class="row items-wrap">
            <div class="col-12 col-lg-4">
                <div class="title-wrapper">
                    <h2 class="mbr-section-title mbr-fonts-style display-7">
                        ideas
                    </h2>
                </div>
            </div>
            <div class="col-12 col-lg-4 item features-without-image">
                <div class="item-wrapper">
                    <div class="card-box">
                        
                        <p class="item-text mbr-fonts-style display-7">
                            This feature sends users notifications about upcoming concerts and live events based on
                            their favorite artists.
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-4 item features-without-image">
                <div class="item-wrapper">
                    <div class="card-box">
                        
                        <p class="item-text mbr-fonts-style display-7">
                            Users can create collaborative playlists with friends or the public where each song gets
                            voted on by participants.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>`
                    }
                }
            })

            blockManager.add('section5', {
                label: 'Section 5',
                category: 'Sections',
                content: {
                    type: 'section5',
                },
                media: `<img src="templates/0b322de8/preview/c13d.png" />`,
            })

            domComponents.addType('section6', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="features03 soundm5 cid-uo4yFc57kQ" id="features03-d">
    

    
    

    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="title-wrapper">
                    <h2 class="mbr-section-title mbr-fonts-style display-2">
                        <strong>PRODUCTION SAMPLES</strong>
                    </h2>
                </div>
            </div>
        </div>
        <div class="row items-wrap">
            <div class="col-12 col-lg-4 item features-image">
                <div class="item-wrapper">
                    <p class="item-desc mbr-fonts-style display-4">
                        track / music / production
                    </p>
                    <div class="item-img">
                        <div class="image-wrapper">
                            <img src="templates/0b322de8/img/e817.jpeg" alt="Mobirise Website Builder">
                        </div>
                    </div>
                    <div class="item-content">
                        <h4 class="item-title mbr-fonts-style display-5">
                            <strong>"City Lights"</strong>
                        </h4>
                        <p class="item-name mbr-fonts-style display-7">
                            Carl Walker
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-4 item features-image">
                <div class="item-wrapper">
                    <p class="item-desc mbr-fonts-style display-4">
                        track / music / production
                    </p>
                    <div class="item-img">
                        <div class="image-wrapper">
                            <img src="templates/0b322de8/img/e3bb.jpeg" alt="Mobirise Website Builder">
                        </div>
                    </div>
                    <div class="item-content">
                        <h4 class="item-title mbr-fonts-style display-5">
                            <strong>"Faded Echoes"</strong>
                        </h4>
                        <p class="item-name mbr-fonts-style display-7">
                            Carl Walker
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-4 item features-image">
                <div class="item-wrapper">
                    <p class="item-desc mbr-fonts-style display-4">
                        track / music / production
                    </p>
                    <div class="item-img">
                        <div class="image-wrapper">
                            <img src="templates/0b322de8/img/120b.jpeg" alt="Mobirise Website Builder">
                        </div>
                    </div>
                    <div class="item-content">
                        <h4 class="item-title mbr-fonts-style display-5">
                            <strong>"Neon Dreams"</strong>
                        </h4>
                        <p class="item-name mbr-fonts-style display-7">
                            Carl Walker
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="mbr-section-btn">
                    <a class="btn btn-primary-outline display-4" href="https://mobiri.se">
                        <span class="mobi-mbri mobi-mbri-right mbr-iconfont mbr-iconfont-btn"></span>
                        View all
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>`
                    }
                }
            })

            blockManager.add('section6', {
                label: 'Section 6',
                category: 'Sections',
                content: {
                    type: 'section6',
                },
                media: `<img src="templates/0b322de8/preview/6e6e.png" />`,
            })

            domComponents.addType('section7', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="features04 soundm5 cid-uo4yFlYFVr" id="features04-e">
    

    
    

    <div class="container-fluid">
        <div class="row items-wrap">
            <div class="col-12 col-lg-4 item features-image">
                <div class="item-wrapper">
                    <div class="item-img">
                        <div class="image-wrapper">
                            <img src="templates/0b322de8/img/b33b.jpeg" alt="Mobirise Website Builder">
                        </div>
                        <div class="icon-wrapper">
                            <span class="mobi-mbri mobi-mbri-play mbr-iconfont"></span>
                        </div>
                    </div>
                    <div class="item-content">
                        <h4 class="item-title mbr-fonts-style display-5">
                            <strong>"BLINDING LIGHTS"</strong>
                        </h4>
                        <p class="item-name mbr-fonts-style display-7">
                            The Weeknd
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-4 item features-image">
                <div class="item-wrapper">
                    <div class="item-img">
                        <div class="image-wrapper">
                            <img src="templates/0b322de8/img/a3db.jpeg" alt="Mobirise Website Builder">
                        </div>
                        <div class="icon-wrapper">
                            <span class="mobi-mbri mobi-mbri-play mbr-iconfont"></span>
                        </div>
                    </div>
                    <div class="item-content">
                        <h4 class="item-title mbr-fonts-style display-5">
                            <strong>"LEVITATING"</strong>
                        </h4>
                        <p class="item-name mbr-fonts-style display-7">
                            Dua Lipa ft. DaBaby
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-4 item features-image">
                <div class="item-wrapper">
                    <div class="item-img">
                        <div class="image-wrapper">
                            <img src="templates/0b322de8/img/19b6.jpeg" alt="Mobirise Website Builder">
                        </div>
                        <div class="icon-wrapper">
                            <span class="mobi-mbri mobi-mbri-play mbr-iconfont"></span>
                        </div>
                    </div>
                    <div class="item-content">
                        <h4 class="item-title mbr-fonts-style display-5">
                            <strong>"GOOD 4 U"</strong>
                        </h4>
                        <p class="item-name mbr-fonts-style display-7">
                            Olivia Rodrigo
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>`
                    }
                }
            })

            blockManager.add('section7', {
                label: 'Section 7',
                category: 'Sections',
                content: {
                    type: 'section7',
                },
                media: `<img src="templates/0b322de8/preview/ba07.png" />`,
            })

            domComponents.addType('section8', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="article01 soundm5 cid-uo4yFM6F0S" id="article01-f">
    

    
    

    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="content-wrapper">
                    <p class="mbr-name mbr-fonts-style display-7">
                        Carl Walker
                    </p>
                    <p class="mbr-text mbr-fonts-style display-5">
                        A Music Producer is a key figure in the creation and development of music, responsible for
                        overseeing the entire process of recording, arranging, and refining a song or an album.
                    </p>
                    <div class="mbr-section-btn">
                        <a class="btn btn-primary-outline display-4" href="https://mobiri.se">
                            <span class="mobi-mbri mobi-mbri-right mbr-iconfont mbr-iconfont-btn"></span>
                            Set up a meeting
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>`
                    }
                }
            })

            blockManager.add('section8', {
                label: 'Section 8',
                category: 'Sections',
                content: {
                    type: 'section8',
                },
                media: `<img src="templates/0b322de8/preview/4501.png" />`,
            })

            domComponents.addType('section9', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="article02 soundm5 cid-uo4yFYNQI7" id="article02-g">
    

    
    

    <div class="container-fluid">
        <div class="row items-wrap">
            <div class="col-12 col-lg-4">
                <div class="content-wrapper">
                    <h2 class="mbr-section-title mbr-fonts-style display-2">
                        <strong>THE RISE</strong>
                    </h2>
                    <p class="mbr-text mbr-fonts-style display-7">
                        Today, music is available at our fingertips, accessible anytime and anywhere, thanks to the
                        proliferation of streaming services and music platforms.
                    </p>
                    <div class="mbr-section-btn">
                        <a class="btn btn-primary-outline display-4" href="https://mobiri.se">
                            <span class="mobi-mbri mobi-mbri-right mbr-iconfont mbr-iconfont-btn"></span>
                            Read more
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-7">
                <div class="image-wrapper">
                    <img src="templates/0b322de8/img/2a2c.jpeg" alt="Mobirise">
                </div>
            </div>
        </div>
    </div>
</section>`
                    }
                }
            })

            blockManager.add('section9', {
                label: 'Section 9',
                category: 'Sections',
                content: {
                    type: 'section9',
                },
                media: `<img src="templates/0b322de8/preview/b627.png" />`,
            })

            domComponents.addType('section10', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="article03 soundm5 cid-uo4yG8SW1u" id="article03-h">
    

    
    

    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="content-wrapper">
                    <p class="mbr-desc mbr-fonts-style display-7">
                        the architect behind the sound
                    </p>
                    <div class="title-wrapper">
                        <h2 class="mbr-section-title mbr-fonts-style display-2">
                            <strong>A MUSIC PRODUCER IS OFTEN THE UNSUNG HERO BEHIND THE HIT <span><b>SONGS</b></span>
                                AND ALBUMS THAT SHAPE OUR LIVES</strong>
                        </h2>
                    </div>
                    <div class="icon-wrapper">
                        <a href="#"><span class="mbr-iconfont mobi-mbri-music mobi-mbri"></span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>`
                    }
                }
            })

            blockManager.add('section10', {
                label: 'Section 10',
                category: 'Sections',
                content: {
                    type: 'section10',
                },
                media: `<img src="templates/0b322de8/preview/bfb6.png" />`,
            })

            domComponents.addType('section11', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="article04 soundm5 cid-uo4yGigVxa" id="article04-i">
    

    
    

    <div class="container-fluid">
        <div class="row">
            <div class="col-12 col-lg-6">
                <div class="content-wrapper">
                    <div class="content-wrap">
                        <h2 class="mbr-section-title mbr-fonts-style display-2">
                            <strong>AI-POWERED MUSIC DISCOVERY</strong>
                        </h2>
                        <p class="mbr-text mbr-fonts-style display-7">
                            The central feature of the music platform is an AI-powered music discovery engine that
                            provides users with personalized music recommendations.
                        </p>
                        
                    </div>
                    <div class="number-wrapper_1">
                        <p class="mbr-number_1 mbr-fonts-style display-5">
                            <strong>01</strong>
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-6">
                <div class="image-wrapper">
                    <div class="image-wrap">
                        <img src="templates/0b322de8/img/8e63.jpeg" alt="Mobirise">
                    </div>
                    <div class="number-wrapper_2">
                        <p class="mbr-number_2 mbr-fonts-style display-5">
                            <strong>01</strong>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>`
                    }
                }
            })

            blockManager.add('section11', {
                label: 'Section 11',
                category: 'Sections',
                content: {
                    type: 'section11',
                },
                media: `<img src="templates/0b322de8/preview/5fe7.png" />`,
            })

            domComponents.addType('section12', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="article05 soundm5 cid-uo4yGszy4h" id="article05-j">
    

    
    

    <div class="container-fluid">
        <div class="row items-wrap">
            <div class="col-12 col-lg-4">
                <div class="image-wrapper">
                    <img src="templates/0b322de8/img/1e54.jpeg" alt="Mobirise">
                </div>
            </div>
            <div class="col-12 col-lg-7">
                <div class="content-wrapper">
                    <div class="title-wrapper">
                        <div class="title-wrap">
                            <div class="logo-wrap">
                                <img src="templates/0b322de8/img/d577.png" alt="Mobirise">
                            </div>
                            <h2 class="mbr-section-title mbr-fonts-style display-2">
                                <strong>CREATIVE DIRECTION</strong>
                            </h2>
                        </div>
                    </div>
                    <div class="text-wrapper">
                        <p class="mbr-text mbr-fonts-style display-7">
                            A producer helps the artist refine their vision, offering suggestions on song structure, lyrics,
                            and melodies. They bring a fresh perspective to the music, providing input on how to enhance the
                            emotional.
                        </p>
                    </div>
                    <div class="desc-wrapper">
                        <p class="mbr-desc mbr-fonts-style display-4">
                            Producers often act as collaborators, co-writers, or arrangers, depending on the needs of the
                            project. Beyond the artistic side, a music producer must also have a deep understanding.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>`
                    }
                }
            })

            blockManager.add('section12', {
                label: 'Section 12',
                category: 'Sections',
                content: {
                    type: 'section12',
                },
                media: `<img src="templates/0b322de8/preview/dc13.png" />`,
            })

            domComponents.addType('section13', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="image01 soundm5 cid-uo4yGTS0N5 mbr-fullscreen mbr-parallax-background" id="image01-k">
    

    
    

    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="image-wrap"></div>
            </div>
        </div>
    </div>
</section>`
                    }
                }
            })

            blockManager.add('section13', {
                label: 'Section 13',
                category: 'Sections',
                content: {
                    type: 'section13',
                },
                media: `<img src="templates/0b322de8/preview/2fd7.png" />`,
            })

            domComponents.addType('section14', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="video01 soundm5 cid-uo4yH2iofH" id="video01-l">
    

    
    

    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="content-wrapper">
                    <h2 class="mbr-section-title mbr-fonts-style display-2">
                        <strong>MUSIC PRODUCER'S STUDIO</strong>
                    </h2>
                    <div class="video-wrap">
                        <div class="box">
                            <div class="mbr-media show-modal align-center" data-modal=".modalWindow">
                                <a href="#"><img src="templates/0b322de8/img/a70a.jpeg" alt="Mobirise"></a>
                                <div class="icon-wrapper">
                                    <span class="mbr-iconfont mobi-mbri-play mobi-mbri"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div>
        <div class="modalWindow" style="display: none">
            <div class="modalWindow-container">
                <div class="modalWindow-video-container">
                    <div class="modalWindow-video">
                        <iframe width="100%" height="100%" frameborder="0" allowfullscreen="1" data-src="https://www.youtube.com/watch?v=-BSQlJxCDcI&amp;loop=1&amp;autoplay=1"></iframe>
                    </div>
                    <a class="close" role="button" data-dismiss="modal" data-bs-dismiss="modal">
                        <span aria-hidden="true" class="mbr-iconfont mobi-mbri-close mobi-mbri closeModal"></span>
                        <span class="sr-only visually-hidden visually-hidden">Close</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>`
                    }
                }
            })

            blockManager.add('section14', {
                label: 'Section 14',
                category: 'Sections',
                content: {
                    type: 'section14',
                },
                media: `<img src="templates/0b322de8/preview/4a71.png" />`,
            })

            domComponents.addType('section15', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="contacts01 soundm5 cid-uo4yHnxRwc mbr-fullscreen" id="contacts01-m">
    

    
    

    <div class="container-fluid">
        <div class="row">
            <div class="col-12 col-lg-7">
                <div class="content-wrapper">
                    <h2 class="mbr-section-title mbr-fonts-style display-2">
                        <strong>THE MUSIC PRODUCER’S STUDIO</strong>
                    </h2>
                    <p class="mbr-text mbr-fonts-style display-7">
                        A music producer’s studio is where creativity meets technology, serving as the heart of music
                        production. It's a space meticulously designed to capture the perfect sound while providing an
                        inspiring environment for artists to unleash their creativity. <br><br>
                        The setup of the studio is crucial, with every detail—from the acoustic treatment to the
                        equipment—carefully chosen to ensure high-quality production. <br><br>
                        The control room is the nerve center of the studio, where the producer oversees the recording
                        and mixing process.
                    </p>
                </div>
            </div>
            <div class="col-12 col-lg-5">
                <div class="address-wrapper">
                    <p class="mbr-address mbr-fonts-style display-5">
                        5 Avenue Anatole France, 75007 Paris France
                    </p>
                </div>
                <div class="google-map"><iframe frameborder="0" style="border:0" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6045.3003145248895!2d-73.9884657!3d40.7477229!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9ac1f1b85%3A0x7e33d1c0e7af3be4!2zMzUwIDV0aCBBdmUsIE5ldyBZb3JrLCBOWSAxMDExOCwg0KHQqNCQ!5e0!3m2!1sru!2sru!4v1689597362021!5m2!1sen!2sen" allowfullscreen=""></iframe></div>
            </div>
            <div class="col-12">
                <div class="mbr-section-btn">
                    <a class="btn btn-primary-outline display-7" href="https://mobiri.se">
                        <span class="mobi-mbri mobi-mbri-right mbr-iconfont mbr-iconfont-btn"></span>
                        Contact now
                    </a>
                    <a class="btn btn-primary display-7" href="https://mobiri.se">
                        <span class="mobi-mbri mobi-mbri-letter mbr-iconfont mbr-iconfont-btn"></span>
                        mobirise@sitebuilder.com
                    </a>
                    <a class="btn btn-primary display-7" href="https://mobiri.se">
                        <span class="mobi-mbri mobi-mbri-phone mbr-iconfont mbr-iconfont-btn"></span>
                        98 (765) 432 11 09
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>`
                    }
                }
            })

            blockManager.add('section15', {
                label: 'Section 15',
                category: 'Sections',
                content: {
                    type: 'section15',
                },
                media: `<img src="templates/0b322de8/preview/25b6.png" />`,
            })

            domComponents.addType('section16', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="form01 soundm5 cid-uo4yHFLnb5 mbr-fullscreen" id="form01-n">
    

    
    

    <div class="container-fluid">
        <div class="row">
            <div class="col-12 col-lg-6">
                <div class="content-wrapper">
                    <h2 class="mbr-section-title mbr-fonts-style display-2">
                        <strong>JOIN OUR TEAM</strong>
                    </h2>
                    <p class="mbr-text mbr-fonts-style display-7">
                        A music producer's team is a tightly-knit group of creative and technical professionals working
                        together to bring a musical vision to life. At the core is the producer, who guides the overall
                        sound and direction of a project, blending artistry with technical know-how. <br><br>
                        Supporting the producer is a sound engineer, responsible for recording, mixing, and mastering
                        tracks to perfection.
                    </p>
                </div>
            </div>
            <div class="col-12 col-lg-6">
                <div class="content-wrap">
                    <div class="mbr-form form-wrapper" data-form-type="formoid">
                        <form action="https://mobirise.eu/" method="POST" class="mbr-form form-with-styler" data-form-title="Form Name"><input type="hidden" name="email" data-form-email="true" value="rY3wnSB+jR49ljaNLoGWY/3/Q3iazpjDlKnKw363At4c8vAKuKo0tEeWciiOBb/a5Z+eyzRFMBF9IYKV53sA7oQ3jN5jP0gP8BqdifH1RFdrTSic0ooMxY2FMH3D+6Uw.3Pj67MXNS9EnkLKF42BRg5smQieU5NIBEAUay++s+ANvaEl4pdHRFgPtJktzh0feS0l3iHr9pZ2fSGJn6dEbh5h1U+MzdS0sRLkNi/VeeK2Lq0AZAZPI/53e+H+/UTmf">
                            <div class="row">
                                <div hidden="hidden" data-form-alert="" class="alert alert-success col-12">Thanks for
                                    filling out the form!</div>
                                <div hidden="hidden" data-form-alert-danger="" class="alert alert-danger col-12">
                                    Oops...! some problem!
                                </div>
                            </div>
                            <div class="dragArea row">
                                <div class="col-lg-12 col-md-12 col-sm-12 form-group mb-3" data-for="text">
                                    <input type="text" name="text" placeholder="Your phone" data-form-field="text" class="form-control display-4" value="" id="text-form01-n">
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12 form-group mb-3 mb-3" data-for="number">
                                    <input type="text" name="text" placeholder="Your phone" data-form-field="text" class="form-control display-4" value="" id="text-form01-n">
                                </div>
                                <div data-for="email" class="col-lg-12 col-md-12 col-sm-12 form-group mb-3 ">
                                    <input type="email" name="email" placeholder="Your email" data-form-field="email" class="form-control display-4" value="" id="email-form01-n">
                                </div>
                                <div data-for="textarea" class="col-lg-12 col-md-12 col-sm-12 form-group mb-3">
                                    <textarea name="textarea" placeholder="Message" data-form-field="textarea" class="form-control display-4" id="textarea-form01-n"></textarea>
                                </div>
                                <div class="col mbr-section-btn">
                                    <button type="submit" class="btn btn-primary display-7">
                                        Leave request
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>`
                    }
                }
            })

            blockManager.add('section16', {
                label: 'Section 16',
                category: 'Sections',
                content: {
                    type: 'section16',
                },
                media: `<img src="templates/0b322de8/preview/5e74.png" />`,
            })

            domComponents.addType('section17', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="list01 soundm5 cid-uo4yHXKjX7 mbr-fullscreen" id="list01-o">
    

    
    

    <div class="container-fluid">
        <div class="row">
            <div class="col-12 col-lg-6">
                <div class="content-wrapper">
                    <div class="content-wrap">
                        <h2 class="mbr-section-title mbr-fonts-style display-2">
                            <strong>MUSIC PLATFORM FEATURES:</strong>
                        </h2>
                        <ul class="list mbr-fonts-style display-7">
                            <li class="item-wrap">Mood and Activity Playlists</li>
                            <li class="item-wrap">Concert and Event Alerts</li>
                            <li class="item-wrap">High-Resolution Audio Streaming</li>
                            <li class="item-wrap">Offline Listening</li>
                            <li class="item-wrap">Lyrics Integration</li>
                        </ul>
                        <div class="mbr-section-btn">
                            <a class="btn btn-primary-outline display-4" href="https://mobiri.se">
                                <span class="mobi-mbri mobi-mbri-right mbr-iconfont mbr-iconfont-btn"></span>
                                Listen now
                            </a>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div class="col-12 col-lg-6">
                <div class="image-wrapper">
                    <div class="image-wrap">
                        <img src="templates/0b322de8/img/6063.jpeg" alt="Mobirise">
                    </div>
                    <div class="number-wrapper_2">
                        <p class="mbr-number_2 mbr-fonts-style display-5">
                            <strong>02</strong>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>`
                    }
                }
            })

            blockManager.add('section17', {
                label: 'Section 17',
                category: 'Sections',
                content: {
                    type: 'section17',
                },
                media: `<img src="templates/0b322de8/preview/4fd4.png" />`,
            })

            domComponents.addType('section18', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="list02 soundm5 cid-uo4yI5Y5Dt" id="list02-p">
    

    
    

    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div id="bootstrap-accordion_24" class="panel-group accordionStyles accordion" role="tablist" aria-multiselectable="true">
                    <div class="card">
                        <div class="card-header" role="tab" id="headingOne">
                            <a role="button" class="panel-title collapsed" data-toggle="collapse" data-bs-toggle="collapse" data-core="" href="#collapse1_24" aria-expanded="false" aria-controls="collapse1">
                                <h4 class="panel-title-edit mbr-fonts-style display-5">
                                    <strong>WHAT DOES A MUSIC PRODUCER DO?</strong>
                                </h4>
                                <div class="desc-wrapper">
                                    <p class="panel-desc mbr-fonts-style display-7">
                                        A music producer oversees the creative and technical aspects of recording a song
                                        or album.
                                    </p>
                                </div>
                                <div class="icon-wrapper">
                                    <div class="icon-wrap">
                                        <span class="sign mobi-mbri mobi-mbri-plus mbr-iconfont"></span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div id="collapse1_24" class="panel-collapse noScroll collapse" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion" data-bs-parent="#bootstrap-accordion_24">
                            <div class="panel-body">
                                <p class="panel-text mbr-fonts-style display-7">
                                    I guide the artist’s vision, shape the sound, and make decisions on arrangements,
                                    instrumentation, and vocal performance. My role is to ensure that everything, from
                                    the recording process to the final mix, aligns with the intended artistic direction.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" role="tab" id="headingTwo">
                            <a role="button" class="panel-title collapsed" data-toggle="collapse" data-bs-toggle="collapse" data-core="" href="#collapse2_24" aria-expanded="false" aria-controls="collapse2">
                                <h4 class="panel-title-edit mbr-fonts-style display-5">
                                    <strong>HOW INVOLVED ARE YOU IN THE PROCESS?</strong>
                                </h4>
                                <div class="desc-wrapper">
                                    <p class="panel-desc mbr-fonts-style display-7">
                                        It depends on the project! Some artists come with fully written songs.
                                    </p>
                                </div>
                                <div class="icon-wrapper">
                                    <div class="icon-wrap">
                                        <span class="sign mobi-mbri mobi-mbri-plus mbr-iconfont"></span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div id="collapse2_24" class="panel-collapse noScroll collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion" data-bs-parent="#bootstrap-accordion_24">
                            <div class="panel-body">
                                <p class="panel-text mbr-fonts-style display-7">
                                    It depends on the project! Some artists come with fully written songs, while others
                                    prefer more collaborative input. I can help with structuring a track, suggesting
                                    melodies, or even co-writing lyrics if needed. Ultimately, my goal is to elevate the
                                    song while respecting the artist’s vision.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" role="tab" id="headingThree">
                            <a role="button" class="panel-title collapsed" data-toggle="collapse" data-bs-toggle="collapse" data-core="" href="#collapse3_24" aria-expanded="false" aria-controls="collapse3">
                                <h4 class="panel-title-edit mbr-fonts-style display-5">
                                    <strong>WHAT GENRES DO YOU SPECIALIZE IN?</strong>
                                </h4>
                                <div class="desc-wrapper">
                                    <p class="panel-desc mbr-fonts-style display-7">
                                        I work across various genres, including pop, hip-hop, electronic, rock, and R&amp;B.
                                    </p>
                                </div>
                                <div class="icon-wrapper">
                                    <div class="icon-wrap">
                                        <span class="sign mobi-mbri mobi-mbri-plus mbr-iconfont"></span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div id="collapse3_24" class="panel-collapse noScroll collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion" data-bs-parent="#bootstrap-accordion_24">
                            <div class="panel-body">
                                <p class="panel-text mbr-fonts-style display-7">
                                    My approach is adaptable, so whether you’re aiming for radio-ready hits or something
                                    more experimental, I can help shape your sound to fit the style you're going for.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" role="tab" id="headingFour">
                            <a role="button" class="panel-title collapsed" data-toggle="collapse" data-bs-toggle="collapse" data-core="" href="#collapse4_24" aria-expanded="false" aria-controls="collapse4">
                                <h4 class="panel-title-edit mbr-fonts-style display-5">
                                    <strong>CAN YOU PRODUCE MUSIC REMOTELY?</strong>
                                </h4>
                                <div class="desc-wrapper">
                                    <p class="panel-desc mbr-fonts-style display-7">
                                        Yes, I offer remote production services. Bring any demos, rough ideas, or
                                        reference tracks that inspire you.
                                    </p>
                                </div>
                                <div class="icon-wrapper">
                                    <div class="icon-wrap">
                                        <span class="sign mobi-mbri mobi-mbri-plus mbr-iconfont"></span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div id="collapse4_24" class="panel-collapse noScroll collapse" role="tabpanel" aria-labelledby="headingFour" data-parent="#accordion" data-bs-parent="#bootstrap-accordion_24">
                            <div class="panel-body">
                                <p class="panel-text mbr-fonts-style display-7">
                                    The more clear you are about your vision, the better. Be open to feedback and ready
                                    to experiment. If you’re a vocalist, it’s a good idea to come prepared vocally and
                                    stay well-rested to get the best out of your performance.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>`
                    }
                }
            })

            blockManager.add('section18', {
                label: 'Section 18',
                category: 'Sections',
                content: {
                    type: 'section18',
                },
                media: `<img src="templates/0b322de8/preview/0978.png" />`,
            })

            domComponents.addType('section19', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="tabs tabs01 soundm5 cid-uo4yIeCxNf" id="tabs01-q">
    

    
    

    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="content-wrapper">
                    <div class="image-wrapper">
                        <img src="templates/0b322de8/img/3838.jpeg" alt="Mobirise">
                    </div>
                    <div class="title-wrapper">
                        <div class="title-wrap">
                            <div class="logo-wrap">
                                <img src="templates/0b322de8/img/d577.png" alt="Mobirise">
                            </div>
                            <h2 class="mbr-section-title mbr-fonts-style display-2">
                                <strong>WHAT WE DO?</strong>
                            </h2>
                        </div>
                    </div>
                    <div class="tabs-wrapper">
                        <ul class="nav nav-tabs" role="tablist">
                            <li class="nav-item first mbr-fonts-style">
                                <a class="nav-link show active mbr-fonts-style display-4" role="tab" data-toggle="tab" data-bs-toggle="tab" href="#tab1" aria-selected="true">
                                    case 1
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link show active mbr-fonts-style display-4" role="tab" data-toggle="tab" data-bs-toggle="tab" href="#tab2" aria-selected="true">
                                    case 2
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link show active mbr-fonts-style display-4" role="tab" data-toggle="tab" data-bs-toggle="tab" href="#tab3" aria-selected="true">
                                    case 3
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="tab-content">
                        <div id="tab1" class="tab-pane in active" role="tabpanel">
                            <div class="item-content">
                                <div class="image-wrap">
                                    <img src="templates/0b322de8/img/5ce3.jpeg" alt="Mobirise">
                                </div>
                                <div class="text-wrapper">
                                    <h4 class="item-title mbr-fonts-style display-5">
                                        <strong>REINVENTING AN ARTIST’S SOUND</strong>
                                    </h4>
                                    <p class="item-text mbr-fonts-style display-7">
                                        An established pop artist wants to evolve their sound and experiment with new
                                        genres. They hire a music producer known for their innovative style in
                                        electronic music.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div id="tab2" class="tab-pane" role="tabpanel">
                            <div class="item-content">
                                <div class="image-wrap">
                                    <img src="templates/0b322de8/img/9671.jpeg" alt="Mobirise">
                                </div>
                                <div class="text-wrapper">
                                    <h4 class="item-title mbr-fonts-style display-5">
                                        <strong>DEVELOPING A DEBUT ALBUM</strong>
                                    </h4>
                                    <p class="item-text mbr-fonts-style display-7">
                                        A young indie artist has a collection of raw demos but lacks the knowledge and
                                        experience to turn them into a cohesive album. They partner with a seasoned
                                        producer who has a track record of working with emerging talent.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div id="tab3" class="tab-pane" role="tabpanel">
                            <div class="item-content">
                                <div class="image-wrap">
                                    <img src="templates/0b322de8/img/3c78.jpeg" alt="Mobirise">
                                </div>
                                <div class="text-wrapper">
                                    <h4 class="item-title mbr-fonts-style display-5">
                                        <strong>PRODUCING A GENRE HIT</strong>
                                    </h4>
                                    <p class="item-text mbr-fonts-style display-7">
                                        A country singer wants to break into the mainstream pop market by blending their
                                        country roots with modern pop influences. They team up with a producer who has
                                        experience in both genres.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>`
                    }
                }
            })

            blockManager.add('section19', {
                label: 'Section 19',
                category: 'Sections',
                content: {
                    type: 'section19',
                },
                media: `<img src="templates/0b322de8/preview/fb81.png" />`,
            })

            domComponents.addType('section20', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="tabs tabs02 soundm5 cid-uo4yIm8St7" id="tabs02-r">
    

    
    

    <div class="container-fluid">
        <div class="row items-wrap flex-row-reverse">
            <div class="col-12 col-lg-4 card">
                <div class="tabs-wrapper">
                    <ul class="nav nav-tabs" role="tablist">
                        <li class="nav-item first mbr-fonts-style">
                            <a class="nav-link show active mbr-fonts-style display-7" role="tab" data-toggle="tab" data-bs-toggle="tab" href="#tab1" aria-selected="true">
                                <strong>01</strong>&nbsp; syncing
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link show active mbr-fonts-style display-7" role="tab" data-toggle="tab" data-bs-toggle="tab" href="#tab2" aria-selected="true">
                                <strong>02</strong>&nbsp; content
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link show active mbr-fonts-style display-7" role="tab" data-toggle="tab" data-bs-toggle="tab" href="#tab3" aria-selected="true">
                                <strong>03</strong>&nbsp; playlists
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link show active mbr-fonts-style display-7" role="tab" data-toggle="tab" data-bs-toggle="tab" href="#tab4" aria-selected="true">
                                <strong>04</strong>&nbsp; support
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link show active mbr-fonts-style display-7" role="tab" data-toggle="tab" data-bs-toggle="tab" href="#tab5" aria-selected="true">
                                <strong>05</strong>&nbsp; custom
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="mbr-section-btn">
                    <a class="btn btn-primary-outline display-4" href="https://mobiri.se">
                        <span class="mobi-mbri mobi-mbri-right mbr-iconfont mbr-iconfont-btn"></span>
                        Listen now
                    </a>
                </div>
            </div>
            <div class="col-12 col-lg-5">
                <div class="tab-content">
                    <div id="tab1" class="tab-pane in active" role="tabpanel">
                        <div class="item-content">
                            <div class="image-wrapper">
                                <div class="image-wrap">
                                    <img src="templates/0b322de8/img/55d6.jpeg" alt="Mobirise">
                                </div>
                                <div class="number-wrapper">
                                    <p class="item-number mbr-fonts-style display-5">
                                        <strong>01</strong>
                                    </p>
                                </div>
                            </div>
                            <div class="text-wrapper">
                                <h4 class="item-title mbr-fonts-style display-5">
                                    <strong>CROSS-DEVICE <br> SYNCING</strong>
                                </h4>
                                <p class="item-text mbr-fonts-style display-7">
                                    Users can start a song or playlist on one device (like their phone) and continue
                                    listening on another (like a smart speaker or desktop). This seamless syncing across
                                    devices enhances the experience, allowing continuous listening without interruption.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div id="tab2" class="tab-pane" role="tabpanel">
                        <div class="item-content">
                            <div class="image-wrapper">
                                <div class="image-wrap">
                                    <img src="templates/0b322de8/img/0d91.jpeg" alt="Mobirise">
                                </div>
                                <div class="number-wrapper">
                                    <p class="item-number mbr-fonts-style display-5">
                                        <strong>02</strong>
                                    </p>
                                </div>
                            </div>
                            <div class="text-wrapper">
                                <h4 class="item-title mbr-fonts-style display-5">
                                    <strong>DIVERSE <br> CONTENT</strong>
                                </h4>
                                <p class="item-text mbr-fonts-style display-7">
                                    Many music platforms include podcasts, interviews, DJ sets, and live performances.
                                    This diversified content keeps users engaged by offering more than just music,
                                    expanding the platform's appeal and keeping users entertained in various formats.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div id="tab3" class="tab-pane" role="tabpanel">
                        <div class="item-content">
                            <div class="image-wrapper">
                                <div class="image-wrap">
                                    <img src="templates/0b322de8/img/4ead.jpeg" alt="Mobirise">
                                </div>
                                <div class="number-wrapper">
                                    <p class="item-number mbr-fonts-style display-5">
                                        <strong>03</strong>
                                    </p>
                                </div>
                            </div>
                            <div class="text-wrapper">
                                <h4 class="item-title mbr-fonts-style display-5">
                                    <strong>CURATED <br> PLAYLISTS</strong>
                                </h4>
                                <p class="item-text mbr-fonts-style display-7">
                                    Platforms offer expertly curated playlists for various moods, activities, and
                                    events, such as workouts, study sessions, or road trips. This saves users time in
                                    searching for the right music and provides a perfect soundtrack for every moment.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div id="tab4" class="tab-pane" role="tabpanel">
                        <div class="item-content">
                            <div class="image-wrapper">
                                <div class="image-wrap">
                                    <img src="templates/0b322de8/img/aede.jpeg" alt="Mobirise">
                                </div>
                                <div class="number-wrapper">
                                    <p class="item-number mbr-fonts-style display-5">
                                        <strong>04</strong>
                                    </p>
                                </div>
                            </div>
                            <div class="text-wrapper">
                                <h4 class="item-title mbr-fonts-style display-5">
                                    <strong>DIRECT ARTIST <br> SUPPORT</strong>
                                </h4>
                                <p class="item-text mbr-fonts-style display-7">
                                    Some platforms allow fans to directly support their favorite artists through
                                    donations, special releases, or merchandise sales, fostering a closer connection
                                    between listeners and artists. This also benefits emerging artists looking to build
                                    a loyal fanbase.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div id="tab5" class="tab-pane" role="tabpanel">
                        <div class="item-content">
                            <div class="image-wrapper">
                                <div class="image-wrap">
                                    <img src="templates/0b322de8/img/8e63.jpeg" alt="Mobirise">
                                </div>
                                <div class="number-wrapper">
                                    <p class="item-number mbr-fonts-style display-5">
                                        <strong>05</strong>
                                    </p>
                                </div>
                            </div>
                            <div class="text-wrapper">
                                <h4 class="item-title mbr-fonts-style display-5">
                                    <strong>CUSTOMIZATION</strong>
                                </h4>
                                <p class="item-text mbr-fonts-style display-7">
                                    Users can easily create and customize their own playlists, giving them control over
                                    their music library. This allows them to organize music by genre, mood, or personal
                                    preference, enhancing their overall experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>`
                    }
                }
            })

            blockManager.add('section20', {
                label: 'Section 20',
                category: 'Sections',
                content: {
                    type: 'section20',
                },
                media: `<img src="templates/0b322de8/preview/02e9.png" />`,
            })

            domComponents.addType('section21', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="tabs tabs03 soundm5 cid-uo4yIEfful" id="tabs03-s">
    

    
    

    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="content-wrapper">
                    <div class="title-wrapper">
                        <div class="title-wrap">
                            <div class="logo-wrap">
                                <img src="templates/0b322de8/img/d577.png" alt="Mobirise">
                            </div>
                            <h2 class="mbr-section-title mbr-fonts-style display-2">
                                <strong>STUDIO EQUIPMENT</strong>
                            </h2>
                        </div>
                    </div>
                    <div class="tabs-wrapper">
                        <ul class="nav nav-tabs" role="tablist">
                            <li class="nav-item first mbr-fonts-style">
                                <a class="nav-link show active mbr-fonts-style display-7" role="tab" data-toggle="tab" data-bs-toggle="tab" href="#tab1" aria-selected="true">
                                    digital audio workstation
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link show active mbr-fonts-style display-7" role="tab" data-toggle="tab" data-bs-toggle="tab" href="#tab2" aria-selected="true">
                                    audio interface
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link show active mbr-fonts-style display-7" role="tab" data-toggle="tab" data-bs-toggle="tab" href="#tab3" aria-selected="true">
                                    studio monitors
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link show active mbr-fonts-style display-7" role="tab" data-toggle="tab" data-bs-toggle="tab" href="#tab4" aria-selected="true">
                                    midi controller
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link show active mbr-fonts-style display-7" role="tab" data-toggle="tab" data-bs-toggle="tab" href="#tab5" aria-selected="true">
                                    microphones
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="tab-content">
                        <div id="tab1" class="tab-pane in active" role="tabpanel">
                            <div class="item-content">
                                <div class="list-wrapper">
                                    <ul class="list mbr-fonts-style display-7">
                                        <li class="item-wrap">The DAW is the heart of the music production process</li>
                                        <li class="item-wrap">The software used to record, edit, and mix audio tracks</li>
                                        <li class="item-wrap">Popular DAWs include Ableton Live, Logic Pro, and FL Studio</li>
                                        <li class="item-wrap">Layer vocals, add effects, and create the overall structure of the song.</li>
                                    </ul>
                                </div>
                                <div class="image-wrap">
                                    <img src="templates/0b322de8/img/1c23.jpeg" alt="Mobirise">
                                </div>
                            </div>
                        </div>
                        <div id="tab2" class="tab-pane" role="tabpanel">
                            <div class="item-content">
                                <div class="list-wrapper">
                                    <ul class="list mbr-fonts-style display-7">
                                        <li class="item-wrap">The audio interface connects microphones, instruments, and other audio gear</li>
                                        <li class="item-wrap">It converts analog signals into digital ones and vice versa</li>
                                        <li class="item-wrap">Ensuring high-quality sound recordings and playback</li>
                                        <li class="item-wrap">Some popular models include the Focusrite Scarlett</li>
                                        <li class="item-wrap">Universal Audio Apollo</li>
                                    </ul>
                                </div>
                                <div class="image-wrap">
                                    <img src="templates/0b322de8/img/675f.jpeg" alt="Mobirise">
                                </div>
                            </div>
                        </div>
                        <div id="tab3" class="tab-pane" role="tabpanel">
                            <div class="item-content">
                                <div class="list-wrapper">
                                    <ul class="list mbr-fonts-style display-7">
                                        <li class="item-wrap">Studio monitors are specialized speakers designed for accurate sound reproduction</li>
                                        <li class="item-wrap">Unlike regular speakers, they offer a flat frequency response</li>
                                        <li class="item-wrap">Which helps producers hear the true sound of the mix without colorization</li>
                                        <li class="item-wrap">Brands like Yamaha, KRK, and Genelec</li>
                                        <li class="item-wrap">Reliable studio monitors</li>
                                    </ul>
                                </div>
                                <div class="image-wrap">
                                    <img src="templates/0b322de8/img/b525.jpeg" alt="Mobirise">
                                </div>
                            </div>
                        </div>
                        <div id="tab4" class="tab-pane" role="tabpanel">
                            <div class="item-content">
                                <div class="list-wrapper">
                                    <ul class="list mbr-fonts-style display-7">
                                        <li class="item-wrap">A MIDI controller, such as a keyboard or pad controller</li>
                                        <li class="item-wrap">Allows producers to trigger virtual instruments and samples</li>
                                        <li class="item-wrap">It enables hands-on control over melodies</li>
                                        <li class="item-wrap">Drum patterns, and automation</li>
                                        <li class="item-wrap">The Akai MPK and Novation Launchkey are popular options</li>
                                    </ul>
                                </div>
                                <div class="image-wrap">
                                    <img src="templates/0b322de8/img/28b0.jpeg" alt="Mobirise">
                                </div>
                            </div>
                        </div>
                        <div id="tab5" class="tab-pane" role="tabpanel">
                            <div class="item-content">
                                <div class="list-wrapper">
                                    <ul class="list mbr-fonts-style display-7">
                                        <li class="item-wrap">High-quality microphones are essential for recording vocals and instruments</li>
                                        <li class="item-wrap">Condenser microphones, like the Neumann U87</li>
                                        <li class="item-wrap">Audio-Technica AT2020, are favored for their clarity and detail</li>
                                        <li class="item-wrap">While dynamic mics, like the Shure SM7B</li>
                                        <li class="item-wrap">Often used for capturing a more direct, robust sound.</li>
                                    </ul>
                                </div>
                                <div class="image-wrap">
                                    <img src="templates/0b322de8/img/2eba.jpeg" alt="Mobirise">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>`
                    }
                }
            })

            blockManager.add('section21', {
                label: 'Section 21',
                category: 'Sections',
                content: {
                    type: 'section21',
                },
                media: `<img src="templates/0b322de8/preview/6d67.png" />`,
            })

            domComponents.addType('section22', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="gallery01 soundm5 cid-uo4yIVj0gl" id="gallery01-t">
    

    
    

    <div class="container-fluid">
        <div class="row">
            <div class="col-12 col-lg-6 item features-image">
                <div class="item-wrapper">
                    <div class="item-img card_1">
                        <img src="templates/0b322de8/img/aede.jpeg" alt="Mobirise Website Builder">
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-6 item features-image">
                <div class="item-wrapper">
                    <div class="item-img card_2">
                        <img src="templates/0b322de8/img/7810.jpeg" alt="Mobirise Website Builder">
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>`
                    }
                }
            })

            blockManager.add('section22', {
                label: 'Section 22',
                category: 'Sections',
                content: {
                    type: 'section22',
                },
                media: `<img src="templates/0b322de8/preview/1062.png" />`,
            })

            domComponents.addType('section23', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="slider01 mbr-embla soundm5 cid-uo4yJ3qVT0 mbr-fullscreen" id="slider01-u">
    
    

    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="embla" data-skip-snaps="true" data-align="center" data-contain-scroll="trimSnaps" data-auto-play-interval="5" data-draggable="true">
                    <div class="embla__viewport">
                        <div class="embla__container">
                            <div class="embla__slide slider-image item" style="margin-left: 1rem; margin-right: 1rem;">
                                <div class="slide-content">
                                    <div class="item-wrapper">
                                        <div class="item-img">
                                            <img src="templates/0b322de8/img/120b.jpeg" alt="Mobirise Website Builder">
                                        </div>
                                    </div>
                                    <div class="item-content">
                                        <p class="item-number mbr-fonts-style display-2">
                                            <strong>1/3</strong>
                                        </p>
                                        <h4 class="item-title mbr-fonts-style display-5">
                                            <strong>EXPLORE THE INTERFACE</strong>
                                        </h4>
                                        <p class="item-text mbr-fonts-style display-7">
                                            Begin by signing up for the platform and familiarizing yourself with its
                                            interface. Take time to explore its main features, such as music discovery
                                            tools, playlist creation, artist profiles, and how users engage with music.
                                        </p>
                                        <div class="mbr-section-btn item-footer">
                                            <a href="" class="btn btn-primary-outline item-btn display-4">
                                                <span class="mobi-mbri mobi-mbri-right mbr-iconfont mbr-iconfont-btn"></span>
                                                Read more
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="embla__slide slider-image item" style="margin-left: 1rem; margin-right: 1rem;">
                                <div class="slide-content">
                                    <div class="item-wrapper">
                                        <div class="item-img">
                                            <img src="templates/0b322de8/img/3c78.jpeg" alt="Mobirise Website Builder">
                                        </div>
                                    </div>
                                    <div class="item-content">
                                        <p class="item-number mbr-fonts-style display-2">
                                            <strong>2/3</strong>
                                        </p>
                                        <h4 class="item-title mbr-fonts-style display-5">
                                            <strong>ENGAGE WITH THE COMMUNITY</strong>
                                        </h4>
                                        <p class="item-text mbr-fonts-style display-7">
                                            Many music platforms have active user communities, social features, or
                                            integration with social media. Engage by following artists, liking or
                                            commenting on tracks, joining playlists.
                                        </p>
                                        <div class="mbr-section-btn item-footer">
                                            <a href="" class="btn btn-primary-outline item-btn display-4">
                                                <span class="mobi-mbri mobi-mbri-right mbr-iconfont mbr-iconfont-btn"></span>
                                                Read more
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="embla__slide slider-image item" style="margin-left: 1rem; margin-right: 1rem;">
                                <div class="slide-content">
                                    <div class="item-wrapper">
                                        <div class="item-img">
                                            <img src="templates/0b322de8/img/28b0.jpeg" alt="Mobirise Website Builder">
                                        </div>
                                    </div>
                                    <div class="item-content">
                                        <p class="item-number mbr-fonts-style display-2">
                                            <strong>3/3</strong>
                                        </p>
                                        <h4 class="item-title mbr-fonts-style display-5">
                                            <strong>ANALYZE THE PLATFORM’S</strong>
                                        </h4>
                                        <p class="item-text mbr-fonts-style display-7">
                                            To truly understand the platform, research its business model. Is it
                                            subscription-based, ad-supported, or pay-per-stream? Look into its royalty
                                            structure if you're an artist.
                                        </p>
                                        <div class="mbr-section-btn item-footer">
                                            <a href="" class="btn btn-primary-outline item-btn display-4">
                                                <span class="mobi-mbri mobi-mbri-right mbr-iconfont mbr-iconfont-btn"></span>
                                                Read more
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="embla__button embla__button--prev">
                        <span class="mobi-mbri mobi-mbri-arrow-prev mbr-iconfont" aria-hidden="true"></span>
                        <span class="sr-only visually-hidden visually-hidden visually-hidden">Previous</span>
                    </button>
                    <button class="embla__button embla__button--next">
                        <span class="mobi-mbri mobi-mbri-arrow-next mbr-iconfont" aria-hidden="true"></span>
                        <span class="sr-only visually-hidden visually-hidden visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>`
                    }
                }
            })

            blockManager.add('section23', {
                label: 'Section 23',
                category: 'Sections',
                content: {
                    type: 'section23',
                },
                media: `<img src="templates/0b322de8/preview/ff1b.png" />`,
            })

            domComponents.addType('section24', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="pricing01 soundm5 cid-uo4yJnjsPe" id="pricing01-v">
    

    
    

    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="items-wrap">
                    <div class=" item features-without-image">
                        <div class="item-wrapper">
                            <div class="card-box">
                                <h4 class="item-title mbr-fonts-style display-2">
                                    <strong>BASIC</strong>
                                </h4>
                                <p class="item-text mbr-fonts-style display-7">
                                    Perfect for casual listeners, the Basic Plan offers an affordable way to enjoy
                                    music.
                                </p>
                            </div>
                            <div class="price-wrapper">
                                <p class="item-desc mbr-fonts-style display-4">
                                    monthly price
                                </p>
                                <p class="item-price mbr-fonts-style display-5">
                                    <strong>$4.99</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="item features-without-image">
                        <div class="item-wrapper">
                            <div class="card-box">
                                <h4 class="item-title mbr-fonts-style display-2">
                                    <strong>PREMIUM</strong>
                                </h4>
                                <p class="item-text mbr-fonts-style display-7">
                                    Upgrade to the Premium Plan for a completely ad-free experience and higher audio
                                    quality.
                                </p>
                            </div>
                            <div class="price-wrapper">
                                <p class="item-desc mbr-fonts-style display-4">
                                    monthly price
                                </p>
                                <p class="item-price mbr-fonts-style display-5">
                                    <strong>$9.99</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="item features-without-image">
                        <div class="item-wrapper">
                            <div class="card-box">
                                <h4 class="item-title mbr-fonts-style display-2">
                                    <strong>FAMILY</strong>
                                </h4>
                                <p class="item-text mbr-fonts-style display-7">
                                    Share the music with the Family Plan, which offers all the benefits of Premium for
                                    to six members.
                                </p>
                            </div>
                            <div class="price-wrapper">
                                <p class="item-desc mbr-fonts-style display-4">
                                    monthly price
                                </p>
                                <p class="item-price mbr-fonts-style display-5">
                                    <strong>$14.99</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>`
                    }
                }
            })

            blockManager.add('section24', {
                label: 'Section 24',
                category: 'Sections',
                content: {
                    type: 'section24',
                },
                media: `<img src="templates/0b322de8/preview/fad1.png" />`,
            })

            domComponents.addType('section25', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="footer01 soundm5 cid-uo4o1qSq9k" once="footers" id="footer01-8">
    

    
    

    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="content-wrapper">
                    
                    
                    <h2 class="mbr-copy mbr-fonts-style display-4">
                        © Copyright 2030 Mobirise - All Rights Reserved
                    </h2>
                </div>
            </div>
        </div>
    </div>
</section>`
                    }
                }
            })

            blockManager.add('section25', {
                label: 'Section 25',
                category: 'Sections',
                content: {
                    type: 'section25',
                },
                media: `<img src="templates/0b322de8/preview/0df8.png" />`,
            })
        }