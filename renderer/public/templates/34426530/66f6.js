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
                        components: `<section data-bs-version="5.1" class="menu menu01 ridem5 cid-u9JOOZ4yb5" once="menu" id="menu01-3h">

    

    <nav class="navbar navbar-dropdown navbar-expand-lg">
        <div class="menu_box container-fluid">
            <div class="navbar-brand d-flex">
                <span class="navbar-logo">
                    <a href="index.html">
                        <img src="templates/34426530/img/1184.png" alt="Mobirise">
                    </a>
                </span>
                <span class="navbar-caption-wrap">
                    <a class="navbar-caption display-7" href="index.html">RideM5
                    </a>
                </span>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-bs-toggle="collapse" data-target="#navbarSupportedContent" data-bs-target="#navbarSupportedContent" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <div class="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>
            </div>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav nav-dropdown" data-app-modern-menu="true"><li class="nav-item">
                        <a class="nav-link link text-primary display-4" href="index.html">
                            HOME
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link link text-primary display-4" href="#pricing01-3d">LIVE DEMO</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link link text-primary display-4" href="#article01-3g">
                            LIVE DEMO BLOCKS</a>
                    </li></ul>
                <div class="mbr-section-btn-main" role="tablist"><a class="btn btn-primary display-4" href="http://my.mobirise.com/buy.php?p=HOMEP_TOBAPA">BUY NOW
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
                media: `<img src="templates/34426530/preview/612d.png" />`,
            })

            domComponents.addType('section2', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="header01 ridem5 cid-u9JUcysjWZ mbr-fullscreen mbr-parallax-background" id="header01-3j">
    

    
    <div class="mbr-overlay" style="opacity: 0.6; background-color: rgb(255, 255, 255);"></div>

    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="content-wrapper">
                    <div class="title-wrapper">
						<h1 class="mbr-section-title mbr-fonts-style display-1">
							<strong>RideM5 Theme <br> Electric Bike Store </strong>
						</h1>
						<div class="mbr-section-btn">
							<a class="btn btn-primary-outline display-7" href="https://mobiri.se">
								<span class="mobi-mbri mobi-mbri-play mbr-iconfont mbr-iconfont-btn"></span>
								View All Models Now
							</a>
						</div>
					</div>
                    <div class="text-wrapper">
						<p class="mbr-text mbr-fonts-style display-7">
							Welcome to the Electric Bike Store, where every pedal takes you further, faster, and with a
							touch of eco-consciousness.
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

            blockManager.add('section2', {
                label: 'Section 2',
                category: 'Sections',
                content: {
                    type: 'section2',
                },
                media: `<img src="templates/34426530/preview/392c.png" />`,
            })

            domComponents.addType('section3', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="header02 ridem5 cid-u9JUcJ6VnF" id="header02-3k">
    

    
    

    <div class="container-fluid">
        <div class="row">
            <div class="col-12 col-lg-6 card">
                <div class="title-wrapper">
                    <h1 class="mbr-section-title mbr-fonts-style display-1">
                        <strong>Electric Scooter Rental</strong>
                    </h1>
                    <div class="mbr-section-btn">
                        <a class="btn btn-primary-outline display-7" href="https://mobiri.se">
                            <span class="mobi-mbri mobi-mbri-play mbr-iconfont mbr-iconfont-btn"></span>
                            Rent a Scooter Now
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-5 card">
                <div class="text-wrapper">
                    <p class="mbr-text mbr-fonts-style display-7">
                        In bustling cities around the globe, the hum of electric scooters has become a symphony of
                        modern mobility.
                    </p>
                </div>
            </div>
            <div class="col-12">
                <div class="image-wrapper">
                    <div class="card-wrapper">
                        <div class="card-wrap">
                            <div class="icon-wrapper">
                                <span class="mbr-iconfont mobi-mbri-quote-left mobi-mbri"></span>
                            </div>
                            <p class="card-text mbr-fonts-style display-7">
                                <strong>Electric scooter rental services have rapidly transformed urban transportation,
                                    offering
                                    a convenient, eco-friendly, and fun way to navigate city streets. As an avid user of
                                    electric scooter rental services, I've experienced firsthand the benefits and
                                    drawbacks
                                    of this innovative mode of transport.</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <img src="templates/34426530/img/c38c.jpeg" alt="Mobirise">
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
                media: `<img src="templates/34426530/preview/37b3.png" />`,
            })

            domComponents.addType('section4', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="features01 ridem5 cid-u9JUcTvemQ" id="features01-3l">
    

    
    

    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="content-wrapper">
                    <h2 class="mbr-section-title mbr-fonts-style display-2">
                        <strong>Advantages</strong>
                    </h2>
                    <p class="mbr-text mbr-fonts-style display-7">
                        Efficient mode of transportation
                    </p>
                </div>
            </div>
            <div class="item features-without-image col-12 col-lg-4 item-mb">
                <div class="item-wrapper">
                    <div class="card-box">
                        <div class="icon-wrapper">
                            <span class="mbr-iconfont mobi-mbri-cash mobi-mbri"></span>
                        </div>
                        <h4 class="item-title mbr-fonts-style display-5">
                            <strong>Cost-Effective</strong>
                        </h4>
                        <p class="item-text mbr-fonts-style display-4">
                            Electric scooters are highly cost-effective compared to cars or motorcycles.
                        </p>
                    </div>
                </div>
            </div>
            <div class="item features-without-image col-12 col-lg-4 item-mb">
                <div class="item-wrapper">
                    <div class="card-box">
                        <div class="icon-wrapper">
                            <span class="mbr-iconfont mobi-mbri-smile-face mobi-mbri"></span>
                        </div>
                        <h4 class="item-title mbr-fonts-style display-5">
                            <strong>Convenience</strong>
                        </h4>
                        <p class="item-text mbr-fonts-style display-4">
                            Electric scooters are lightweight and compact, making them perfect for navigating.
                        </p>
                    </div>
                </div>
            </div>
            <div class="item features-without-image col-12 col-lg-4 item-mb">
                <div class="item-wrapper">
                    <div class="card-box">
                        <div class="icon-wrapper">
                            <span class="mbr-iconfont mobi-mbri-setting mobi-mbri"></span>
                        </div>
                        <h4 class="item-title mbr-fonts-style display-5">
                            <strong>Easy to Use</strong>
                        </h4>
                        <p class="item-text mbr-fonts-style display-4">
                            Electric scooters are incredibly easy to operate, requiring minimal training.
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="border-wrapper"></div>
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
                media: `<img src="templates/34426530/preview/2232.png" />`,
            })

            domComponents.addType('section5', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="features02 ridem5 cid-u9JUd3l44R" id="features02-3m">
    

    
    

    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="content-wrapper">
                    <div class="row">
                        <div class="col-12 col-lg-6">
                            <div class="content-wrap">
                                <p class="mbr-desc mbr-fonts-style display-4">
                                    <strong>FEATURES</strong>
                                </p>
                                <h2 class="mbr-section-title mbr-fonts-style display-1">
                                    <strong>Introducing Our Electric Bike</strong>
                                </h2>
                                <p class="mbr-text mbr-fonts-style display-4">
                                    Experience the future of cycling with our Electric Bike features and elevate your ride to new
                                    heights of performance, convenience, and enjoyment.
                                </p>
                            </div>
                        </div>
                        <div class="col-12 col-lg-6">
                            <div class="image-wrapper">
                                <img src="templates/34426530/img/d862.jpeg" alt="Mobirise">
                            </div>
                        </div>
                        <div class="item features-without-image col-12 col-lg-4 item-mb">
                            <div class="item-wrapper">
                                <div class="card-box">
                                    <div class="icon-wrapper">
                                        <span class="mbr-iconfont mobi-mbri-speed mobi-mbri"></span>
                                    </div>
                                    <h4 class="item-title mbr-fonts-style display-5">
                                        <strong>Power</strong>
                                    </h4>
                                    <p class="item-desc mbr-fonts-style display-4">
                                        <strong>Powerful Electric Motor</strong>
                                    </p>
                                    <p class="item-text mbr-fonts-style display-4">
                                        Our bikes are equipped with high-performance electric motors, providing smooth and efficient
                                        assistance as you pedal.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="item features-without-image col-12 col-lg-4 item-mb">
                            <div class="item-wrapper">
                                <div class="card-box">
                                    <div class="icon-wrapper">
                                        <span class="mbr-iconfont mobi-mbri-plus mobi-mbri"></span>
                                    </div>
                                    <h4 class="item-title mbr-fonts-style display-5">
                                        <strong>Battery</strong>
                                    </h4>
                                    <p class="item-desc mbr-fonts-style display-4">
                                        <strong>Long-lasting Battery</strong>
                                    </p>
                                    <p class="item-text mbr-fonts-style display-4">
                                        Say goodbye to range anxiety with our long-lasting lithium-ion batteries. With impressive
                                        range capabilities, you can explore further.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="item features-without-image col-12 col-lg-4 item-mb">
                            <div class="item-wrapper">
                                <div class="card-box">
                                    <div class="icon-wrapper">
                                        <span class="mbr-iconfont mobi-mbri-info mobi-mbri"></span>
                                    </div>
                                    <h4 class="item-title mbr-fonts-style display-5">
                                        <strong>Assist</strong>
                                    </h4>
                                    <p class="item-desc mbr-fonts-style display-4">
                                        <strong>Intelligent Pedal Assist</strong>
                                    </p>
                                    <p class="item-text mbr-fonts-style display-4">
                                        Experience seamless integration between human power and electric assistance with our
                                        intelligent pedal assist system.
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

            blockManager.add('section5', {
                label: 'Section 5',
                category: 'Sections',
                content: {
                    type: 'section5',
                },
                media: `<img src="templates/34426530/preview/1701.png" />`,
            })

            domComponents.addType('section6', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="features03 ridem5 cid-u9JUdfIdK1" id="features03-3n">
    

    
    

    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-6 card">
                <div class="title-wrapper">
                    <h2 class="mbr-section-title mbr-fonts-style display-2">
                        <strong>Electric Scooter Events</strong>
                    </h2>
                </div>
            </div>
            <div class="col-12 col-lg-6 card">
                <div class="mbr-section-btn">
                    <a class="btn btn-primary display-4" href="https://mobiri.se">
                        ALL EVENTS
                    </a>
                </div>
            </div>
            <div class="item features-image col-12 item-mb">
                <a href="#">
                    <div class="item-wrapper">
                        <div class="desc-wrapper">
                            <p class="item-desc mbr-fonts-style display-4">
                                <strong>EVENT</strong>
                            </p>
                        </div>
                        <div class="item-img">
                            <img src="templates/34426530/img/feda.jpeg" alt="Mobirise">
                        </div>
                        <div class="item-content">
                            <p class="item-text mbr-fonts-style display-5">
                                <strong> Electric Scooter Expo and Innovation Showcase:
                                    This event serves as a platform for electric scooter manufacturers, innovators.
                                </strong>
                            </p>
                            <div class="date-wrapper">
                                <div class="date-wrap">
                                    <div class="icon-wrapper">
                                        <span class="mbr-iconfont mobi-mbri-calendar mobi-mbri"></span>
                                    </div>
                                    <p class="item-date mbr-fonts-style display-4">
                                        <strong>04. April</strong>&nbsp;&nbsp;|&nbsp;&nbsp;mobirise.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div class="item features-image col-12 item-mb">
                <a href="#">
                    <div class="item-wrapper">
                        <div class="desc-wrapper">
                            <p class="item-desc mbr-fonts-style display-4">
                                <strong>EVENT</strong>
                            </p>
                        </div>
                        <div class="item-img">
                            <img src="templates/34426530/img/1b94.jpeg" alt="Mobirise">
                        </div>
                        <div class="item-content">
                            <p class="item-text mbr-fonts-style display-5">
                                <strong> Electric Scooter Racing Championship:
                                    Imagine the thrill of Formula 1 racing, but on electric scooters! This event brings
                                    together professional riders.
                                </strong>
                            </p>
                            <div class="date-wrapper">
                                <div class="date-wrap">
                                    <div class="icon-wrapper">
                                        <span class="mbr-iconfont mobi-mbri-calendar mobi-mbri"></span>
                                    </div>
                                    <p class="item-date mbr-fonts-style display-4">
                                        <strong>15. April</strong>&nbsp;&nbsp;|&nbsp;&nbsp;mobirise.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div class="item features-image col-12 item-mb">
                <a href="#">
                    <div class="item-wrapper">
                        <div class="desc-wrapper">
                            <p class="item-desc mbr-fonts-style display-4">
                                <strong>EVENT</strong>
                            </p>
                        </div>
                        <div class="item-img">
                            <img src="templates/34426530/img/8ce5.jpeg" alt="Mobirise">
                        </div>
                        <div class="item-content">
                            <p class="item-text mbr-fonts-style display-5">
                                <strong> Electric Scooter Charity Rally:
                                    This event combines philanthropy with eco-friendly transportation by organizing a
                                    charity rally using electric scooters.
                                </strong>
                            </p>
                            <div class="date-wrapper">
                                <div class="date-wrap">
                                    <div class="icon-wrapper">
                                        <span class="mbr-iconfont mobi-mbri-calendar mobi-mbri"></span>
                                    </div>
                                    <p class="item-date mbr-fonts-style display-4">
                                        <strong>27. April</strong>&nbsp;&nbsp;|&nbsp;&nbsp;mobirise.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
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
                media: `<img src="templates/34426530/preview/7784.png" />`,
            })

            domComponents.addType('section7', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="article01 ridem5 cid-u9JUdynLWc" id="article01-3o">
    

    
    

    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-4">
                <div class="content-wrapper">
                    <p class="mbr-desc mbr-fonts-style display-4">
                        <strong>TECHNOLOGY</strong>
                    </p>
                    <h2 class="mbr-section-title mbr-fonts-style display-2">
                        <strong>World of Innovation</strong>
                    </h2>
                    <p class="mbr-text mbr-fonts-style display-4">
                        Rows of sleek electric bikes line the showroom floor, each one promising a thrilling ride with
                        minimal environmental impact. From stylish urban cruisers to rugged mountain bikes, we have the
                        perfect electric steed to match every rider's needs and preferences.
                    </p>
                    <div class="mbr-section-btn">
                        <a class="btn btn-primary-outline display-7" href="https://mobiri.se">
                            <span class="mobi-mbri mobi-mbri-play mbr-iconfont mbr-iconfont-btn"></span>
                            View full article
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-7">
                <div class="image-wrapper">
                    <img src="templates/34426530/img/df22.jpeg" alt="Mobirise">
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
                media: `<img src="templates/34426530/preview/402a.png" />`,
            })

            domComponents.addType('section8', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="article02 ridem5 cid-u9JUdIx0EH" id="article02-3p">
    

    
    

    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="content-wrapper">
                    <h2 class="mbr-section-title mbr-fonts-style display-2">
                        <strong>Intuitive Rental Process </strong>
                    </h2>
                    <p class="mbr-text mbr-fonts-style display-7">
                        Simply download our mobile app, locate the nearest scooter using GPS technology, and unlock it
                        with just a tap of your smartphone. With adjustable speed settings and user-friendly controls,
                        our scooters are suitable for riders of all experience levels.
                    </p>
                    <div class="logo-wrapper">
                        <div class="logo-wrap">
                            <div class="image-wrap">
                                <img src="templates/34426530/img/1184.png" alt="Mobirise">
                            </div>
                            <p class="mbr-desc mbr-fonts-style display-7">
                                <strong>Ride</strong>
                            </p>
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

            blockManager.add('section8', {
                label: 'Section 8',
                category: 'Sections',
                content: {
                    type: 'section8',
                },
                media: `<img src="templates/34426530/preview/2f91.png" />`,
            })

            domComponents.addType('section9', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="article03 ridem5 cid-u9JUdSRZXh" id="article03-3q">
    

    
    

    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-5 card">
                <div class="title-wrapper">
                    <h2 class="mbr-section-title mbr-fonts-style display-1">
                        <strong>Eco-Ride <br> Adventure</strong>
                    </h2>
                </div>
            </div>
            <div class="col-12 col-lg-7 card">
                <div class="text-wrapper">
                    <p class="mbr-text mbr-fonts-style display-4">
                        Join us for an exhilarating journey through nature as we embark on the "Eco-Ride Adventure"
                        event with Electric Bikes! This unique experience is designed for outdoor enthusiasts and
                        eco-conscious.
                    </p>
                </div>
            </div>
            <div class="col-12">
                <div class="card-wrapper">
                    <img src="templates/34426530/img/f76b.jpeg" alt="Mobirise">
                    <div class="card-wrap">
                        <div class="content-wrap">
                            <p class="card-date mbr-fonts-style display-7">
                                May <br> <strong>18</strong>
                            </p>
                            <div class="title-wrap">
                                <h4 class="card-title mbr-fonts-style display-5">
                                    <strong>Exploring</strong>
                                </h4>
                                <p class="card-desc mbr-fonts-style display-4">
                                    Trail Exploration
                                </p>
                            </div>
                        </div>
                        <div class="text-wrap">
                            <p class="card-text mbr-fonts-style display-4">
                                Prepare to be amazed as we set off on a guided electric bike tour through the
                                picturesque trails of Green Trails Nature Reserve. Our expert guides will lead
                                participants on a scenic adventure, uncovering hidden gems and breathtaking views along
                                the way.
                            </p>
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

            blockManager.add('section9', {
                label: 'Section 9',
                category: 'Sections',
                content: {
                    type: 'section9',
                },
                media: `<img src="templates/34426530/preview/dfd1.png" />`,
            })

            domComponents.addType('section10', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="article04 ridem5 cid-u9JUe3rns9" id="article04-3r">
    

    
    

    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="content-wrapper">
                    <h2 class="mbr-section-title mbr-fonts-style display-2">
                        <strong>Fantastic Solution for Modern Transportation</strong>
                    </h2>
                    <p class="mbr-text mbr-fonts-style display-7">
                        Electric bikes make commuting more efficient and enjoyable. Riders can bypass traffic
                        congestion, shorten their commute times, and arrive at their destinations feeling refreshed and
                        energized. Plus, e-bikes can cover longer distances with less effort, expanding commuting
                        possibilities for riders of all fitness levels.
                    </p>
                    <div class="logo-wrapper">
                        <div class="logo-wrap">
                            <div class="image-wrap">
                                <img src="templates/34426530/img/3b03.png" alt="Mobirise">
                            </div>
                            <div class="desc-wrapper">
                                <p class="mbr-section-subtitle mbr-fonts-style display-7">
                                    <strong>Ride</strong>
                                </p>
                                <p class="mbr-desc mbr-fonts-style display-4">
                                    <strong>EFFICIENT COMMUTING</strong>
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

            blockManager.add('section10', {
                label: 'Section 10',
                category: 'Sections',
                content: {
                    type: 'section10',
                },
                media: `<img src="templates/34426530/preview/f421.png" />`,
            })

            domComponents.addType('section11', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="article05 ridem5 cid-u9JUegNjWI" id="article05-3s">
    

    
    

    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-4">
                <div class="title-wrapper">
                    <h2 class="mbr-section-title mbr-fonts-style display-2">
                        <strong>Service partner</strong>
                    </h2>
                </div>
            </div>
            <div class="col-12 col-lg-4">
                <div class="image-wrapper">
                    <img src="templates/34426530/img/7d89.jpeg" alt="Mobirise">
                </div>
            </div>
            <div class="col-12 col-lg-4">
                <div class="text-wrapper">
                    <p class="mbr-text mbr-fonts-style display-7">
                        Becoming a partner of an electric scooter rental service can be a rewarding opportunity to
                        participate in the growing market of urban mobility.
                    </p>
                    <div class="mbr-section-btn">
                        <a class="btn btn-primary display-4" href="https://mobiri.se">
                            <span class="mobi-mbri mobi-mbri-unlink mbr-iconfont mbr-iconfont-btn"></span>
                            VIEW MORE
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

            blockManager.add('section11', {
                label: 'Section 11',
                category: 'Sections',
                content: {
                    type: 'section11',
                },
                media: `<img src="templates/34426530/preview/f438.png" />`,
            })

            domComponents.addType('section12', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="image01 ridem5 cid-u9JUeB0Zxf mbr-parallax-background" id="image01-3t">
    

    
    <div class="mbr-overlay" style="opacity: 0.3; background-color: rgb(255, 255, 255);"></div>

    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="title-wrapper">
                    <h2 class="mbr-section-title mbr-fonts-style display-1">
                        <strong>An Environmentally Friendly <br> Alternative to Conventional Vehicles</strong>
                    </h2>
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
                media: `<img src="templates/34426530/preview/4a44.png" />`,
            })

            domComponents.addType('section13', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="video01 ridem5 cid-u9JUeKSMdG" id="video01-3u">
    

    
    

    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="content-wrapper">
                    <div class="title-wrapper">
                        <h2 class="mbr-section-title mbr-fonts-style display-2">
                            <strong>Media Project</strong>
                        </h2>
                        <div class="text-wrapper">
                            <p class="mbr-text mbr-fonts-style display-7">
                                In this innovative series, viewers are taken on a thrilling ride through the city's
                                vibrant streets, guided by the lens of a helmet-mounted camera on the handlebars of an
                                electric scooter. Each episode follows the adventures of our intrepid protagonist...
                            </p>
                        </div>
                    </div>
                    <div class="box">
                        <div class="mbr-media show-modal align-center" data-modal=".modalWindow">
                            <img src="templates/34426530/img/3c02.jpeg" alt="Mobirise">
                            <div class="icon-wrap">
                                <span class="mbr-iconfont mobi-mbri-play mobi-mbri"></span>
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

            blockManager.add('section13', {
                label: 'Section 13',
                category: 'Sections',
                content: {
                    type: 'section13',
                },
                media: `<img src="templates/34426530/preview/da71.png" />`,
            })

            domComponents.addType('section14', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="map01 ridem5 cid-u9JUf40e0D" id="map01-3v">
    

    
    

    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="content-wrapper">
                    <div class="google-map"><iframe frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAtXm0x23nRCgazjDV2Kl3GTHRP411ougQ&amp;q=350 5th Ave, New York, NY 10118" allowfullscreen=""></iframe></div>
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
                media: `<img src="templates/34426530/preview/567c.png" />`,
            })

            domComponents.addType('section15', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="form01 ridem5 cid-u9JUfmMSLP" id="form01-3w">
    

    
    

    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="title-wrapper">
                    <h2 class="mbr-section-title mbr-fonts-style display-1">
                        <strong>Enjoy the Ride</strong>
                    </h2>
                    <div class="text-wrapper">
                        <p class="mbr-text mbr-fonts-style display-7">
                            Are you ready to zip through the city streets with ease and style? Say hello to the future
                            of
                            urban transportation with our electric scooter rental service! Whether you're a local
                            looking to
                            breeze through your daily commute.
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-6">
                <div class="mbr-form form-wrapper" data-form-type="formoid">
                    <form action="https://mobirise.eu/" method="POST" class="mbr-form form-with-styler" data-form-title="Form Name"><input type="hidden" name="email" data-form-email="true" value="kvOfOF/4Z/Og+YwM6GDKiKhmZdkpb2DwFf6Vm3lHcgNaekRQJcyRWK7+Zm/eqebJO8wxe3calHQk698NdeyXNgVkXOly2JTEp4qeepOhFEfeEca39JGftZVtAa2e3k7x.5ug/9RMivAVnH5HA8PFjp8GMgJ8bIv+MZrOE35bMGTp2fTdACUogJtSdHDysKiXYJrMEpfCku1La7F5DS1bNBdcujmfyAKfqIDcsm+NRT3jAXeG8P/jdNmMLwz9/Qrlu">
                        <div class="row">
                            <div hidden="hidden" data-form-alert="" class="alert alert-success col-12">Thanks for filling
                                out the form!</div>
                            <div hidden="hidden" data-form-alert-danger="" class="alert alert-danger col-12"> Oops...! some
                                problem!
                            </div>
                        </div>
                        <div class="dragArea row">
                            <div class="col-lg-12 col-md-12 col-sm-12 form-group mb-3 mb-3 mb-3" data-for="name">
                                <label for="name-form01-3w" class="form-control-label mbr-fonts-style display-4"><strong>NAME*</strong></label>
                                <input type="text" name="name" data-form-field="name" class="form-control display-4" value="" id="name-form01-3w">
                            </div>
                            <div class="col-lg-12 col-md-12 col-sm-12 form-group mb-3 mb-3" data-for="email">
                                <label for="email-form01-3w" class="form-control-label mbr-fonts-style display-4"><strong>E-MAIL*</strong></label>
                                <input type="email" name="email" data-form-field="email" class="form-control display-4" value="" id="email-form01-3w">
                            </div>
                            <div data-for="number" class="col-lg-12 col-md-12 col-sm-12 form-group mb-3">
                                <label for="number-form01-3w" class="form-control-label mbr-fonts-style display-4"><strong>PHONE*</strong></label>
                                <input type="number" name="number" data-form-field="number" class="form-control display-4" max="100" min="0" step="1" value="" id="number-form01-3w">
                            </div>
                            <div data-for="text" class="col-lg-12 col-md-12 col-sm-12 form-group mb-3">
                                <label for="text-form01-3w" class="form-control-label mbr-fonts-style display-4"><strong>COMPANY</strong></label>
                                <input type="text" name="text" data-form-field="text" class="form-control display-4" value="" id="text-form01-3w">
                            </div>
                            <div data-for="textarea" class="col-lg-12 col-md-12 col-sm-12 form-group mb-3">
                                <label for="textarea-form01-3w" class="form-control-label mbr-fonts-style display-4"><strong>MESSAGE</strong></label>
                                <textarea name="textarea" data-form-field="textarea" class="form-control display-4" id="textarea-form01-3w"></textarea>
                            </div>
                            <div class="col mbr-section-btn">
                                <button type="submit" class="btn btn-primary display-4">SEND NOW</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="col-12 col-lg-5">
                <div class="content-wrapper">
                    <h3 class="mbr-section-subtitle mbr-fonts-style display-2">
                        <strong>Contact for Booking</strong>
                    </h3>
                    <div class="list-wrapper">
                        <ul class="list mbr-fonts-style display-4">
                            <li class="item-wrap"><strong>32 Rue de Rivoli Paris, France</strong></li>
                            <li class="item-wrap"><strong>mobi@rise.com</strong></li>
                            <li class="item-wrap">+985(0)65 342 110</li>
                            <li class="item-wrap"><strong>ride@m5.com</strong></li>
                            <li class="item-wrap">+985(0)63 123 110</li>
                            <li class="item-wrap">Inst: Ruth Rhodes</li>
                        </ul>
                    </div>
                    <div class="content-wrap">
                        <p class="mbr-desc mbr-fonts-style display-5">
                            <strong>Connect with us on social media</strong>
                        </p>
                        <div class="social-wrapper">
                            <div class="social-wrap">
                                <div class="soc-item">
                                    <a href="https://mobiri.se/">
                                        <span class="mbr-iconfont socicon socicon-facebook"></span>
                                    </a>
                                </div>
                                <div class="soc-item">
                                    <a href="https://mobiri.se/">
                                        <span class="mbr-iconfont socicon socicon-instagram"></span>
                                    </a>
                                </div>
                                <div class="soc-item">
                                    <a href="https://mobiri.se/">
                                        <span class="mbr-iconfont socicon socicon-tiktok"></span>
                                    </a>
                                </div>
                                <div class="soc-item">
                                    <a href="https://mobiri.se/">
                                        <span class="mbr-iconfont socicon socicon-linkedin"></span>
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

            blockManager.add('section15', {
                label: 'Section 15',
                category: 'Sections',
                content: {
                    type: 'section15',
                },
                media: `<img src="templates/34426530/preview/5628.png" />`,
            })

            domComponents.addType('section16', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="list01 ridem5 cid-u9JUfGD6yM" id="list01-3x">
    

    
    

    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="content-wrapper">
                    <p class="mbr-desc mbr-fonts-style display-4">
                        <strong>URBAN MOBILITY</strong>
                    </p>
                    <div id="bootstrap-accordion_15" class="panel-group accordionStyles accordion" role="tablist" aria-multiselectable="true">
                        <div class="card">
                            <div class="card-header" role="tab" id="headingOne">
                                <a role="button" class="panel-title collapsed" data-toggle="collapse" data-bs-toggle="collapse" data-core="" href="#collapse1_15" aria-expanded="false" aria-controls="collapse1">
                                    <h4 class="panel-title-edit mbr-fonts-style display-2">
                                        <strong>City Commuter Scooter</strong>
                                    </h4>
                                    <div class="icon-wrapper">
                                        <span class="sign mbr-iconfont mobi-mbri-arrow-down mobi-mbri"></span>
                                    </div>
                                </a>
                            </div>
                            <div id="collapse1_15" class="panel-collapse noScroll collapse" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion" data-bs-parent="#bootstrap-accordion_15">
                                <div class="panel-body">
                                    <ul class="list mbr-fonts-style display-7">
                                        <li class="item-wrap"><strong>Powerful</strong> electric motor</li>
                                        <li class="item-wrap"><strong>Long-lasting</strong> battery</li>
                                        <li class="item-wrap"><strong>Offers</strong> smooth acceleration</li>
                                        <li class="item-wrap"><strong>Impressive</strong> range</li>
                                        <li class="item-wrap"><strong>Compact</strong> size</li>
                                        <li class="item-wrap"><strong>Foldable</strong> handlebars make it easy to store and carry</li>
                                        <li class="item-wrap"><strong>Responsive</strong> braking system</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" role="tab" id="headingTwo">
                                <a role="button" class="panel-title collapsed" data-toggle="collapse" data-bs-toggle="collapse" data-core="" href="#collapse2_15" aria-expanded="false" aria-controls="collapse2">
                                    <h4 class="panel-title-edit mbr-fonts-style display-2">
                                        <strong>Off-Road Adventure Scooter</strong>
                                    </h4>
                                    <div class="icon-wrapper">
                                        <span class="sign mbr-iconfont mobi-mbri-arrow-down mobi-mbri"></span>
                                    </div>
                                </a>
                            </div>
                            <div id="collapse2_15" class="panel-collapse noScroll collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion" data-bs-parent="#bootstrap-accordion_15">
                                <div class="panel-body">
                                    <ul class="list mbr-fonts-style display-7">
                                        <li class="item-wrap"><strong>With larger,</strong> all-terrain tires </li>
                                        <li class="item-wrap"><strong>Enhanced</strong> suspension systems</li>
                                        <li class="item-wrap"><strong>Scooter</strong> provides stability and control</li>
                                        <li class="item-wrap"><strong>Powerful</strong> motor and high-capacity battery</li>
                                        <li class="item-wrap"><strong>Rugged</strong> frame ensures reliability</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" role="tab" id="headingThree">
                                <a role="button" class="panel-title collapsed" data-toggle="collapse" data-bs-toggle="collapse" data-core="" href="#collapse3_15" aria-expanded="false" aria-controls="collapse3">
                                    <h4 class="panel-title-edit mbr-fonts-style display-2">
                                        <strong>Touring Cruiser Scooter</strong>
                                    </h4>
                                    <div class="icon-wrapper">
                                        <span class="sign mbr-iconfont mobi-mbri-arrow-down mobi-mbri"></span>
                                    </div>
                                </a>
                            </div>
                            <div id="collapse3_15" class="panel-collapse noScroll collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion" data-bs-parent="#bootstrap-accordion_15">
                                <div class="panel-body">
                                    <ul class="list mbr-fonts-style display-7">
                                        <li class="item-wrap"><strong>Equipped</strong> with a plush</li>
                                        <li class="item-wrap"><strong>Padded</strong> seat and adjustable handlebars</li>
                                        <li class="item-wrap"><strong>Offers</strong> exceptional comfort </li>
                                        <li class="item-wrap"><strong>Efficient</strong> motor and extended battery</li>
                                        <li class="item-wrap"><strong>Built-in</strong> storage compartments</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" role="tab" id="headingFour">
                                <a role="button" class="panel-title collapsed" data-toggle="collapse" data-bs-toggle="collapse" data-core="" href="#collapse4_15" aria-expanded="false" aria-controls="collapse4">
                                    <h4 class="panel-title-edit mbr-fonts-style display-2">
                                        <strong>Compact Folding Scooter</strong>
                                    </h4>
                                    <div class="icon-wrapper">
                                        <span class="sign mbr-iconfont mobi-mbri-arrow-down mobi-mbri"></span>
                                    </div>
                                </a>
                            </div>
                            <div id="collapse4_15" class="panel-collapse noScroll collapse" role="tabpanel" aria-labelledby="headingFour" data-parent="#accordion" data-bs-parent="#bootstrap-accordion_15">
                                <div class="panel-body">
                                    <ul class="list mbr-fonts-style display-7">
                                        <li class="item-wrap"><strong>Small</strong> stature</li>
                                        <li class="item-wrap"><strong>Delivers</strong> impressive power and acceleration</li>
                                        <li class="item-wrap"><strong>Short</strong> commutes and urban errands</li>
                                        <li class="item-wrap"><strong>Quick-folding</strong> mechanism</li>
                                        <li class="item-wrap"><strong>Lightweight</strong> construction</li>
                                        <li class="item-wrap"><strong>Easy</strong> maneuverability</li>
                                    </ul>
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

            blockManager.add('section16', {
                label: 'Section 16',
                category: 'Sections',
                content: {
                    type: 'section16',
                },
                media: `<img src="templates/34426530/preview/4ec9.png" />`,
            })

            domComponents.addType('section17', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="list02 ridem5 cid-u9JUfYrqJa" id="list02-3y">
    

    
    

    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-7">
                <div class="image-wrapper">
                    <img src="templates/34426530/img/f566.jpeg" alt="Mobirise">
                </div>
            </div>
            <div class="col-12 col-lg-4">
                <div class="content-wrapper">
                    <h2 class="mbr-section-title mbr-fonts-style display-7">
                        <strong>The Electric Scooter boasts a robust electric motor that delivers impressive acceleration and
                            smooth performance.</strong>
                    </h2>
                    <ul class="list mbr-fonts-style display-4">
                        <li class="item-wrap"><strong>Long-lasting Battery:</strong>
                            Equipped with a high-capacity lithium-ion battery, this electric scooter offers an extended
                            range on a single charge.
                        </li>
                        <li class="item-wrap"><strong>Quick Charging Capability:</strong>
                            With its fast-charging technology, the
                            Electric Scooter can recharge its battery in a fraction
                            of the time compared to other electric scooters.
                        </li>
                        <li class="item-wrap"><strong>Durable Construction:</strong>
                            Electric Scooter features a sturdy frame and
                            high-quality components that are designed to last.
                        </li>
                        <li class="item-wrap"><strong>Foldable Design:</strong>
                            Electric Scooter features a foldable design that
                            allows it to be compactly folded down in seconds.
                        </li>
                    </ul>
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
                media: `<img src="templates/34426530/preview/dd19.png" />`,
            })

            domComponents.addType('section18', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="tabs01 ridem5 cid-u9JUgiQLZp" id="tabs01-3z">
    

    
    

    <div class="container">
        <div class="row">
            <div class="col-12">
                <p class="mbr-desc mbr-fonts-style display-4">
                    <strong>MODELS</strong>
                </p>
            </div>
            <div class="col-12 col-lg-4">
                <div class="title-wrapper">
                    <h2 class="mbr-section-title mbr-fonts-style display-2">
                        <strong>Welcome to Store</strong>
                    </h2>
                </div>
            </div>
            <div class="col-12 col-lg-7">
                <div class="text-wrapper">
                    <p class="mbr-text mbr-fonts-style display-7">
                        Our store is proud to offer a wide array of cutting-edge bicycle models designed to suit every
                        rider's needs and preferences.
                    </p>
                </div>
            </div>
            <div class="col-12 col-lg-11">
                <div class="tab-content">
                    <div id="tab1" class="tab-pane in active" role="tabpanel">
                        <div class="content-wrap">
                            <div class="image-wrapper">
                                <img src="templates/34426530/img/d862.jpeg" alt="Mobirise">
                            </div>
                            <div class="mbr-section-btn">
                                <a class="btn btn-primary display-4" href="https://mobiri.se">
                                    <span class="mobi-mbri mobi-mbri-setting mbr-iconfont mbr-iconfont-btn"></span>
                                    CHOOSE A MODEL
                                </a>
                            </div>
                            <p class="item-desc mbr-fonts-style display-4">
                                <strong>YOU CAN CUSTOMIZE</strong>
                            </p>
                        </div>
                    </div>
                    <div id="tab2" class="tab-pane" role="tabpanel">
                        <div class="content-wrap">
                            <div class="image-wrapper">
                                <img src="templates/34426530/img/15e9.jpeg" alt="Mobirise">
                            </div>
                            <div class="mbr-section-btn">
                                <a class="btn btn-primary display-4" href="https://mobiri.se">
                                    <span class="mobi-mbri mobi-mbri-setting mbr-iconfont mbr-iconfont-btn"></span>
                                    CHOOSE A MODEL
                                </a>
                            </div>
                            <p class="item-desc mbr-fonts-style display-4">
                                <strong>YOU CAN CUSTOMIZE</strong>
                            </p>
                        </div>
                    </div>
                    <div id="tab3" class="tab-pane" role="tabpanel">
                        <div class="content-wrap">
                            <div class="image-wrapper">
                                <img src="templates/34426530/img/5d60.jpeg" alt="Mobirise">
                            </div>
                            <div class="mbr-section-btn">
                                <a class="btn btn-primary display-4" href="https://mobiri.se">
                                    <span class="mobi-mbri mobi-mbri-setting mbr-iconfont mbr-iconfont-btn"></span>
                                    CHOOSE A MODEL
                                </a>
                            </div>
                            <p class="item-desc mbr-fonts-style display-4">
                                <strong>YOU CAN CUSTOMIZE</strong>
                            </p>
                        </div>
                    </div>
                    <div id="tab4" class="tab-pane" role="tabpanel">
                        <div class="content-wrap">
                            <div class="image-wrapper">
                                <img src="templates/34426530/img/c9be.jpeg" alt="Mobirise">
                            </div>
                            <div class="mbr-section-btn">
                                <a class="btn btn-primary display-4" href="https://mobiri.se">
                                    <span class="mobi-mbri mobi-mbri-setting mbr-iconfont mbr-iconfont-btn"></span>
                                    CHOOSE A MODEL
                                </a>
                            </div>
                            <p class="item-desc mbr-fonts-style display-4">
                                <strong>YOU CAN CUSTOMIZE</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-1 card">
                <div class="tabs-wrapper">
                    <ul class="nav nav-tabs" role="tablist">
                        <li class="nav-item first mbr-fonts-style">
                            <a class="nav-link show active mbr-fonts-style display-4" role="tab" data-toggle="tab" data-bs-toggle="tab" href="#tab1" aria-selected="true">
                                1
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link show active mbr-fonts-style display-4" role="tab" data-toggle="tab" data-bs-toggle="tab" href="#tab2" aria-selected="true">
                                2
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link show active mbr-fonts-style display-4" role="tab" data-toggle="tab" data-bs-toggle="tab" href="#tab3" aria-selected="true">
                                3
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link show active mbr-fonts-style display-4" role="tab" data-toggle="tab" data-bs-toggle="tab" href="#tab4" aria-selected="true">
                                4
                            </a>
                        </li>
                    </ul>
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
                media: `<img src="templates/34426530/preview/a77f.png" />`,
            })

            domComponents.addType('section19', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="tabs02 ridem5 cid-u9JUgBdq3B" id="tabs02-40">
    

    
    

    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="tabs-wrapper">
                    <ul class="nav nav-tabs" role="tablist">
                        <li class="nav-item first mbr-fonts-style">
                            <a class="nav-link show active mbr-fonts-style display-7" role="tab" data-toggle="tab" data-bs-toggle="tab" href="#tab1" aria-selected="true">
                                <strong>Geo-Fencing</strong>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link show active mbr-fonts-style display-7" role="tab" data-toggle="tab" data-bs-toggle="tab" href="#tab2" aria-selected="true">
                               <strong>Safety</strong>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link show active mbr-fonts-style display-7" role="tab" data-toggle="tab" data-bs-toggle="tab" href="#tab3" aria-selected="true">
                                <strong>Battery</strong>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link show active mbr-fonts-style display-7" role="tab" data-toggle="tab" data-bs-toggle="tab" href="#tab4" aria-selected="true">
                                <strong>Transit</strong>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link show active mbr-fonts-style display-7" role="tab" data-toggle="tab" data-bs-toggle="tab" href="#tab5" aria-selected="true">
                                <strong>Options</strong>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link show active mbr-fonts-style display-7" role="tab" data-toggle="tab" data-bs-toggle="tab" href="#tab6" aria-selected="true">
                                <strong>Community</strong>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-12">
                <div class="tab-content">
                    <div id="tab1" class="tab-pane in active" role="tabpanel">
                        <div class="content-wrap">
                            <div class="image-wrapper">
                                <img src="templates/34426530/img/b071.jpeg" alt="Mobirise">
                            </div>
                            <div class="text-wrapper card">
                                <h4 class="item-title mbr-fonts-style display-5">
                                    <strong>Geo-Fencing Technology</strong>
                                </h4>
                                <p class="item-text mbr-fonts-style display-4">
                                    To address concerns about scooter clutter and ensure responsible parking, companies
                                    are implementing geo-fencing technology. This feature restricts parking to
                                    designated zones within the city, helping to keep sidewalks clear and ensuring
                                    scooters are parked in safe and convenient locations.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div id="tab2" class="tab-pane" role="tabpanel">
                        <div class="content-wrap">
                            <div class="image-wrapper">
                                <img src="templates/34426530/img/1b94.jpeg" alt="Mobirise">
                            </div>
                            <div class="text-wrapper card">
                                <h4 class="item-title mbr-fonts-style display-5">
                                    <strong>Enhanced Safety Features</strong>
                                </h4>
                                <p class="item-text mbr-fonts-style display-4">
                                    In response to user feedback and a commitment to rider safety, electric scooter
                                    rental companies are rolling out updates that include enhanced safety features.
                                    These may include improved braking systems, brighter LED lights for increased
                                    visibility, and integrated helmet rental options through the app.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div id="tab3" class="tab-pane" role="tabpanel">
                        <div class="content-wrap">
                            <div class="image-wrapper">
                                <img src="templates/34426530/img/5004.jpeg" alt="Mobirise">
                            </div>
                            <div class="text-wrapper card">
                                <h4 class="item-title mbr-fonts-style display-5">
                                    <strong>Battery Swapping Stations</strong>
                                </h4>
                                <p class="item-text mbr-fonts-style display-4">
                                    To eliminate range anxiety and provide a seamless riding experience, companies are
                                    introducing battery swapping stations at strategic locations throughout the city.
                                    Users can easily swap out depleted batteries for fully charged ones, extending their
                                    ride without interruption.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div id="tab4" class="tab-pane" role="tabpanel">
                        <div class="content-wrap">
                            <div class="image-wrapper">
                                <img src="templates/34426530/img/dd2d.jpeg" alt="Mobirise">
                            </div>
                            <div class="text-wrapper card">
                                <h4 class="item-title mbr-fonts-style display-5">
                                    <strong>Integration with Public Transit</strong>
                                </h4>
                                <p class="item-text mbr-fonts-style display-4">
                                    Recognizing the importance of multimodal transportation, electric scooter rental
                                    services are integrating with existing public transit systems. Users can now plan
                                    their routes, purchase tickets, and seamlessly transfer between scooters and buses
                                    or trains using a single app, making it easier than ever to navigate the city.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div id="tab5" class="tab-pane" role="tabpanel">
                        <div class="content-wrap">
                            <div class="image-wrapper">
                                <img src="templates/34426530/img/851c.jpeg" alt="Mobirise">
                            </div>
                            <div class="text-wrapper card">
                                <h4 class="item-title mbr-fonts-style display-5">
                                    <strong>Accessible Options</strong>
                                </h4>
                                <p class="item-text mbr-fonts-style display-4">
                                    Inclusivity is a top priority for electric scooter rental companies, and updates are
                                    being made to ensure accessibility for all riders. This may include the introduction
                                    of seated scooters or scooters with adjustable handlebar heights, as well as
                                    features within the app to assist users with disabilities in locating and unlocking
                                    scooters.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div id="tab6" class="tab-pane" role="tabpanel">
                        <div class="content-wrap">
                            <div class="image-wrapper">
                                <img src="templates/34426530/img/7d89.jpeg" alt="Mobirise">
                            </div>
                            <div class="text-wrapper card">
                                <h4 class="item-title mbr-fonts-style display-5">
                                    <strong>Community Engagement Initiatives</strong>
                                </h4>
                                <p class="item-text mbr-fonts-style display-4">
                                    To foster a sense of community and promote responsible riding, companies are
                                    launching initiatives to engage users in local clean-up efforts and safety awareness
                                    campaigns. This may involve organizing community events, offering incentives for
                                    reporting damaged scooters, and partnering with local organizations to promote
                                    sustainability and responsible urban mobility.
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

            blockManager.add('section19', {
                label: 'Section 19',
                category: 'Sections',
                content: {
                    type: 'section19',
                },
                media: `<img src="templates/34426530/preview/ab37.png" />`,
            })

            domComponents.addType('section20', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="gallery01 ridem5 cid-u9JUgXHnjB" id="gallery01-41">
    

    
    

    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-4">
                <div class="text-wrapper">
                    <p class="mbr-text mbr-fonts-style display-7">
                        Nestled in the heart of the city, <strong>Electric Bike Store</strong> is not just a store; it's a destination
                        for eco-conscious commuters, outdoor enthusiasts, and anyone looking to add a spark of
                        excitement to their daily ride.
                    </p>
                </div>
            </div>
            <div class="col-12 col-lg-7">
                <div class="image-wrapper image-wrap">
                    <img src="templates/34426530/img/dbce.jpeg" alt="Mobirise">
                </div>
            </div>
            <div class="col-12 col-lg-8">
                <div class="image-wrapper">
                    <img src="templates/34426530/img/8d7e.jpeg" alt="Mobirise">
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
                media: `<img src="templates/34426530/preview/0e41.png" />`,
            })

            domComponents.addType('section21', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="slider01 mbr-embla ridem5 cid-u9JUhhXovx" id="slider01-42">
    
    

    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="embla" data-skip-snaps="true" data-align="center" data-contain-scroll="trimSnaps" data-loop="true" data-auto-play="true" data-auto-play-interval="2" data-draggable="true">
                    <div class="embla__viewport">
                        <div class="embla__container">
                            <div class="embla__slide slider-image item" style="margin-left: 2rem; margin-right: 2rem;">
                                <div class="slide-content">
                                    <div class="item-wrapper">
                                        <div class="item-content">
                                            <h4 class="item-title mbr-fonts-style display-1">
                                                <strong>RideM5 Theme</strong>
                                            </h4>
                                        </div>
                                        <div class="item-img">
                                            <img src="templates/34426530/img/3b03.png" alt="Mobirise Website Builder">
                                        </div>
                                        <div class="item-line"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="embla__slide slider-image item" style="margin-left: 2rem; margin-right: 2rem;">
                                <div class="slide-content">
                                    <div class="item-wrapper">
                                        <div class="item-content">
                                            <h4 class="item-title mbr-fonts-style display-1">
                                                <strong>RideM5 Theme</strong>
                                            </h4>
                                        </div>
                                        <div class="item-img">
                                            <img src="templates/34426530/img/3b03.png" alt="Mobirise Website Builder">
                                        </div>
                                        <div class="item-line"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="embla__slide slider-image item" style="margin-left: 2rem; margin-right: 2rem;">
                                <div class="slide-content">
                                    <div class="item-wrapper">
                                        <div class="item-content">
                                            <h4 class="item-title mbr-fonts-style display-1">
                                                <strong>RideM5 Theme</strong>
                                            </h4>
                                        </div>
                                        <div class="item-img">
                                            <img src="templates/34426530/img/3b03.png" alt="Mobirise Website Builder">
                                        </div>
                                        <div class="item-line"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="embla__slide slider-image item" style="margin-left: 2rem; margin-right: 2rem;">
                                <div class="slide-content">
                                    <div class="item-wrapper">
                                        <div class="item-content">
                                            <h4 class="item-title mbr-fonts-style display-1">
                                                <strong>RideM5 Theme</strong>
                                            </h4>
                                        </div>
                                        <div class="item-img">
                                            <img src="templates/34426530/img/3b03.png" alt="Mobirise Website Builder">
                                        </div>
                                        <div class="item-line"></div>
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

            blockManager.add('section21', {
                label: 'Section 21',
                category: 'Sections',
                content: {
                    type: 'section21',
                },
                media: `<img src="templates/34426530/preview/814e.png" />`,
            })

            domComponents.addType('section22', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="slider02 mbr-embla ridem5 cid-u9JUhAzjHi" id="slider02-43">
    
    

    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="embla" data-skip-snaps="true" data-align="center" data-contain-scroll="trimSnaps" data-loop="true" data-auto-play="true" data-auto-play-interval="5" data-draggable="true">
                    <div class="embla__viewport">
                        <div class="embla__container">
                            <div class="embla__slide slider-image item" style="margin-left: 1rem; margin-right: 1rem;">
                                <div class="slide-content">
                                    <div class="item-wrapper">
                                        <div class="item-img">
                                            <img src="templates/34426530/img/24e5.jpeg" alt="Mobirise Website Builder">
                                        </div>
                                        <div class="item-content">
                                            <h4 class="item-name mbr-fonts-style display-7">
                                                <strong>Tiffany Blake</strong>
                                            </h4>
                                            <div class="icon-wrapper">
                                                <span class="mbr-iconfont mobi-mbri-quote-left mobi-mbri"></span>
                                            </div>
                                            <p class="item-text mbr-fonts-style display-4">
                                                I was a bit skeptical at first, but renting an electric scooter turned
                                                out to be the highlight of my trip! The app made it super easy to find
                                                and unlock a scooter, and zipping around the city was an absolute blast.
                                                Plus, it's eco-friendly – what's not to love?
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="embla__slide slider-image item" style="margin-left: 1rem; margin-right: 1rem;">
                                <div class="slide-content">
                                    <div class="item-wrapper">
                                        <div class="item-img">
                                            <img src="templates/34426530/img/2e13.jpeg" alt="Mobirise Website Builder">
                                        </div>
                                        <div class="item-content">
                                            <h4 class="item-name mbr-fonts-style display-7">
                                                <strong>Bobby Carr</strong>
                                            </h4>
                                            <div class="icon-wrapper">
                                                <span class="mbr-iconfont mobi-mbri-quote-left mobi-mbri"></span>
                                            </div>
                                            <p class="item-text mbr-fonts-style display-4">
                                                I've started using electric scooters for my daily commute, and it's
                                                been a game-changer. The scooters are fast, convenient, and a fun way to
                                                beat the traffic. My only gripe is that sometimes the battery life isn't
                                                as long as I'd like, but overall, I'm really happy with the service.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="embla__slide slider-image item" style="margin-left: 1rem; margin-right: 1rem;">
                                <div class="slide-content">
                                    <div class="item-wrapper">
                                        <div class="item-img">
                                            <img src="templates/34426530/img/9876.jpeg" alt="Mobirise Website Builder">
                                        </div>
                                        <div class="item-content">
                                            <h4 class="item-name mbr-fonts-style display-7">
                                                <strong>Janet Hammond</strong>
                                            </h4>
                                            <div class="icon-wrapper">
                                                <span class="mbr-iconfont mobi-mbri-quote-left mobi-mbri"></span>
                                            </div>
                                            <p class="item-text mbr-fonts-style display-4">
                                                Renting an electric scooter was a convenient way to explore the city,
                                                but I found myself constantly dodging potholes and uneven pavement. The
                                                scooters are great on smooth roads, but they can be a bit tricky to
                                                handle on rough terrain.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="embla__slide slider-image item" style="margin-left: 1rem; margin-right: 1rem;">
                                <div class="slide-content">
                                    <div class="item-wrapper">
                                        <div class="item-img">
                                            <img src="templates/34426530/img/209e.jpeg" alt="Mobirise Website Builder">
                                        </div>
                                        <div class="item-content">
                                            <h4 class="item-name mbr-fonts-style display-7">
                                                <strong>Paul Reed</strong>
                                            </h4>
                                            <div class="icon-wrapper">
                                                <span class="mbr-iconfont mobi-mbri-quote-left mobi-mbri"></span>
                                            </div>
                                            <p class="item-text mbr-fonts-style display-4">
                                                I appreciated the emphasis on safety with this electric scooter rental
                                                service. The app provides clear instructions on how to ride safely, and
                                                the scooters themselves feel sturdy and well-maintained. My only
                                                suggestion would be to add more designated parking zones.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="embla__slide slider-image item" style="margin-left: 1rem; margin-right: 1rem;">
                                <div class="slide-content">
                                    <div class="item-wrapper">
                                        <div class="item-img">
                                            <img src="templates/34426530/img/f5ba.jpeg" alt="Mobirise Website Builder">
                                        </div>
                                        <div class="item-content">
                                            <h4 class="item-name mbr-fonts-style display-7">
                                                <strong>Lois Mills</strong>
                                            </h4>
                                            <div class="icon-wrapper">
                                                <span class="mbr-iconfont mobi-mbri-quote-left mobi-mbri"></span>
                                            </div>
                                            <p class="item-text mbr-fonts-style display-4">
                                                As a tourist, renting an electric scooter was the best decision I made
                                                during my trip. It made getting around the city so much easier and more
                                                enjoyable. Plus, I loved that I could easily park the scooter and
                                                explore on foot whenever I wanted.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="embla__slide slider-image item" style="margin-left: 1rem; margin-right: 1rem;">
                                <div class="slide-content">
                                    <div class="item-wrapper">
                                        <div class="item-img">
                                            <img src="templates/34426530/img/fd8f.jpeg" alt="Mobirise Website Builder">
                                        </div>
                                        <div class="item-content">
                                            <h4 class="item-name mbr-fonts-style display-7">
                                                <strong>Joseph Reid</strong>
                                            </h4>
                                            <div class="icon-wrapper">
                                                <span class="mbr-iconfont mobi-mbri-quote-left mobi-mbri"></span>
                                            </div>
                                            <p class="item-text mbr-fonts-style display-4">
                                                While the concept of electric scooter rental is great, the customer
                                                service leaves a lot to be desired. I had an issue with my rental and
                                                struggled to get in touch with customer support for assistance. It was
                                                frustrating and soured my experience overall.
                                            </p>
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

            blockManager.add('section22', {
                label: 'Section 22',
                category: 'Sections',
                content: {
                    type: 'section22',
                },
                media: `<img src="templates/34426530/preview/147f.png" />`,
            })

            domComponents.addType('section23', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="pricing01 ridem5 cid-u9JUhTAoPZ" id="pricing01-44">
    

    
    

    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="title-wrapper">
                    <h2 class="mbr-section-title mbr-fonts-style display-2">
                        <strong>Prices in The Bike Store</strong>
                    </h2>
                </div>
            </div>
            <div class="item features-image col-12 col-lg-4 item-mb">
                <div class="item-wrapper card">
                    <div class="item-wrap">
                        <div class="item-img">
                            <img src="templates/34426530/img/ab28.jpeg" alt="Mobirise">
                        </div>
                        <div class="item-content">
                            <p class="item-price mbr-fonts-style display-5">
                                <strong>$1,499</strong>
                            </p>
                            <h4 class="item-title mbr-fonts-style display-7">
                                <strong>EcoCruise E1</strong>
                            </h4>
                            <p class="item-text mbr-fonts-style display-4">
                                The EcoCruise E1 is an entry-level electric bike designed for urban commuting and
                                recreational riding.
                            </p>
                        </div>
                    </div>
                    <div class="mbr-section-btn">
                        <a class="btn btn-primary display-4" href="https://mobiri.se">
                            BUY NOW
                        </a>
                    </div>
                </div>
            </div>
            <div class="item features-image col-12 col-lg-4 item-mb">
                <div class="item-wrapper card">
                    <div class="item-wrap">
                        <div class="item-img">
                            <img src="templates/34426530/img/cca5.jpeg" alt="Mobirise">
                        </div>
                        <div class="item-content">
                            <p class="item-price mbr-fonts-style display-5">
                                <strong>$2,499</strong>
                            </p>
                            <h4 class="item-title mbr-fonts-style display-7">
                                <strong>Trek Verve+ 2</strong>
                            </h4>
                            <p class="item-text mbr-fonts-style display-4">
                                The Trek Verve+ 2 is a mid-range electric bike ideal for riders seeking versatility and
                                comfort.
                            </p>
                        </div>
                    </div>
                    <div class="mbr-section-btn">
                        <a class="btn btn-primary display-4" href="https://mobiri.se">
                            BUY NOW
                        </a>
                    </div>
                </div>
            </div>
            <div class="item features-image col-12 col-lg-4 item-mb">
                <div class="item-wrapper card">
                    <div class="item-wrap">
                        <div class="item-img">
                            <img src="templates/34426530/img/2c6b.jpeg" alt="Mobirise">
                        </div>
                        <div class="item-content">
                            <p class="item-price mbr-fonts-style display-5">
                                <strong>$3,499</strong>
                            </p>
                            <h4 class="item-title mbr-fonts-style display-7">
                                <strong>Turbo Vado SL</strong>
                            </h4>
                            <p class="item-text mbr-fonts-style display-4">
                                Turbo Vado SL is a premium electric bike designed for discerning riders who demand the best
                                in performance.
                            </p>
                        </div>
                    </div>
                    <div class="mbr-section-btn">
                        <a class="btn btn-primary display-4" href="https://mobiri.se">
                            BUY NOW
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

            blockManager.add('section23', {
                label: 'Section 23',
                category: 'Sections',
                content: {
                    type: 'section23',
                },
                media: `<img src="templates/34426530/preview/11f1.png" />`,
            })

            domComponents.addType('section24', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="pricing02 ridem5 cid-u9JUi81vSY" id="pricing02-45">
    

    
    

    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="title-wrapper">
                    <h2 class="mbr-section-title mbr-fonts-style display-2">
                        <strong>Rental Prices</strong>
                    </h2>
                </div>
            </div>
            <div class="item features-without-image col-12 col-lg-4 item-mb">
                <div class="item-wrapper card">
                    <div class="card-box">
                        <div class="icon-wrapper">
                            <span class="mbr-iconfont mobi-mbri-cash mobi-mbri"></span>
                        </div>
                        <h4 class="item-title mbr-fonts-style display-5">
                            <strong>Standard Rental <br> Rates</strong>
                        </h4>
                        <ul class="list mbr-fonts-style display-4">
                            <li class="item-wrap"><strong>Hourly:</strong> $0.25 per minute</li>
                            <li class="item-wrap"><strong>Daily:</strong> $25 per day</li>
                            <li class="item-wrap"><strong>Weekly:</strong> $100 per week</li>
                            <li class="item-wrap"><strong>Monthly:</strong> $300 per month</li>
                        </ul>
                    </div>
                    <div class="mbr-section-btn">
                        <a class="btn btn-primary display-4" href="https://mobiri.se">
                            RENT NOW
                        </a>
                    </div>
                </div>
            </div>
            <div class="item features-without-image col-12 col-lg-4 item-mb">
                <div class="item-wrapper card">
                    <div class="card-box">
                        <div class="icon-wrapper">
                            <span class="mbr-iconfont mobi-mbri-cash mobi-mbri"></span>
                        </div>
                        <h4 class="item-title mbr-fonts-style display-5">
                            <strong>Flexible Pricing Options</strong>
                        </h4>
                        <ul class="list mbr-fonts-style display-4">
                            <li class="item-wrap"><strong>Pay-As-You-Go:</strong>
                                $1 to unlock + $0.15 per minute
                            </li>
                            <li class="item-wrap"><strong>Day Pass:</strong>
                                $20 for unlimited rides within a 24-hour period
                            </li>
                            <li class="item-wrap"><strong>Monthly Subscription:</strong>
                                $50 for unlimited rides throughout the month
                            </li>
                        </ul>
                    </div>
                    <div class="mbr-section-btn">
                        <a class="btn btn-primary display-4" href="https://mobiri.se">
                            RENT NOW
                        </a>
                    </div>
                </div>
            </div>
            <div class="item features-without-image col-12 col-lg-4 item-mb">
                <div class="item-wrapper card">
                    <div class="card-box">
                        <div class="icon-wrapper">
                            <span class="mbr-iconfont mobi-mbri-cash mobi-mbri"></span>
                        </div>
                        <h4 class="item-title mbr-fonts-style display-5">
                            <strong>Tiered Pricing Structure</strong>
                        </h4>
                        <ul class="list mbr-fonts-style display-4">
                            <li class="item-wrap"><strong>Basic:</strong> $1 to unlock + $0.20 per minute</li>
                            <li class="item-wrap"><strong>Plus:</strong>
                                $2 to unlock + $0.15 per minute (includes priority access during peak hours)
                            </li>
                            <li class="item-wrap"><strong>Premium:</strong>
                                $3 to unlock + $0.10 per minute (includes access to high-performance scooters and
                                exclusive parking areas)
                            </li>
                        </ul>
                    </div>
                    <div class="mbr-section-btn">
                        <a class="btn btn-primary display-4" href="https://mobiri.se">
                            RENT NOW
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

            blockManager.add('section24', {
                label: 'Section 24',
                category: 'Sections',
                content: {
                    type: 'section24',
                },
                media: `<img src="templates/34426530/preview/276d.png" />`,
            })

            domComponents.addType('section25', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="footer01 ridem5 cid-u9JQ3cOyyq" once="footers" id="footer01-3i">
    

    
    

    <div class="container">
        <div class="row">
            
            
            
            
            <div class="col-12">
                <div class="copy-wrapper">
                    
                    <p class="mbr-copy mbr-fonts-style display-4">
                        © Copyright 2030 Mobirise - All Rights Reserved
                    </p>
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
                media: `<img src="templates/34426530/preview/35b8.png" />`,
            })
        }