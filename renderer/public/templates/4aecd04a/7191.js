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
                        components: `<section data-bs-version="5.1" class="menu menu01 replym5 cid-u8jaE1aKxX" once="menu" id="menu01-v">

    

    <nav class="navbar navbar-dropdown navbar-expand-lg">
        <div class="menu_box container">
            <div class="navbar-brand d-flex">
                <span class="navbar-logo">
                    <a href="index.html">
                        <img src="templates/4aecd04a/img/aad7.png" alt="Mobirise">
                    </a>
                </span>
                <span class="navbar-caption-wrap">
                    <a class="navbar-caption display-7" href="index.html">REPLYM5
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
                        <a class="nav-link link text-info display-4" href="index.html">
                            Home
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link link text-info display-4" href="#features05-r">Live Demo</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link link text-info display-4" href="#article04-u">
                            Live Demo Blocks</a>
                    </li></ul>
                <div class="mbr-section-btn-main" role="tablist"><a class="btn btn-info display-4" href="http://my.mobirise.com/buy.php?p=НОМЕР_ТОВАРА">
                        Buy now
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
                media: `<img src="templates/4aecd04a/preview/0cd3.png" />`,
            })

            domComponents.addType('section2', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="header01 replym5 cid-u8jgKw2eZA" id="header01-x">
    

    
    

    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-6 card">
                <div class="content-wrapper">
                    <h1 class="mbr-section-title mbr-fonts-style display-1">
                        <strong>ReplyM5 Theme</strong>
                    </h1>
                    <div class="text-wrapper">
						<p class="mbr-text mbr-fonts-style display-7">
							In the dynamic landscape of marketing, staying ahead requires more than just creativity.
						</p>
					</div>
                    <div class="mbr-section-btn">
                        <a class="btn btn-info display-4" href="https://mobiri.se">
                            <span class="mobi-mbri mobi-mbri-sun2 mbr-iconfont mbr-iconfont-btn"></span>
                            Get started
                        </a>
                        <a class="btn btn-info-outline display-4" href="https://mobiri.se">
                            Contact now
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-6 card">
                <div class="image-wrapper">
					<img src="templates/4aecd04a/img/c00f.jpeg" alt="Mobirise Website Builder">
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
                media: `<img src="templates/4aecd04a/preview/9a0f.png" />`,
            })

            domComponents.addType('section3', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="header02 replym5 cid-u8jgKGTOtU mbr-fullscreen" id="header02-y">
    

    
    

    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-6">
                <div class="content-wrapper">
                    <h1 class="mbr-section-title mbr-fonts-style display-2">
                        <strong>Online <br> sales promotion</strong>
                    </h1>
                    <div class="text-wrapper">
                        <p class="mbr-text mbr-fonts-style display-4">
                            Online sales promotion involves utilizing various marketing strategies to encourage
                            customers to
                            make purchases through digital channels. This can include discounts, coupons, flash sales.
                        </p>
                    </div>
                    <div class="mbr-section-btn">
                        <a class="btn btn-primary display-4" href="https://mobiri.se">
                            Get started
                        </a>
                        <a class="btn btn-primary-outline display-4" href="https://mobiri.se">
                            Contact now
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-6 card">
                <div class="card-wrapper">
                    <div class="title-wrap">
                        <h4 class="card-title mbr-fonts-style display-4">
                            <strong>Implementing sales</strong>
                        </h4>
                    </div>
                    <h4 class="card-text mbr-fonts-style display-4">
                        "As a seasoned marketer, I've witnessed firsthand the impact of online sales promotion on
                        driving
                        revenue and customer engagement. The versatility of digital platforms allows businesses to
                        deploy a wide array of promotional tactics."
                    </h4>
                    <div class="person-wrap">
                        <p class="card-name mbr-fonts-style display-4">
                            <strong>John Doe</strong>
                        </p>
                        <p class="card-role mbr-fonts-style display-4">
                            Marketing Manager
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <img class="main-image" src="templates/4aecd04a/img/3382.jpeg" alt="Mobirise Website Builder">
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
                media: `<img src="templates/4aecd04a/preview/16e2.png" />`,
            })

            domComponents.addType('section4', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="features01 replym5 cid-u8jgKRPEZ5" id="features01-z">
    

    
    

    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="title-wrapper">
                    <h2 class="mbr-section-title mbr-fonts-style display-1">
                        <strong>Power of interaction</strong>
                    </h2>
                    <div class="subtitle-wrapper">
                        <h3 class="mbr-section-subtitle mbr-fonts-style display-5">
                            #UNLOCKING
                        </h3>
                    </div>
                    <div class="buttons-wrap">
                        <div class="mbr-section-btn">
                            <a class="btn btn-primary display-4" href="https://mobiri.se">
                                <span class="mobi-mbri mobi-mbri-sun2 mbr-iconfont mbr-iconfont-btn"></span>
                                Start now
                            </a>
                            <a class="btn btn-primary-outline display-4" href="https://mobiri.se">
                                Contact now
                            </a>
                        </div>
                    </div>
                </div>
                <div class="items-wrapper">
                    <div class="item features-image">
                        <div class="item-wrapper">
                            <div class="item-img">
                                <img src="templates/4aecd04a/img/54b6.jpeg" alt="Mobirise Website Builder" title="">
                            </div>
                            <div class="item-content">
                                <h4 class="item-title mbr-fonts-style display-2">
                                    <strong>Training</strong>
                                </h4>
                                <p class="item-number mbr-fonts-style display-4">
                                    <strong>01 /</strong>
                                </p>
                                <p class="item-text mbr-fonts-style display-4">
                                    The journey begins with onboarding your AI marketing assistant. This involves
                                    familiarizing yourself with its capabilities, interface, and functionalities. Take
                                    the time to explore the assistant's features, understand its data sources, and
                                    customize settings to align with your business objectives.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="item features-image">
                        <div class="item-wrapper">
                            <div class="item-img">
                                <img src="templates/4aecd04a/img/2215.jpeg" alt="Mobirise Website Builder" title="">
                            </div>
                            <div class="item-content">
                                <h4 class="item-title mbr-fonts-style display-2">
                                    <strong>Integration</strong>
                                </h4>
                                <p class="item-number mbr-fonts-style display-4">
                                    <strong>02 /</strong>
                                </p>
                                <p class="item-text mbr-fonts-style display-4">
                                    Integrate relevant data sources such as customer relationship management (CRM)
                                    systems, social media platforms, website analytics, and email marketing tools with
                                    the AI assistant. This ensures that the assistant has access to accurate data for
                                    analysis and decision-making.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="item features-image">
                        <div class="item-wrapper">
                            <div class="item-img">
                                <img src="templates/4aecd04a/img/4e28.jpeg" alt="Mobirise Website Builder" title="">
                            </div>
                            <div class="item-content">
                                <h4 class="item-title mbr-fonts-style display-2">
                                    <strong>Analysis</strong>
                                </h4>
                                <p class="item-number mbr-fonts-style display-4">
                                    <strong>03 /</strong>
                                </p>
                                <p class="item-text mbr-fonts-style display-4">
                                    Leverage the AI assistant's analytical capabilities to gather insights from
                                    marketing campaigns. Monitor key performance indicators (KPIs) such as conversion
                                    rates, click-through rates, and return on investment (ROI) to assess campaign
                                    effectiveness.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="item features-image">
                        <div class="item-wrapper">
                            <div class="item-img">
                                <img src="templates/4aecd04a/img/3fe8.jpeg" alt="Mobirise Website Builder" title="">
                            </div>
                            <div class="item-content">
                                <h4 class="item-title mbr-fonts-style display-2">
                                    <strong>Optimization</strong>
                                </h4>
                                <p class="item-number mbr-fonts-style display-4">
                                    <strong>04 /</strong>
                                </p>
                                <p class="item-text mbr-fonts-style display-4">
                                    Based on the insights gathered, collaborate with the AI assistant to optimize
                                    marketing campaigns in real-time. This may involve adjusting targeting parameters,
                                    refining messaging, or reallocating budget allocations to high-performing channels.
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

            blockManager.add('section4', {
                label: 'Section 4',
                category: 'Sections',
                content: {
                    type: 'section4',
                },
                media: `<img src="templates/4aecd04a/preview/2c13.png" />`,
            })

            domComponents.addType('section5', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="features02 replym5 cid-u8jgL4jkZg" id="features02-10">
    

    
    

    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="title-wrapper">
                    <div class="subtitle-wrapper">
                        <h3 class="mbr-section-subtitle mbr-fonts-style display-5">
                            PLATFORM
                        </h3>
                    </div>
                    <h2 class="mbr-section-title mbr-fonts-style display-1">
                        <strong>Highly online sales promotion</strong>
                    </h2>
                </div>
            </div>
            <div class="col-12 col-lg-6">
                <div class="items-wrapper">
                    <div class="item features-without-image">
                        <div class="item-wrapper">
                            <div class="card-box">
                                <div class="icon-wrapper">
                                    <span class="mbr-iconfont socicon-facebook socicon"></span>
                                </div>
                                <h4 class="item-title mbr-fonts-style display-4">
                                    Facebook
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div class="item features-without-image">
                        <div class="item-wrapper">
                            <div class="card-box">
                                <div class="icon-wrapper">
                                    <span class="mbr-iconfont socicon-instagram socicon"></span>
                                </div>
                                <h4 class="item-title mbr-fonts-style display-4">
                                    Instagram
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div class="item features-without-image">
                        <div class="item-wrapper">
                            <div class="card-box">
                                <div class="icon-wrapper">
                                    <span class="mbr-iconfont socicon-pinterest socicon"></span>
                                </div>
                                <h4 class="item-title mbr-fonts-style display-4">
                                    Pinterest
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div class="item features-without-image">
                        <div class="item-wrapper">
                            <div class="card-box">
                                <div class="icon-wrapper">
                                    <span class="mbr-iconfont socicon-amazon socicon"></span>
                                </div>
                                <h4 class="item-title mbr-fonts-style display-4">
                                    Amazon
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div class="item features-without-image">
                        <div class="item-wrapper">
                            <div class="card-box">
                                <div class="icon-wrapper">
                                    <span class="mbr-iconfont socicon-ebay socicon"></span>
                                </div>
                                <h4 class="item-title mbr-fonts-style display-4">
                                    eBay
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div class="item features-without-image">
                        <div class="item-wrapper">
                            <div class="card-box">
                                <div class="icon-wrapper">
                                    <span class="mbr-iconfont socicon-alibaba socicon"></span>
                                </div>
                                <h4 class="item-title mbr-fonts-style display-4">
                                    Alibaba
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div class="item features-without-image">
                        <div class="item-wrapper">
                            <div class="card-box">
                                <div class="icon-wrapper">
                                    <span class="mbr-iconfont socicon-youtube socicon"></span>
                                </div>
                                <h4 class="item-title mbr-fonts-style display-4">
                                    YouTube
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div class="item features-without-image">
                        <div class="item-wrapper">
                            <div class="card-box">
                                <div class="icon-wrapper">
                                    <span class="mbr-iconfont socicon-tiktok socicon"></span>
                                </div>
                                <h4 class="item-title mbr-fonts-style display-4">
                                    TikTok
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-6 card">
                <div class="text-wrapper">
                    <p class="mbr-text mbr-fonts-style display-7">
                        These platforms allow businesses to engage with their target audience through visually appealing
                        content, targeted ads, and interactive features like polls.
                    </p>
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
                media: `<img src="templates/4aecd04a/preview/8477.png" />`,
            })

            domComponents.addType('section6', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="features03 replym5 cid-u8jgLvC14S" id="features03-11">
    

    
    

    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-5 item features-without-image">
                <div class="item-wrapper">
                    <div class="card-box">
                        <p class="item-emoji mbr-fonts-style display-2">
                           🧐
                        </p>
                        <h4 class="item-title mbr-fonts-style display-4">
                            <strong>Advanced Data Analytics</strong>
                        </h4>
                        <p class="item-text mbr-fonts-style display-4">
                            One of the main features of an AI marketing assistant is its advanced data analytics
                            capabilities. AI assistant can analyze vast amounts of data from various sources.
                            <br><br>
                            This analysis provides valuable insights into customer preferences, trends, and
                            patterns, enabling marketers to make data-driven.
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-5 item features-without-image">
                <div class="item-wrapper">
                    <div class="card-box">
                        <p class="item-emoji mbr-fonts-style display-2">
                            🤔
                        </p>
                        <h4 class="item-title mbr-fonts-style display-4">
                            <strong>Automation and Personalization</strong>
                        </h4>
                        <p class="item-text mbr-fonts-style display-4">
                            Another key feature of an AI marketing assistant is its automation and
                            personalization capabilities.
                            <br><br>
                            This automation not only saves marketers time and resources but also ensures
                            consistent and timely communication with customers across multiple channels.
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-10">
                <div class="mbr-section-btn">
                    <a class="btn btn-primary display-4" href="https://mobiri.se">
                        <span class="mobi-mbri mobi-mbri-sun2 mbr-iconfont mbr-iconfont-btn"></span>
                        Read more
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
                media: `<img src="templates/4aecd04a/preview/205c.png" />`,
            })

            domComponents.addType('section7', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="features04 replym5 cid-u8jgLTbkvd" id="features04-12">
    

    
    

    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-4 item features-without-image">
                <div class="item-wrapper">
                    <div class="card-box">
                        <h4 class="item-title mbr-fonts-style display-4">
                            <strong>Retail Industry</strong>
                        </h4>
                        <div class="list-wrapper">
                            <ul class="list mbr-fonts-style display-4">
                                <li class="item-wrap"><strong>20%</strong> discount </li>
                                <li class="item-wrap"><strong>30%</strong> increase in sales </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-4 item features-without-image">
                <div class="item-wrapper">
                    <div class="card-box">
                        <h4 class="item-title mbr-fonts-style display-4">
                            <strong>Hospitality Industry</strong>
                        </h4>
                        <div class="list-wrapper">
                            <ul class="list mbr-fonts-style display-4">
                                <li class="item-wrap"><strong>50%</strong> off room rates</li>
                                <li class="item-wrap"><strong>80%</strong> occupancy rate </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-4 item features-without-image">
                <div class="item-wrapper">
                    <div class="card-box">
                        <h4 class="item-title mbr-fonts-style display-4">
                            <strong>Technology Industry</strong>
                        </h4>
                        <div class="list-wrapper">
                            <ul class="list mbr-fonts-style display-4">
                                <li class="item-wrap"><strong>50%</strong> increase in pre-orders</li>
                                <li class="item-wrap"><strong>$10 million</strong> in revenue</li>
                            </ul>
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

            blockManager.add('section7', {
                label: 'Section 7',
                category: 'Sections',
                content: {
                    type: 'section7',
                },
                media: `<img src="templates/4aecd04a/preview/9128.png" />`,
            })

            domComponents.addType('section8', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="features05 replym5 cid-u8jgMeCWwB" id="features05-13">
    

    
    

    <div class="container">
        <div class="row">
            <div class="col-12 item">
                <div class="title-wrapper">
                    <h2 class="mbr-section-title mbr-fonts-style display-1">
                        <strong>Events related <br> to online sales</strong>
                    </h2>
                </div>
            </div>
            <div class="col-12 col-lg-4 item features-image">
                <div class="item-wrapper">
                    <div class="item-img">
                        <img src="templates/4aecd04a/img/c91d.jpeg" alt="Mobirise Website Builder" title="">
                        <p class="item-text mbr-fonts-style display-4">
                            Black Friday and Cyber Monday are major shopping events that occur annually, typically
                            following Thanksgiving in the United States.
                        </p>
                    </div>
                    <div class="item-content">
                        <div class="mbr-section-btn">
                            <a class="btn btn-secondary-outline display-4" href="https://mobiri.se">
                                <span class="mobi-mbri mobi-mbri-right mbr-iconfont mbr-iconfont-btn"></span>
                                View more
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-4 item features-image">
                <div class="item-wrapper">
                    <div class="item-img">
                        <img src="templates/4aecd04a/img/fa3c.jpeg" alt="Mobirise Website Builder" title="">
                        <p class="item-text mbr-fonts-style display-4">
                            Throughout the year, online retailers capitalize on seasonal events such as Valentine's Day,
                            Mother's Day, Back-to-School season, and Halloween to run targeted sales promotions.
                        </p>
                    </div>
                    <div class="item-content">
                        <div class="mbr-section-btn">
                            <a class="btn btn-secondary-outline display-4" href="https://mobiri.se">
                                <span class="mobi-mbri mobi-mbri-right mbr-iconfont mbr-iconfont-btn"></span>
                                View more
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-4 item features-image">
                <div class="item-wrapper">
                    <div class="item-img">
                        <img src="templates/4aecd04a/img/4dd6.jpeg" alt="Mobirise Website Builder" title="">
                        <p class="item-text mbr-fonts-style display-4">
                            Flash sales and limited-time offers create a sense of urgency and exclusivity, encouraging
                            customers to make purchases quickly.
                        </p>
                    </div>
                    <div class="item-content">
                        <div class="mbr-section-btn">
                            <a class="btn btn-secondary-outline display-4" href="https://mobiri.se">
                                <span class="mobi-mbri mobi-mbri-right mbr-iconfont mbr-iconfont-btn"></span>
                                View more
                            </a>
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
                media: `<img src="templates/4aecd04a/preview/d751.png" />`,
            })

            domComponents.addType('section9', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="article01 replym5 cid-u8jgMBfDLS" id="article01-14">
    

    
    

    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-6 card">
                <div class="card-wrapper">
                    <div class="image-wrapper">
                        <img src="templates/4aecd04a/img/3e12.jpeg" alt="Mobirise">
                        <p class="card-desc mbr-fonts-style display-4">
                            <strong>Marketing</strong>
                        </p>
                    </div>
                    <div class="card-wrap">
                        <p class="card-text mbr-fonts-style display-4">
                            "One of the standout features of the AI Marketing Assistant is its intuitive user interface,
                            which makes navigating the platform a breeze."
                        </p>
                        <div class="person-wrap">
                            <p class="card-name mbr-fonts-style display-4">
                                <strong>Emily Saunders</strong>
                            </p>
                            <p class="card-role mbr-fonts-style display-4">
                                Senior Marketing Strategist
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-6 card">
                <div class="title-wrapper">
                    <h3 class="mbr-section-subtitle mbr-fonts-style display-7">
                        <strong>Review</strong>
                    </h3>
                    <h2 class="mbr-section-title mbr-fonts-style display-1">
                        <strong>Efforts</strong>
                    </h2>
                </div>
                <div class="text-wrapper">
                    <p class="mbr-text mbr-fonts-style display-4">
                        Enter the AI Marketing Assistant, a revolutionary tool designed to streamline and enhance
                        marketing efforts across various platforms. Having had the opportunity to explore its
                        capabilities, I'm excited to share my insights and experiences.
                    </p>
                    <div class="mbr-section-btn">
                        <a class="btn btn-primary display-4" href="https://mobiri.se">
                            <span class="mobi-mbri mobi-mbri-sun2 mbr-iconfont mbr-iconfont-btn"></span>
                            View more
                        </a>
                        <a class="btn btn-primary-outline display-4" href="https://mobiri.se">
                            Contact now
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

            blockManager.add('section9', {
                label: 'Section 9',
                category: 'Sections',
                content: {
                    type: 'section9',
                },
                media: `<img src="templates/4aecd04a/preview/9886.png" />`,
            })

            domComponents.addType('section10', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="article02 replym5 cid-u8jgMZ8s15" id="article02-15">
    

    
    

    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-6 card">
                <div class="title-wrapper">
                    <h2 class="mbr-section-title mbr-fonts-style display-5">
                        #CHANNEL
                    </h2>
                </div>
            </div>
            <div class="col-12 col-lg-6 card">
                <div class="text-wrapper">
                    <p class="mbr-text mbr-fonts-style display-7">
                        This includes leveraging digital marketing strategies and tactics to attract potential customers,
                        stimulate their interest, and ultimately drive them towards making a purchase decision.
                    </p>
                    <div class="mbr-section-btn">
                        <a class="btn btn-primary display-4" href="https://mobiri.se">
                            Get started
                        </a>
                    </div>
                    <p class="mbr-desc mbr-fonts-style display-4">
                        To create awareness about products or services.
                    </p>
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
                media: `<img src="templates/4aecd04a/preview/56f4.png" />`,
            })

            domComponents.addType('section11', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="article03 replym5 cid-u8jgNlLagH mbr-parallax-background" id="article03-16">
    

    
    <div class="mbr-overlay" style="opacity: 0.4; background-color: rgb(106, 43, 233);"></div>

    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="title-wrapper">
                    <h2 class="mbr-section-title mbr-fonts-style display-1">
                        <strong>Empower Your Marketing with AI Precision</strong>
                    </h2>
                    <div class="mbr-section-btn">
                        <a class="btn btn-success display-7" href="https://mobiri.se">
                            <span class="mobi-mbri mobi-mbri-sun2 mbr-iconfont mbr-iconfont-btn"></span>
                            Start now
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
                media: `<img src="templates/4aecd04a/preview/4d3b.png" />`,
            })

            domComponents.addType('section12', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="article04 replym5 cid-u8jgNGUc93" id="article04-17">
    

    
    

    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-8">
                <div class="title-wrapper">
                    <h2 class="mbr-section-title mbr-fonts-style display-1">
                        <strong>The main factor driving online sales is comfort</strong>
                    </h2>
                </div>
            </div>
            <div class="col-12 col-lg-4">
                <div class="image-wrapper">
                    <img src="templates/4aecd04a/img/2adc.jpeg" alt="Mobirise Website Builder">
                </div>
            </div>
            <div class="col-12 col-lg-7 card">
                <div class="mbr-section-btn">
                    <a class="btn btn-info display-4" href="https://mobiri.se">
                        Start now
                    </a>
                    <a class="btn btn-info-outline display-4" href="https://mobiri.se">
                        Contact now
                    </a>
                </div>
            </div>
            <div class="col-12 col-lg-5 card">
                <div class="text-wrapper">
                    <p class="mbr-text mbr-fonts-style display-7">
                        Overall, convenience is the driving force behind online sales, offering consumers a hassle-free
                        shopping experience that saves time, provides access to a wider selection of products.
                    </p>
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
                media: `<img src="templates/4aecd04a/preview/7516.png" />`,
            })

            domComponents.addType('section13', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="article05 replym5 cid-u8jgO3FqkV" id="article05-18">
    

    
    

    <div class="container">
        <div class="row flex-row-reverse">
            <div class="col-12 card">
                <div class="title-wrapper">
                    <div class="subtitle-wrapper">
                        <h3 class="mbr-section-subtitle mbr-fonts-style display-5">
                            SUCCESS
                        </h3>
                    </div>
                    <h2 class="mbr-section-title mbr-fonts-style display-1">
                        <strong>Chatbots for Customer Support</strong>
                    </h2>
                </div>
            </div>
            <div class="col-12 col-lg-4 card">
                <div class="list-wrapper">
                    <ul class="list mbr-fonts-style display-4">
                        <li class="item-wrap">
                            By offering round-the-clock assistance, businesses enhance the customer
                            experience and streamline the sales process.
                        </li>
                        <li class="item-wrap">
                            These chatbots use natural language processing (NLP) algorithms to
                            understand and respond to customer inquiries.
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-12 col-lg-4 card">
                <div class="content-wrapper">
                    <p class="mbr-text mbr-fonts-style display-4">
                        Companies across various industries employ AI-powered chatbots to provide instant customer
                        support.
                    </p>
                    <div class="list-wrapper">
                        <ul class="list mbr-fonts-style display-4">
                            <li class="item-wrap">
                                Airlines and hotels utilize AI-driven pricing optimization tools to adjust prices
                                dynamically based on factors like demand, competition, and market trends.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-4 card">
                <div class="tag-wrapper_1">
                    <p class="mbr-tag mbr-fonts-style display-4">
                        <strong>Round-the-clock</strong>
                    </p>
                </div>
            </div>
            <div class="col-12 col-lg-8">
                <div class="mbr-section-btn">
                    <a class="btn btn-primary display-4" href="https://mobiri.se">
                        <span class="mobi-mbri mobi-mbri-sun2 mbr-iconfont mbr-iconfont-btn"></span>
                        View more
                    </a>
                </div>
            </div>
            <div class="col-12 col-lg-8 card">
                <div class="tag-wrapper_2">
                    <p class="mbr-tag mbr-fonts-style display-4">
                        <strong>Businesses enhance</strong>
                    </p>
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
                media: `<img src="templates/4aecd04a/preview/5526.png" />`,
            })

            domComponents.addType('section14', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="article06 replym5 cid-u8jgOpMK5F" id="article06-19">
    

    
    

    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="title-wrapper">
                    <div class="subtitle-wrapper">
                        <h3 class="mbr-section-subtitle mbr-fonts-style display-5">
                            ANALYSIS
                        </h3>
                    </div>
                    <h2 class="mbr-section-title mbr-fonts-style display-1">
                        <strong>Target Audience</strong>
                    </h2>
                </div>
            </div>
            <div class="col-12 col-lg-6">
                <div class="image-wrapper">
                    <img src="templates/4aecd04a/img/062b.jpeg" alt="Mobirise Website Builder">
                </div>
            </div>
            <div class="col-12 col-lg-6 card">
                <div class="content-wrapper">
                    <div class="person-wrap">
                        <div class="image-wrap">
                            <img src="templates/4aecd04a/img/01dc.jpeg" alt="Mobirise">
                        </div>
                        <p class="mbr-name mbr-fonts-style display-4">
                            <strong>Gary Gordon</strong>
                        </p>
                        <p class="mbr-role mbr-fonts-style display-4">
                            Sales analyst
                        </p>
                    </div>
                    <div class="text-wrapper">
                        <p class="mbr-text mbr-fonts-style display-4">
                            "Whether it's increasing sales, clearing out inventory, attracting new customers, or boosting
                            brand awareness, setting specific and measurable goals is crucial for guiding the entire
                            process."
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

            blockManager.add('section14', {
                label: 'Section 14',
                category: 'Sections',
                content: {
                    type: 'section14',
                },
                media: `<img src="templates/4aecd04a/preview/351a.png" />`,
            })

            domComponents.addType('section15', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="article07 replym5 cid-u8jgOM5S7q" id="article07-1a">
    

    
    

    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-6">
                <div class="image-wrapper">
                    <img src="templates/4aecd04a/img/4805.jpeg" alt="Mobirise Website Builder">
                </div>
            </div>
            <div class="col-12 col-lg-6 card">
                <div class="title-wrapper">
                    <div class="subtitle-wrapper">
                        <h3 class="mbr-section-subtitle mbr-fonts-style display-4">
                            <strong>Event</strong>
                        </h3>
                    </div>
                    <h2 class="mbr-section-title mbr-fonts-style display-5">
                        <strong>AI Marketing <br> Summit</strong>
                    </h2>
                </div>
                <p class="mbr-desc mbr-fonts-style display-4">
                    By Amy Jackson - April 04, 2030
                </p>
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
                media: `<img src="templates/4aecd04a/preview/9b8f.png" />`,
            })

            domComponents.addType('section16', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="article08 replym5 cid-u8jgPcmSzh" id="article08-1b">
    

    
    

    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-6">
                <div class="title-wrapper">
                    <div class="subtitle-wrapper">
                        <h3 class="mbr-section-subtitle mbr-fonts-style display-4">
                            <strong>SPECIALIST</strong>
                        </h3>
                    </div>
                    <h2 class="mbr-section-title mbr-fonts-style display-1">
                        <strong>Meet <br> Sara Ball</strong>
                    </h2>
                    <p class="mbr-text mbr-fonts-style display-4">
                        <strong>Online Sales Promotion Specialist</strong> with a passion for driving revenue and engaging
                        customers through strategic promotional campaigns. <br><br>
                        With years of experience in digital marketing and a
                        keen eye for consumer behavior, Sarah excels at crafting compelling offers and executing
                        targeted promotions that deliver results.
                    </p>
                </div>
            </div>
            <div class="col-12 col-lg-5">
                <div class="card-wrapper">
                    <div class="image-wrapper">
                        <img src="templates/4aecd04a/img/9f1b.jpeg" alt="Mobirise">
                    </div>
                    <p class="card-text mbr-fonts-style display-7">
                        <strong>What questions are you interested in?</strong>
                    </p>
                    <div class="mbr-section-btn">
                        <a class="btn btn-primary display-4" href="https://mobiri.se">
                            Start now
                        </a>
                        <a class="btn btn-primary display-4" href="https://mobiri.se">
                            Contact
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

            blockManager.add('section16', {
                label: 'Section 16',
                category: 'Sections',
                content: {
                    type: 'section16',
                },
                media: `<img src="templates/4aecd04a/preview/b8d4.png" />`,
            })

            domComponents.addType('section17', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="video01 replym5 cid-u8jgPyYmmo" id="video01-1c">
    

    
    

    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-7">
                <div class="title-wrapper">
                    <div class="subtitle-wrapper">
                        <h3 class="mbr-section-subtitle mbr-fonts-style display-5">
                            #ONLINE
                        </h3>
                    </div>
                    <h2 class="mbr-section-title mbr-fonts-style display-1">
                        <strong>Unlock Success</strong>
                    </h2>
                </div>
            </div>
            <div class="col-12 col-lg-7">
                <div class="text-wrapper">
                    <p class="mbr-text mbr-fonts-style display-7">
                        Whether you're a budding e-commerce entrepreneur or a seasoned online retailer, harnessing the
                        power of promotions can propel your business to new heights of success.
                    </p>
                    <div class="mbr-section-btn">
                        <a class="btn btn-primary display-4" href="https://mobiri.se">
                            <span class="mobi-mbri mobi-mbri-sun2 mbr-iconfont mbr-iconfont-btn"></span>
                            Get started
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-5">
                <div class="box">
                    <div class="mbr-media show-modal align-center" data-modal=".modalWindow">
                        <div class="icon-wrap">
                            <span class="mbr-iconfont mobi-mbri-play mobi-mbri"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="decor-wrap"></div>
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

            blockManager.add('section17', {
                label: 'Section 17',
                category: 'Sections',
                content: {
                    type: 'section17',
                },
                media: `<img src="templates/4aecd04a/preview/05e2.png" />`,
            })

            domComponents.addType('section18', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="form01 replym5 cid-u8jgPU4tmr" id="form01-1d">
    

    
    

    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-6 card">
                <div class="mbr-form form-wrapper" data-form-type="formoid">
                    <form action="https://mobirise.eu/" method="POST" class="mbr-form form-with-styler" data-form-title="Form Name"><input type="hidden" name="email" data-form-email="true" value="auX3sek3y+MILSGtBRkdoKui8vzsWZV70LzxyZmcMgq7vuP+LrayyYi7WOBC0/SReLRlAkjz9PP52kc6gKkbqSNMJe9a8EuJdgHUObUQvWOKHdbgjDqwUL4q5wl2BL6N.DfC/GGJ/32qQTCbtWQN+szmULp2z9pXK5ZQVPh5OGIG1p2tzeyWHvS7/v064LpsUBzDSC7BILzIBOUb8Zc2qwSSROU/WGVkqUL1dh9URCTrjBf8L8ihi6+RS52Jd9PHu">
                        <div class="row">
                            <div hidden="hidden" data-form-alert="" class="alert alert-success col-12">Thanks for filling
                                out the form!</div>
                            <div hidden="hidden" data-form-alert-danger="" class="alert alert-danger col-12"> Oops...! some
                                problem!
                            </div>
                        </div>
                        <div class="dragArea row">
                            <div class="col-lg-12 col-md-12 col-sm-12">
                                <h6 class="mbr-section-title mbr-fonts-style display-4">
                                    <strong>Get in touch:</strong>
                                </h6>
                            </div>
                            <div class="col-lg-12 col-md-12 col-sm-12">
                                <p class="mbr-text mbr-fonts-style display-4">
                                    We'll get back to you quickly and help you out!
                                </p>
                            </div>
                            <div class="col-lg-12 col-md-12 col-sm-12 form-group mb-3 mb-3 mb-3" data-for="text">
                                <input type="text" name="text" placeholder="Your full name" data-form-field="text" class="form-control display-7" value="" id="text-form01-1d">
                            </div>
                            <div class="col-lg-12 col-md-12 col-sm-12 form-group mb-3 mb-3 mb-3 mb-3" data-for="email">
                                <input type="email" name="email" placeholder="Enter your email" data-form-field="email" class="form-control display-7" value="" id="email-form01-1d">
                            </div>
                            <div class="col mbr-section-btn"><button type="submit" class="btn btn-primary display-4"><span class="mobi-mbri mobi-mbri-sun2 mbr-iconfont mbr-iconfont-btn"></span> Send now </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="col-12 col-lg-6 card">
                <div class="social-wrapper">
                    <div class="social-wrap">
                        <div class="soc-item">
                            <a href="https://mobiri.se/">
                                <span class="mbr-iconfont socicon socicon-linkedin"></span>
                            </a>
                        </div>
                        <div class="soc-item">
                            <a href="https://mobiri.se/">
                                <span class="mbr-iconfont socicon socicon-instagram"></span>
                            </a>
                        </div>
                        <div class="soc-item">
                            <a href="https://mobiri.se/">
                                <span class="mbr-iconfont socicon socicon-facebook"></span>
                            </a>
                        </div>
                        <div class="soc-item">
                            <a href="https://mobiri.se/">
                                <span class="mbr-iconfont socicon socicon-tiktok"></span>
                            </a>
                        </div>
                        <div class="soc-item">
                            <a href="https://mobiri.se/">
                                <span class="mbr-iconfont socicon socicon-youtube"></span>
                            </a>
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
                media: `<img src="templates/4aecd04a/preview/211f.png" />`,
            })

            domComponents.addType('section19', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="list01 replym5 cid-u8jgQto3Yb" id="list01-1e">
    

    
    

    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-10">
                <div class="title-wrapper">
                    <h3 class="mbr-section-title mbr-fonts-style display-4">
                        <strong>FAQ</strong>
                    </h3>
                </div>
                <div id="bootstrap-accordion_18" class="panel-group accordionStyles accordion" role="tablist" aria-multiselectable="true">
                    <div class="card">
                        <div class="card-header" role="tab" id="headingOne">
                            <a role="button" class="panel-title collapsed" data-toggle="collapse" data-bs-toggle="collapse" data-core="" href="#collapse1_18" aria-expanded="false" aria-controls="collapse1">
                                <h4 class="panel-title-edit mbr-fonts-style display-7">
                                    <strong>Why is online sales promotion important?</strong>
                                </h4>
                                <div class="icon-wrapper">
                                    <span class="sign mbr-iconfont mobi-mbri-plus mobi-mbri"></span>
                                </div>
                            </a>
                        </div>
                        <div id="collapse1_18" class="panel-collapse noScroll collapse" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion" data-bs-parent="#bootstrap-accordion_18">
                            <div class="panel-body">
                                <p class="mbr-fonts-style panel-text display-4">
                                    Online sales promotion is important for businesses because it helps drive traffic to
                                    their websites, increase conversion rates, boost sales revenue, and build brand
                                    awareness in the competitive digital marketplace. It allows companies to engage with
                                    customers directly, incentivize purchases, and differentiate themselves from
                                    competitors.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" role="tab" id="headingTwo">
                            <a role="button" class="panel-title collapsed" data-toggle="collapse" data-bs-toggle="collapse" data-core="" href="#collapse2_18" aria-expanded="false" aria-controls="collapse2">
                                <h4 class="panel-title-edit mbr-fonts-style display-7">
                                    <strong>What types of online sales promotion tactics are commonly used?</strong>
                                </h4>
                                <div class="icon-wrapper">
                                    <span class="sign mbr-iconfont mobi-mbri-plus mobi-mbri"></span>
                                </div>
                            </a>
                        </div>
                        <div id="collapse2_18" class="panel-collapse noScroll collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion" data-bs-parent="#bootstrap-accordion_18">
                            <div class="panel-body">
                                <p class="mbr-fonts-style panel-text display-4">
                                    Common online sales promotion tactics include discounts, coupons, flash sales,
                                    loyalty programs, free shipping offers, referral incentives, contests, giveaways,
                                    and bundle deals. These tactics aim to create a sense of urgency, exclusivity, and
                                    value for customers, driving them to make purchases online.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" role="tab" id="headingThree">
                            <a role="button" class="panel-title collapsed" data-toggle="collapse" data-bs-toggle="collapse" data-core="" href="#collapse3_18" aria-expanded="false" aria-controls="collapse3">
                                <h4 class="panel-title-edit mbr-fonts-style display-7">
                                    <strong>How do I measure the effectiveness of online sales promotions?</strong>
                                </h4>
                                <div class="icon-wrapper">
                                    <span class="sign mbr-iconfont mobi-mbri-plus mobi-mbri"></span>
                                </div>
                            </a>
                        </div>
                        <div id="collapse3_18" class="panel-collapse noScroll collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion" data-bs-parent="#bootstrap-accordion_18">
                            <div class="panel-body">
                                <p class="mbr-fonts-style panel-text display-4">
                                    The effectiveness of online sales promotions can be measured using various key
                                    performance indicators (KPIs) such as website traffic, conversion rates, average
                                    order value, sales revenue, customer acquisition cost, and return on investment
                                    (ROI). Additionally, tracking customer engagement metrics, such as click-through
                                    rates and social media interactions, can provide insights into the impact of
                                    promotions on audience engagement.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" role="tab" id="headingFour">
                            <a role="button" class="panel-title collapsed" data-toggle="collapse" data-bs-toggle="collapse" data-core="" href="#collapse4_18" aria-expanded="false" aria-controls="collapse4">
                                <h4 class="panel-title-edit mbr-fonts-style display-7">
                                    <strong>How do I plan and execute successful online sales promotions?</strong>
                                </h4>
                                <div class="icon-wrapper">
                                    <span class="sign mbr-iconfont mobi-mbri-plus mobi-mbri"></span>
                                </div>
                            </a>
                        </div>
                        <div id="collapse4_18" class="panel-collapse noScroll collapse" role="tabpanel" aria-labelledby="headingFour" data-parent="#accordion" data-bs-parent="#bootstrap-accordion_18">
                            <div class="panel-body">
                                <p class="mbr-fonts-style panel-text display-4">
                                    Planning and executing successful online sales promotions involve conducting market
                                    research, identifying target audiences, setting clear objectives, selecting
                                    appropriate promotion tactics, creating compelling offers, deploying promotions
                                    across relevant digital channels, monitoring performance metrics in real-time, and
                                    optimizing campaigns based on data-driven insights.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" role="tab" id="headingFive">
                            <a role="button" class="panel-title collapsed" data-toggle="collapse" data-bs-toggle="collapse" data-core="" href="#collapse5_18" aria-expanded="false" aria-controls="collapse5">
                                <h4 class="panel-title-edit mbr-fonts-style display-7">
                                    <strong>What are some best practices for online sales promotions?</strong>
                                </h4>
                                <div class="icon-wrapper">
                                    <span class="sign mbr-iconfont mobi-mbri-plus mobi-mbri"></span>
                                </div>
                            </a>
                        </div>
                        <div id="collapse5_18" class="panel-collapse noScroll collapse" role="tabpanel" aria-labelledby="headingFive" data-parent="#accordion" data-bs-parent="#bootstrap-accordion_18">
                            <div class="panel-body">
                                <p class="mbr-fonts-style panel-text display-4">
                                    Some best practices for online sales promotions include offering genuine discounts
                                    and valuable incentives, clearly communicating promotion details and terms,
                                    leveraging targeted marketing tactics to reach relevant audiences, optimizing
                                    website usability and checkout processes, providing excellent customer support, and
                                    continuously testing and iterating on promotion strategies to improve results over
                                    time.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" role="tab" id="headingSix">
                            <a role="button" class="panel-title collapsed" data-toggle="collapse" data-bs-toggle="collapse" data-core="" href="#collapse6_18" aria-expanded="false" aria-controls="collapse6">
                                <h4 class="panel-title-edit mbr-fonts-style display-7">
                                    <strong>How can I avoid common pitfalls in online sales promotions?</strong>
                                </h4>
                                <div class="icon-wrapper">
                                    <span class="sign mbr-iconfont mobi-mbri-plus mobi-mbri"></span>
                                </div>
                            </a>
                        </div>
                        <div id="collapse6_18" class="panel-collapse noScroll collapse" role="tabpanel" aria-labelledby="headingSix" data-parent="#accordion" data-bs-parent="#bootstrap-accordion_18">
                            <div class="panel-body">
                                <p class="mbr-fonts-style panel-text display-4">
                                    Common pitfalls to avoid in online sales promotions include over-discounting
                                    products, misleading or confusing promotion messaging, failing to adequately prepare
                                    for increased website traffic, neglecting to track and analyze promotion
                                    performance, and not properly segmenting and targeting promotional offers to
                                    specific customer segments.
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
                media: `<img src="templates/4aecd04a/preview/fa5f.png" />`,
            })

            domComponents.addType('section20', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="tabs01 replym5 cid-u8jgQREPcn" id="tabs01-1f">
    

    
    

    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="title-wrapper">
                    <div class="subtitle-wrapper">
                        <h3 class="mbr-section-subtitle mbr-fonts-style display-5">
                            APPROACH
                        </h3>
                    </div>
                    <h2 class="mbr-section-title mbr-fonts-style display-1">
                        <strong>Tools and strategies</strong>
                    </h2>
                    <div class="text-wrapper">
                        <p class="mbr-text mbr-fonts-style display-7">
                            From enhancing the user experience to implementing effective marketing tactics, here are
                            some essential tools and techniques to boost online sales:
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-4">
                <div class="tabs-wrapper">
                    <ul class="nav nav-tabs" role="tablist">
                        <li class="nav-item first mbr-fonts-style">
                            <a class="nav-link show active display-4" role="tab" data-toggle="tab" data-bs-toggle="tab" href="#tab1" aria-selected="true">
                                <strong>E-commerce</strong>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mbr-fonts-style display-4" role="tab" data-toggle="tab" data-bs-toggle="tab" href="#tab2" aria-selected="true">
                                <strong>SEO Tools</strong>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mbr-fonts-style display-4" role="tab" data-toggle="tab" data-bs-toggle="tab" href="#tab3" aria-selected="true">
                                <strong>Social Media</strong>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mbr-fonts-style display-4" role="tab" data-toggle="tab" data-bs-toggle="tab" href="#tab4" aria-selected="true">
                                <strong>Email Marketing</strong>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mbr-fonts-style display-4" role="tab" data-toggle="tab" data-bs-toggle="tab" href="#tab5" aria-selected="true">
                                <strong>CMS</strong>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mbr-fonts-style display-4" role="tab" data-toggle="tab" data-bs-toggle="tab" href="#tab6" aria-selected="true">
                                <strong>Analytics Tools</strong>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-12 col-lg-8">
                <div class="tab-content">
                    <div id="tab1" class="tab-pane in active" role="tabpanel">
                        <div class="content-wrap">
                            <div class="image-wrapper">
                                <img src="templates/4aecd04a/img/5a21.jpeg" alt="Mobirise">
                            </div>
                            <div class="text-wrap">
                                <p class="item-text mbr-fonts-style display-4">
                                    Choose a robust e-commerce platform like Shopify, WooCommerce, or Magento to create
                                    an online store that is easy to manage and offers a seamless shopping experience for
                                    customers.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div id="tab2" class="tab-pane" role="tabpanel">
                        <div class="content-wrap">
                            <div class="image-wrapper">
                                <img src="templates/4aecd04a/img/f670.jpeg" alt="Mobirise">
                            </div>
                            <div class="text-wrap">
                                <p class="item-text mbr-fonts-style display-4">
                                    Utilize search engine optimization (SEO) tools such as SEMrush, Moz, or Ahrefs to
                                    optimize your website for search engines. This includes keyword research, on-page
                                    optimization, and link building to improve your site's visibility and attract
                                    organic traffic.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div id="tab3" class="tab-pane" role="tabpanel">
                        <div class="content-wrap">
                            <div class="image-wrapper">
                                <img src="templates/4aecd04a/img/9d14.jpeg" alt="Mobirise">
                            </div>
                            <div class="text-wrap">
                                <p class="item-text mbr-fonts-style display-4">
                                    Engage with your audience and promote your products on social media platforms using
                                    tools like Hootsuite, Buffer, or Sprout Social. These tools enable you to schedule
                                    posts, track performance metrics.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div id="tab4" class="tab-pane" role="tabpanel">
                        <div class="content-wrap">
                            <div class="image-wrapper">
                                <img src="templates/4aecd04a/img/b130.jpeg" alt="Mobirise">
                            </div>
                            <div class="text-wrap">
                                <p class="item-text mbr-fonts-style display-4">
                                    Build and nurture relationships with your customers through email marketing
                                    platforms like Mailchimp, Constant Contact, or Klaviyo. Create targeted email
                                    campaigns, automate follow-ups.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div id="tab5" class="tab-pane" role="tabpanel">
                        <div class="content-wrap">
                            <div class="image-wrapper">
                                <img src="templates/4aecd04a/img/fa2d.jpeg" alt="Mobirise">
                            </div>
                            <div class="text-wrap">
                                <p class="item-text mbr-fonts-style display-4">
                                    Use a CMS like WordPress or Drupal to create and manage engaging content that
                                    showcases your products and educates your audience. High-quality content such as
                                    blog posts, product reviews.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div id="tab6" class="tab-pane" role="tabpanel">
                        <div class="content-wrap">
                            <div class="image-wrapper">
                                <img src="templates/4aecd04a/img/8a04.jpeg" alt="Mobirise">
                            </div>
                            <div class="text-wrap">
                                <p class="item-text mbr-fonts-style display-4">
                                    Gain insights into your website's performance and customer behavior with analytics
                                    tools such as Google Analytics, Kissmetrics, or Adobe Analytics. Monitor key metrics
                                    like traffic sources, conversion rates, and customer demographics to identify areas
                                    for improvement.
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
                media: `<img src="templates/4aecd04a/preview/8a14.png" />`,
            })

            domComponents.addType('section21', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="tabs02 replym5 cid-u8jgRdnF6j" id="tabs02-1g">
    

    
    

    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="title-wrapper">
                    <div class="subtitle-wrapper">
                        <h3 class="mbr-section-subtitle mbr-fonts-style display-5">
                            TYPES
                        </h3>
                    </div>
                    <h2 class="mbr-section-title mbr-fonts-style display-1">
                        <strong>AI marketing</strong>
                    </h2>
                    <div class="text-wrapper">
                        <p class="mbr-text mbr-fonts-style display-7">
                            These assistants leverage AI and machine learning algorithms to
                            automate tasks, analyze data, and provide insights that help marketers make informed
                            decisions.
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="tabs-wrapper">
                    <ul class="nav nav-tabs" role="tablist">
                        <li class="nav-item first mbr-fonts-style">
                            <a class="nav-link show active display-4" role="tab" data-toggle="tab" data-bs-toggle="tab" href="#tab1" aria-selected="true">
                                Chatbots
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mbr-fonts-style display-4" role="tab" data-toggle="tab" data-bs-toggle="tab" href="#tab2" aria-selected="true">
                                Engines
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mbr-fonts-style display-4" role="tab" data-toggle="tab" data-bs-toggle="tab" href="#tab3" aria-selected="true">
                                Analytics
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mbr-fonts-style display-4" role="tab" data-toggle="tab" data-bs-toggle="tab" href="#tab4" aria-selected="true">
                                Content
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-12">
                <div class="tab-content">
                    <div id="tab1" class="tab-pane in active" role="tabpanel">
                        <div class="content-wrap">
                            <div class="text-wrap card">
                                <h4 class="item-title mbr-fonts-style display-2">
                                    <strong>Chatbots</strong>
                                </h4>
                                <p class="item-text mbr-fonts-style display-4">
                                    Chatbots are AI-powered virtual assistants that interact with users through text or
                                    voice conversations. In marketing, chatbots are often used for customer service,
                                    lead generation, and personalized recommendations.
                                </p>
                            </div>
                            <div class="image-wrapper">
                                <img src="templates/4aecd04a/img/910d.jpeg" alt="Mobirise">
                            </div>
                        </div>
                    </div>
                    <div id="tab2" class="tab-pane" role="tabpanel">
                        <div class="content-wrap">
                            <div class="text-wrap card">
                                <h4 class="item-title mbr-fonts-style display-2">
                                    <strong>Person Engines</strong>
                                </h4>
                                <p class="item-text mbr-fonts-style display-4">
                                    Personalization engines use AI algorithms to analyze customer data and behavior,
                                    enabling marketers to deliver tailored content, recommendations, and offers to
                                    individual users.
                                </p>
                            </div>
                            <div class="image-wrapper">
                                <img src="templates/4aecd04a/img/4e28.jpeg" alt="Mobirise">
                            </div>
                        </div>
                    </div>
                    <div id="tab3" class="tab-pane" role="tabpanel">
                        <div class="content-wrap">
                            <div class="text-wrap card">
                                <h4 class="item-title mbr-fonts-style display-2">
                                    <strong>Analytics Platforms</strong>
                                </h4>
                                <p class="item-text mbr-fonts-style display-4">
                                    Predictive analytics platforms utilize AI and machine learning to forecast future
                                    trends, customer behavior, and marketing outcomes based on historical data.
                                </p>
                            </div>
                            <div class="image-wrapper">
                                <img src="templates/4aecd04a/img/54b6.jpeg" alt="Mobirise">
                            </div>
                        </div>
                    </div>
                    <div id="tab4" class="tab-pane" role="tabpanel">
                        <div class="content-wrap">
                            <div class="text-wrap card">
                                <h4 class="item-title mbr-fonts-style display-2">
                                    <strong>Content Creation</strong>
                                </h4>
                                <p class="item-text mbr-fonts-style display-4">
                                    AI-powered content creation tools use natural language generation (NLG) algorithms
                                    to automate the process of generating written content, such as blog posts.
                                </p>
                            </div>
                            <div class="image-wrapper">
                                <img src="templates/4aecd04a/img/bc0c.jpeg" alt="Mobirise">
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
                media: `<img src="templates/4aecd04a/preview/1825.png" />`,
            })

            domComponents.addType('section22', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="slider01 mbr-embla replym5 cid-u8jgRBjAyy" id="slider01-1h">
    
    

    <div class="container-fluid">
        <div class="row">
            <div class="col-12 col-lg-9">
                <h2 class="mbr-section-title_1 mbr-fonts-style display-1">
                    <strong>Reviews</strong>
                </h2>
            </div>
            <div class="col-12">
                <div class="embla" data-skip-snaps="true" data-align="center" data-contain-scroll="trimSnaps" data-loop="true" data-auto-play-interval="5" data-draggable="true">
                    <div class="embla__viewport">
                        <div class="embla__container">
                            <div class="embla__slide slider-image item" style="margin-left: -1rem; margin-right: -1rem;">
                                <div class="slide-content">
                                    <div class="item-wrapper">
                                        <div class="item-content">
                                            <p class="item-text mbr-fonts-style display-7">
                                                "As an e-commerce manager, I've seen firsthand the impact of online sales
                                                promotion on our bottom line."
                                            </p>
                                        </div>
                                        <div class="image-wrapper">
                                            <div class="item-img">
                                                <div class="image-wrap">
                                                    <img src="templates/4aecd04a/img/01dc.jpeg" alt="Mobirise Website Builder">
                                                </div>
                                                <div class="person-wrap">
                                                    <p class="item-name mbr-fonts-style display-4">
                                                        <strong>James Reynolds</strong>
                                                    </p>
                                                    <p class="item-role mbr-fonts-style display-4">
                                                        E-commerce Manager
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="embla__slide slider-image item" style="margin-left: -1rem; margin-right: -1rem;">
                                <div class="slide-content">
                                    <div class="item-wrapper">
                                        <div class="item-content">
                                            <p class="item-text mbr-fonts-style display-7">
                                                "In the competitive tech industry, engaging with our audience and driving
                                                conversions is paramount."
                                            </p>
                                        </div>
                                        <div class="image-wrapper">
                                            <div class="item-img">
                                                <div class="image-wrap">
                                                    <img src="templates/4aecd04a/img/866c.jpeg" alt="Mobirise Website Builder">
                                                </div>
                                                <div class="person-wrap">
                                                    <p class="item-name mbr-fonts-style display-4">
                                                        <strong>Sarah Patel</strong>
                                                    </p>
                                                    <p class="item-role mbr-fonts-style display-4">
                                                        Marketing Director
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="embla__slide slider-image item" style="margin-left: -1rem; margin-right: -1rem;">
                                <div class="slide-content">
                                    <div class="item-wrapper">
                                        <div class="item-content">
                                            <p class="item-text mbr-fonts-style display-7">
                                                "As a small business owner, competing with larger retailers can be
                                                challenging."
                                            </p>
                                        </div>
                                        <div class="image-wrapper">
                                            <div class="item-img">
                                                <div class="image-wrap">
                                                    <img src="templates/4aecd04a/img/e9e2.jpeg" alt="Mobirise Website Builder">
                                                </div>
                                                <div class="person-wrap">
                                                    <p class="item-name mbr-fonts-style display-4">
                                                        <strong>Michael Thompson</strong>
                                                    </p>
                                                    <p class="item-role mbr-fonts-style display-4">
                                                        Business Owner
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="embla__slide slider-image item" style="margin-left: -1rem; margin-right: -1rem;">
                                <div class="slide-content">
                                    <div class="item-wrapper">
                                        <div class="item-content">
                                            <p class="item-text mbr-fonts-style display-7">
                                                "Working in the fashion industry, staying ahead of trends and reaching
                                                our target audience is essential."
                                            </p>
                                        </div>
                                        <div class="image-wrapper">
                                            <div class="item-img">
                                                <div class="image-wrap">
                                                    <img src="templates/4aecd04a/img/9f1b.jpeg" alt="Mobirise Website Builder">
                                                </div>
                                                <div class="person-wrap">
                                                    <p class="item-name mbr-fonts-style display-4">
                                                        <strong>Rachel Lee</strong>
                                                    </p>
                                                    <p class="item-role mbr-fonts-style display-4">
                                                        Marketing Coordinator
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="embla__slide slider-image item" style="margin-left: -1rem; margin-right: -1rem;">
                                <div class="slide-content">
                                    <div class="item-wrapper">
                                        <div class="item-content">
                                            <p class="item-text mbr-fonts-style display-7">
                                                "As a digital marketing specialist, I've seen the power of data-driven
                                                strategies in driving results for businesses."
                                            </p>
                                        </div>
                                        <div class="image-wrapper">
                                            <div class="item-img">
                                                <div class="image-wrap">
                                                    <img src="templates/4aecd04a/img/4c85.jpeg" alt="Mobirise Website Builder">
                                                </div>
                                                <div class="person-wrap">
                                                    <p class="item-name mbr-fonts-style display-4">
                                                        <strong>David Nguyen</strong>
                                                    </p>
                                                    <p class="item-role mbr-fonts-style display-4">
                                                        Marketing Specialist
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="embla__slide slider-image item" style="margin-left: -1rem; margin-right: -1rem;">
                                <div class="slide-content">
                                    <div class="item-wrapper">
                                        <div class="item-content">
                                            <p class="item-text mbr-fonts-style display-7">
                                                "In an industry as fast-paced and competitive as fashion, it's crucial to
                                                stay ahead of the curve."
                                            </p>
                                        </div>
                                        <div class="image-wrapper">
                                            <div class="item-img">
                                                <div class="image-wrap">
                                                    <img src="templates/4aecd04a/img/3e12.jpeg" alt="Mobirise Website Builder">
                                                </div>
                                                <div class="person-wrap">
                                                    <p class="item-name mbr-fonts-style display-4">
                                                        <strong>Jessica Carter</strong>
                                                    </p>
                                                    <p class="item-role mbr-fonts-style display-4">
                                                        Marketing Manager
                                                    </p>
                                                </div>
                                            </div>
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
            <div class="col-12 col-lg-9">
                <h2 class="mbr-section-title_2 mbr-fonts-style display-1">
                    <strong>Online Sales</strong>
                </h2>
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
                media: `<img src="templates/4aecd04a/preview/5ad0.png" />`,
            })

            domComponents.addType('section23', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="slider02 mbr-embla replym5 cid-u8jgS1kglr" id="slider02-1i">
    
    

    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="content-wrapper">
                    <div class="desc-wrapper">
                        <p class="mbr-desc mbr-fonts-style display-4">
                            Partners
                        </p>
                        <span class="mbr-iconfont mobi-mbri-right mobi-mbri"></span>
                    </div>
                    <div class="embla" data-skip-snaps="true" data-align="center" data-contain-scroll="trimSnaps" data-loop="true" data-auto-play="true" data-auto-play-interval="2" data-draggable="true">
                        <div class="embla__viewport">
                            <div class="embla__container">
                                <div class="embla__slide slider-image item" style="margin-left: 2rem; margin-right: 2rem;">
                                    <div class="slide-content">
                                        <div class="item-wrapper">
                                            <div class="item-img">
                                                <img src="templates/4aecd04a/img/afa8.png" alt="Mobirise Website Builder">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="embla__slide slider-image item" style="margin-left: 2rem; margin-right: 2rem;">
                                    <div class="slide-content">
                                        <div class="item-wrapper">
                                            <div class="item-img">
                                                <img src="templates/4aecd04a/img/963e.png" alt="Mobirise Website Builder">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="embla__slide slider-image item" style="margin-left: 2rem; margin-right: 2rem;">
                                    <div class="slide-content">
                                        <div class="item-wrapper">
                                            <div class="item-img">
                                                <img src="templates/4aecd04a/img/8ec2.png" alt="Mobirise Website Builder">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="embla__slide slider-image item" style="margin-left: 2rem; margin-right: 2rem;">
                                    <div class="slide-content">
                                        <div class="item-wrapper">
                                            <div class="item-img">
                                                <img src="templates/4aecd04a/img/120c.png" alt="Mobirise Website Builder">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="embla__slide slider-image item" style="margin-left: 2rem; margin-right: 2rem;">
                                    <div class="slide-content">
                                        <div class="item-wrapper">
                                            <div class="item-img">
                                                <img src="templates/4aecd04a/img/2a7e.png" alt="Mobirise Website Builder">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="embla__slide slider-image item" style="margin-left: 2rem; margin-right: 2rem;">
                                    <div class="slide-content">
                                        <div class="item-wrapper">
                                            <div class="item-img">
                                                <img src="templates/4aecd04a/img/10ae.png" alt="Mobirise Website Builder">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="embla__slide slider-image item" style="margin-left: 2rem; margin-right: 2rem;">
                                    <div class="slide-content">
                                        <div class="item-wrapper">
                                            <div class="item-img">
                                                <img src="templates/4aecd04a/img/8ec2.png" alt="Mobirise Website Builder">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="embla__slide slider-image item" style="margin-left: 2rem; margin-right: 2rem;">
                                    <div class="slide-content">
                                        <div class="item-wrapper">
                                            <div class="item-img">
                                                <img src="templates/4aecd04a/img/120c.png" alt="Mobirise Website Builder">
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
                    <div class="mbr-section-btn">
                        <a class="btn btn-secondary display-4" href="https://mobiri.se">
                            Start now
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
                media: `<img src="templates/4aecd04a/preview/b272.png" />`,
            })

            domComponents.addType('section24', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="pricing01 replym5 cid-u8jgSvJtJb" id="pricing01-1j">
    

    
    

    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-3 col-md-6 item features-without-image">
                <div class="item-wrapper">
                    <div class="card-box">
                        <div class="title-wrapper">
                            <h4 class="item-title mbr-fonts-style display-4">
                                <strong>Starter Plan</strong>
                            </h4>
                            <p class="item-desc mbr-fonts-style display-4">
                                Per month
                            </p>
                        </div>
                        <p class="item-price mbr-fonts-style display-5">
                            <strong>$99</strong>
                        </p>
                        <div class="mbr-section-btn">
                            <a class="btn btn-primary display-4" href="https://mobiri.se">
                                Buy now
                            </a>
                        </div>
                        <div class="list-wrapper">
                            <ul class="list mbr-fonts-style display-4">
                                <li class="item-wrap">Small businesses</li>
                                <li class="item-wrap">Startups</li>
                                <li class="item-wrap">Basic marketing needs</li>
                                <li class="item-wrap">Social media</li>
                                <li class="item-wrap">Basic data analytics</li>
                                <li class="item-wrap">Email marketing</li>
                                <li class="item-wrap">Certain number</li>
                                <li class="item-wrap">Email support</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-3 col-md-6 item features-without-image">
                <div class="item-wrapper">
                    <div class="card-box">
                        <div class="title-wrapper">
                            <h4 class="item-title mbr-fonts-style display-4">
                                <strong>Standard Plan</strong>
                            </h4>
                            <p class="item-desc mbr-fonts-style display-4">
                                Per month
                            </p>
                        </div>
                        <p class="item-price mbr-fonts-style display-5">
                            <strong>$259</strong>
                        </p>
                        <div class="mbr-section-btn">
                            <a class="btn btn-primary display-4" href="https://mobiri.se">
                                Buy now
                            </a>
                        </div>
                        <div class="list-wrapper">
                            <ul class="list mbr-fonts-style display-4">
                                <li class="item-wrap">Growing businesses</li>
                                <li class="item-wrap">Mid-sized companies</li>
                                <li class="item-wrap">Online presence</li>
                                <li class="item-wrap">AI-powered insights</li>
                                <li class="item-wrap">Multi-channel</li>
                                <li class="item-wrap">Management</li>
                                <li class="item-wrap">A/B testing</li>
                                <li class="item-wrap">Higher limits</li>
                                <li class="item-wrap">Email sends</li>
                                <li class="item-wrap">Priority email</li>
                                <li class="item-wrap">Chat support</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-3 col-md-6 item features-without-image">
                <div class="item-wrapper">
                    <div class="card-box">
                        <div class="title-wrapper">
                            <h4 class="item-title mbr-fonts-style display-4">
                                <strong>Professional Plan</strong>
                            </h4>
                            <p class="item-desc mbr-fonts-style display-4">
                                Per month
                            </p>
                        </div>
                        <p class="item-price mbr-fonts-style display-5">
                            <strong>$499</strong>
                        </p>
                        <div class="mbr-section-btn">
                            <a class="btn btn-primary display-4" href="https://mobiri.se">
                                Buy now
                            </a>
                        </div>
                        <div class="list-wrapper">
                            <ul class="list mbr-fonts-style display-4">
                                <li class="item-wrap"><strong>Standard plan</strong></li>
                                <li class="item-wrap">Established</li>
                                <li class="item-wrap">Marketing agencies</li>
                                <li class="item-wrap">Complex needs</li>
                                <li class="item-wrap">Advanced automation</li>
                                <li class="item-wrap">CRM integration</li>
                                <li class="item-wrap">Advanced reporting</li>
                                <li class="item-wrap">No limits</li>
                                <li class="item-wrap">Priority phone</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-3 col-md-6 item features-without-image">
                <div class="item-wrapper">
                    <div class="card-box">
                        <div class="title-wrapper">
                            <h4 class="item-title mbr-fonts-style display-4">
                                <strong>Enterprise Plan</strong>
                            </h4>
                            <p class="item-desc mbr-fonts-style display-4">
                                Per month
                            </p>
                        </div>
                        <p class="item-price mbr-fonts-style display-5">
                            <strong>&gt; $1k</strong>
                        </p>
                        <div class="mbr-section-btn">
                            <a class="btn btn-primary display-4" href="https://mobiri.se">
                                Buy now
                            </a>
                        </div>
                        <div class="list-wrapper">
                            <ul class="list mbr-fonts-style display-4">
                                <li class="item-wrap">Large enterprises</li>
                                <li class="item-wrap">Organizations</li>
                                <li class="item-wrap">Marketing</li>
                                <li class="item-wrap">Personalized features</li>
                                <li class="item-wrap">Custom integrations</li>
                                <li class="item-wrap">Dedicated account</li>
                                <li class="item-wrap">Management</li>
                                <li class="item-wrap">Training sessions</li>
                                <li class="item-wrap">Scalable</li>
                                <li class="item-wrap">24/7 priority support</li>
                                <li class="item-wrap">Rapid response</li>
                            </ul>
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
                media: `<img src="templates/4aecd04a/preview/123d.png" />`,
            })

            domComponents.addType('section25', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: `<section data-bs-version="5.1" class="footer01 replym5 cid-u8jaNHB7fr" once="footers" id="footer01-w">
    

    
    

    <div class="container">
        <div class="row flex-row-reverse">
            <div class="col-12">
                
            </div>
            
            
            <div class="col-12 col-lg-5 card">
                <div class="copy-wrapper">
                    <p class="mbr-copy mbr-fonts-style display-4">
                        © COPYRIGHT 2030 MOBIRISE - ALL RIGHTS RESERVED
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
                media: `<img src="templates/4aecd04a/preview/c379.png" />`,
            })
        }