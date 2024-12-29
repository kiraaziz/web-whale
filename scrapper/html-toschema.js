import { writeFileSync } from 'fs';
import { JSDOM } from 'jsdom'

function htmlToSchema(html) {
    const dom = new JSDOM(html);
    const document = dom.window.document;

    function processNode(node, indent = 0) {
        if (node.nodeType !== 1) return '';

        const prefix = '│ '.repeat(indent) + (indent > 0 ? (node === node.parentNode.lastChild ? '└─' : '├─') : '');
        let result = '';

        const attrs = [];
        if (node.attributes.length > 0) {
            for (const attr of node.attributes) {
                if (["class", "id"].includes(attr.name)) {
                    attrs.push(`${attr.name}:"${attr.value}"`);
                }
            }
        }

        result += `${prefix}${node.tagName.toLowerCase()}${attrs.length ? ` {${attrs.join(',')}}` : ''}\n`;

        const children = Array.from(node.children);
        children.forEach((child, index) => {
            result += processNode(child, indent + 1);
        });

        return result;
    }

    const rootElement = document.body.firstElementChild;
    return processNode(rootElement).trimEnd();
}

const template = `
<section data-bs-version="5.1" class="menu menu01 stockm5 cid-ueUI9cMN3j" once="menu" id="menu01-8">
    <div class="container">
        <nav class="navbar navbar-dropdown navbar-expand-lg">
            <div class="menu-container">
                <div class="navbar-brand">
				<span class="navbar-logo">
					<a href="index.html">
						<img src="template/8bd2b3fc/img/3e89869a26f6d153.png" alt="Mobirise Website Builder" style="height: 3.5rem;">
					</a>
				</span>
                    <span class="navbar-caption-wrap"><a class="navbar-caption text-secondary display-7" href="index.html">STOCKM5</a></span>
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
                    <ul class="navbar-nav nav-dropdown" data-app-modern-menu="true"><li class="nav-item">
                            <a class="nav-link link text-primary display-4" href="index.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link link text-primary display-4" href="#pricing01-7" aria-expanded="false">Live Demo</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link link text-primary display-4" href="#article01-6">Live Demo Blocks</a>
                        </li></ul>
                    
                    <div class="navbar-buttons mbr-section-btn"><a class="btn btn-secondary-outline display-4" href="http://my.mobirise.com/buy.php?p=308">Buy now</a></div>
                </div>
            </div>
        </nav>
    </div>
</section>
xxxxx
<section data-bs-version="5.1" class="header01 mbr-embla stockm5 cid-ueURW5lNF6" id="header01-a">
    <div class="container">
        <div class="row items-wrapper">
            <div class="col-12 col-lg-6 card">
                <div class="content-wrap">
                    <div class="title-wrapper">
                        <h1 class="mbr-section-title mbr-fonts-style display-1">
                            <strong><span><b>StockM5 Theme</b></span> Food Business</strong>
                        </h1>
                        <p class="mbr-text mbr-fonts-style display-4">
                            The food business, an ever-evolving industry, is a cornerstone of human civilization, reflecting
                            cultural diversity, economic trends.
                        </p>
                    </div>
                    <div class="mbr-section-btn">
                        <a class="btn btn-primary display-4" href="https://mobiri.se">
                            <span class="mobi-mbri mobi-mbri-right mbr-iconfont mbr-iconfont-btn"></span>
                            View all prices
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-6 card">
                <div class="slider-wrap">
                    <div class="desc-wrap">
                        <p class="mbr-desc mbr-fonts-style display-4">
                            In conclusion, the food business is a dynamic and multifaceted industry.
                        </p>
                    </div>
                    <div class="embla" data-skip-snaps="true" data-align="center" data-contain-scroll="trimSnaps" data-loop="true" data-auto-play="true" data-auto-play-interval="2" data-draggable="true">
                        <div class="embla__viewport">
                            <div class="embla__container">
                                <div class="embla__slide slider-image item" style="margin-left: 0rem; margin-right: 0rem;">
                                    <div class="slide-content">
                                        <div class="item-wrapper">
                                            <div class="item-img">
                                                <img src="template/8bd2b3fc/img/d9e45afd0a7c84a4.jpeg" alt="Mobirise Website Builder">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="embla__slide slider-image item" style="margin-left: 0rem; margin-right: 0rem;">
                                    <div class="slide-content">
                                        <div class="item-wrapper">
                                            <div class="item-img">
                                                <img src="template/8bd2b3fc/img/987dadebab07583a.jpeg" alt="Mobirise Website Builder">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="embla__slide slider-image item" style="margin-left: 0rem; margin-right: 0rem;">
                                    <div class="slide-content">
                                        <div class="item-wrapper">
                                            <div class="item-img">
                                                <img src="template/8bd2b3fc/img/038d88fee4b9684a.jpeg" alt="Mobirise Website Builder">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="embla__slide slider-image item" style="margin-left: 0rem; margin-right: 0rem;">
                                    <div class="slide-content">
                                        <div class="item-wrapper">
                                            <div class="item-img">
                                                <img src="template/8bd2b3fc/img/1a02ed22db0ed32e.jpeg" alt="Mobirise Website Builder">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="embla__button embla__button--prev">
                            <span class="mbr-iconfont mobi-mbri-arrow-prev mobi-mbri" aria-hidden="true"></span>
                            <span class="sr-only visually-hidden visually-hidden visually-hidden">Previous</span>
                        </button>
                        <button class="embla__button embla__button--next">
                            <span class="mbr-iconfont mobi-mbri-arrow-next mobi-mbri" aria-hidden="true"></span>
                            <span class="sr-only visually-hidden visually-hidden visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
xxxxx
                        <section data-bs-version="5.1" class="header01 stockm5 cid-ueURWg1t3p" id="header02-b">
    

    
    

    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="content-wrapper">
					<div class="image-wrap">
						<img src="template/8bd2b3fc/img/0ef85df281e801ac.jpeg" alt="Mobirise">
					</div>
                    <div class="content-wrap">
                        <div class="desc-wrapper">
                            <p class="mbr-desc mbr-fonts-style display-4">
								Service
                            </p>
                        </div>
                        <h1 class="mbr-section-title mbr-fonts-style display-1">
                            <strong>Food Delivery - Transformation and Future</strong>
                        </h1>
                        <p class="mbr-text mbr-fonts-style display-7">
                            Food delivery has undergone a remarkable transformation in recent years, evolving from a
                            niche service to a cornerstone of modern dining culture.
                        </p>
                        <div class="mbr-section-btn">
                            <a class="btn btn-primary display-4" href="https://mobiri.se">
                                <span class="mobi-mbri mobi-mbri-right mbr-iconfont mbr-iconfont-btn"></span>
                                Get started
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
xxxxx
                        <section data-bs-version="5.1" class="features01 stockm5 cid-ueURWpEaAR" id="features01-c">
    

    
    

    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="title-wrapper">
                    <div class="desc-wrapper">
                        <p class="mbr-desc mbr-fonts-style display-4">
                            Strategies
                        </p>
                    </div>
                    <div class="title-wrap">
                        <h2 class="mbr-section-title mbr-fonts-style display-2">
                            <strong><span><b>Effective Promotions</b></span> in the Food Business</strong>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
        <div class="row items-wrapper">
            <div class="item features-image col-12 col-lg-4">
                <div class="item-wrapper">
                    <div class="item-img">
                        <a href="#"><img src="template/8bd2b3fc/img/f98ec36ea5bd0c00.jpeg" alt="Mobirise Website Builder" title=""></a>
                    </div>
                    <div class="item-content">
                        <div class="desc-wrap">
                            <p class="item-desc desc_1 mbr-fonts-style display-4">
                                Offers
                            </p>
                        </div>
                        <h4 class="item-title mbr-fonts-style display-5">
                            <strong>Discounts</strong>
                        </h4>
                        <p class="item-text mbr-fonts-style display-4">
                            Discounts and special offers are a tried-and-true method to attract customers
                        </p>
                    </div>
                </div>
            </div>
            <div class="item features-image col-12 col-lg-4">
                <div class="item-wrapper">
                    <div class="item-img">
                        <a href="#"><img src="template/8bd2b3fc/img/c6d246bca3e4d574.jpeg" alt="Mobirise Website Builder" title=""></a>
                    </div>
                    <div class="item-content">
                        <div class="desc-wrap">
                            <p class="item-desc desc_2 mbr-fonts-style display-4">
                                Programs
                            </p>
                        </div>
                        <h4 class="item-title mbr-fonts-style display-5">
                            <strong>Loyalty</strong>
                        </h4>
                        <p class="item-text mbr-fonts-style display-4">
                            Loyalty programs are designed to reward repeat customers
                        </p>
                    </div>
                </div>
            </div>
            <div class="item features-image col-12 col-lg-4">
                <div class="item-wrapper">
                    <div class="item-img">
                        <a href="#"><img src="template/8bd2b3fc/img/7dd1b09a5e51c99b.jpeg" alt="Mobirise Website Builder" title=""></a>
                    </div>
                    <div class="item-content">
                        <div class="desc-wrap">
                            <p class="item-desc desc_3 mbr-fonts-style display-4">
                                Social
                            </p>
                        </div>
                        <h4 class="item-title mbr-fonts-style display-5">
                            <strong>Media</strong>
                        </h4>
                        <p class="item-text mbr-fonts-style display-4">
                            Social media platforms are powerful tools for food business promotions
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
xxxxx
                        <section data-bs-version="5.1" class="features02 stockm5 cid-ueURWxzAtz" id="features02-d">
    

    
    

    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="title-wrapper">
                    <div class="desc-wrapper">
                        <p class="mbr-desc mbr-fonts-style display-4">
                            Main course
                        </p>
                    </div>
                    <div class="title-wrap">
                        <h2 class="mbr-section-title mbr-fonts-style display-2">
                            <strong><span><b>Items</b></span> that are in demand at food delivery service</strong>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
        <div class="row items-wrapper">
            <div class="item features-image col-12 col-lg-2">
                <div class="item-wrapper">
                    <div class="item-img">
                        <a href="#"><img src="template/8bd2b3fc/img/17e251697f1a4218.jpeg" alt="Mobirise Website Builder" title=""></a>
                    </div>
                    <div class="item-content">
                        <div class="desc-wrap">
                            <p class="item-desc mbr-fonts-style display-4">
                                100+
                            </p>
                        </div>
                        <h4 class="item-title mbr-fonts-style display-4">
                            <strong>Pizza</strong>
                        </h4>
                    </div>
                </div>
            </div>
            <div class="item features-image col-12 col-lg-2">
                <div class="item-wrapper">
                    <div class="item-img">
                        <a href="#"><img src="template/8bd2b3fc/img/46a77f69c6e8b9b1.jpeg" alt="Mobirise Website Builder" title=""></a>
                    </div>
                    <div class="item-content">
                        <div class="desc-wrap">
                            <p class="item-desc mbr-fonts-style display-4">
                                80+
                            </p>
                        </div>
                        <h4 class="item-title mbr-fonts-style display-4">
                            <strong>Burgers</strong>
                        </h4>
                    </div>
                </div>
            </div>
            <div class="item features-image col-12 col-lg-2">
                <div class="item-wrapper">
                    <div class="item-img">
                        <a href="#"><img src="template/8bd2b3fc/img/beaca2532c536004.jpeg" alt="Mobirise Website Builder" title=""></a>
                    </div>
                    <div class="item-content">
                        <div class="desc-wrap">
                            <p class="item-desc mbr-fonts-style display-4">
                                70+
                            </p>
                        </div>
                        <h4 class="item-title mbr-fonts-style display-4">
                            <strong>Chinese Food</strong>
                        </h4>
                    </div>
                </div>
            </div>
            <div class="item features-image col-12 col-lg-2">
                <div class="item-wrapper">
                    <div class="item-img">
                        <a href="#"><img src="template/8bd2b3fc/img/b73987f2a6cf6e03.jpeg" alt="Mobirise Website Builder" title=""></a>
                    </div>
                    <div class="item-content">
                        <div class="desc-wrap">
                            <p class="item-desc mbr-fonts-style display-4">
                                40+
                            </p>
                        </div>
                        <h4 class="item-title mbr-fonts-style display-4">
                            <strong>Indian Cuisine</strong>
                        </h4>
                    </div>
                </div>
            </div>
            <div class="item features-image col-12 col-lg-2">
                <div class="item-wrapper">
                    <div class="item-img">
                        <a href="#"><img src="template/8bd2b3fc/img/892660df56d49e2c.jpeg" alt="Mobirise Website Builder" title=""></a>
                    </div>
                    <div class="item-content">
                        <div class="desc-wrap">
                            <p class="item-desc mbr-fonts-style display-4">
                                65+
                            </p>
                        </div>
                        <h4 class="item-title mbr-fonts-style display-4">
                            <strong>Mexican Food</strong>
                        </h4>
                    </div>
                </div>
            </div>
            <div class="item features-image col-12 col-lg-2">
                <div class="item-wrapper">
                    <div class="item-img">
                        <a href="#"><img src="template/8bd2b3fc/img/b6433e2b24a30990.jpeg" alt="Mobirise Website Builder" title=""></a>
                    </div>
                    <div class="item-content">
                        <div class="desc-wrap">
                            <p class="item-desc mbr-fonts-style display-4">
                                75+
                            </p>
                        </div>
                        <h4 class="item-title mbr-fonts-style display-4">
                            <strong>Salads</strong>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
xxxxx
                        <section data-bs-version="5.1" class="features03 stockm5 cid-ueURWFZZUc" id="features03-e">
    

    
    

    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="title-wrapper">
                    <div class="desc-wrapper">
                        <p class="mbr-desc mbr-fonts-style display-4">
                            Field
                        </p>
                    </div>
                    <div class="title-wrap">
                        <h2 class="mbr-section-title mbr-fonts-style display-2">
                            <strong><span><b>The benefits</b></span> of a food business are numerous and multifaceted</strong>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
        <div class="row items-wrapper">
            <div class="item features-without-image col-12 col-lg-3">
                <div class="item-wrapper">
                    <div class="icon-wrapper">
                        <span class="mbr-iconfont mobi-mbri-users mobi-mbri"></span>
                    </div>
                    <div class="card-box">
                        <h4 class="item-title mbr-fonts-style display-7">
                            <strong>Job creation</strong>
                        </h4>
                        <p class="item-text mbr-fonts-style display-4">
                            A food business can create employment opportunities for many people.
                        </p>
                    </div>
                </div>
            </div>
            <div class="item features-without-image col-12 col-lg-3">
                <div class="item-wrapper">
                    <div class="icon-wrapper">
                        <span class="mbr-iconfont mobi-mbri-database mobi-mbri"></span>
                    </div>
                    <div class="card-box">
                        <h4 class="item-title mbr-fonts-style display-7">
                            <strong>Economic growth</strong>
                        </h4>
                        <p class="item-text mbr-fonts-style display-4">
                            The food industry is a significant contributor to a country's GDP.
                        </p>
                    </div>
                </div>
            </div>
            <div class="item features-without-image col-12 col-lg-3">
                <div class="item-wrapper">
                    <div class="icon-wrapper">
                        <span class="mbr-iconfont mobi-mbri-globe-2 mobi-mbri"></span>
                    </div>
                    <div class="card-box">
                        <h4 class="item-title mbr-fonts-style display-7">
                            <strong>Cultural exchange</strong>
                        </h4>
                        <p class="item-text mbr-fonts-style display-4">
                            Food businesses can facilitate cultural exchange by introducing people.
                        </p>
                    </div>
                </div>
            </div>
            <div class="item features-without-image col-12 col-lg-3">
                <div class="item-wrapper">
                    <div class="icon-wrapper">
                        <span class="mbr-iconfont mobi-mbri-protect mobi-mbri"></span>
                    </div>
                    <div class="card-box">
                        <h4 class="item-title mbr-fonts-style display-7">
                            <strong>Food security</strong>
                        </h4>
                        <p class="item-text mbr-fonts-style display-4">
                            A food business can help ensure food security by providing access to fresh.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
xxxxx
                        <section data-bs-version="5.1" class="features04 stockm5 cid-ueURWNHTyE" id="features04-f">
    

    
    

    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="content-wrap">
                    <div class="cont-wrap">
                        <div class="title-wrapper">
                            <div class="desc-wrapper">
                                <p class="mbr-desc mbr-fonts-style display-4">
                                    Ordering
                                </p>
                            </div>
                            <h2 class="mbr-section-title mbr-fonts-style display-2">
                                <strong><span><b>Step-by-step</b></span> guide</strong>
                            </h2>
                        </div>
                        <div class="items-wrapper">
                            <div class="item features-without-image">
                                <div class="item-wrapper">
                                    <div class="card-box">
                                        <div class="number-wrapper">
                                            <p class="item-number mbr-fonts-style display-4">
                                                01
                                            </p>
                                        </div>
                                        
                                        <p class="item-text mbr-fonts-style display-4">
                                            Enter your delivery address to see the available restaurants in your area
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="item features-without-image">
                                <div class="item-wrapper">
                                    <div class="card-box">
                                        <div class="number-wrapper">
                                            <p class="item-number mbr-fonts-style display-4">
                                                02
                                            </p>
                                        </div>
                                        
                                        <p class="item-text mbr-fonts-style display-4">
                                            Read reviews and ratings if available to help make your decision
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="item features-without-image">
                                <div class="item-wrapper">
                                    <div class="card-box">
                                        <div class="number-wrapper">
                                            <p class="item-number mbr-fonts-style display-4">
                                                03
                                            </p>
                                        </div>
                                        
                                        <p class="item-text mbr-fonts-style display-4">
                                            Customize your order (e.g., add extra toppings, choose portion sizes)
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="item features-without-image">
                                <div class="item-wrapper">
                                    <div class="card-box">
                                        <div class="number-wrapper">
                                            <p class="item-number mbr-fonts-style display-4">
                                                04
                                            </p>
                                        </div>
                                        
                                        <p class="item-text mbr-fonts-style display-4">
                                            Go to your cart or checkout page to review the items you’ve selected
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="image-wrapper">
                        <img src="template/8bd2b3fc/img/4285277e39e80358.jpeg" alt="Mobirise">
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
xxxxx
                        <section data-bs-version="5.1" class="features05 stockm5 cid-ueURWYduKZ" id="features05-g">
    

    
    

    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="title-wrapper">
                    <div class="desc-wrapper">
                        <p class="mbr-desc mbr-fonts-style display-4">
                            Industry
                        </p>
                    </div>
                    <div class="title-wrap">
                        <h2 class="mbr-section-title mbr-fonts-style display-2">
                            <strong>Demand for <span><b>unique and authentic</b></span> dining experiences </strong>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
        <div class="row cont-wrap">
            <div class="col-12 col-lg-9 card">
                <div class="content-wrap">
                    <div class="image-wrapper">
                        <img src="template/8bd2b3fc/img/69815a3f0d2b2f0d.jpeg" alt="Mobirise">
                    </div>
                    <div class="text-wrapper">
                        <p class="mbr-text mbr-fonts-style display-4">
                            From artisanal bakeries to trendy restaurants, small food entrepreneurs are finding
                            innovative ways to stand out in a crowded market. With the help of social media, food
                            bloggers, and online review platforms, small business owners can now reach a global audience
                            and build a loyal customer base.
                            <br><br>
                            Additionally, the trend towards healthy eating and sustainable living has led to a surge in
                            demand for organic and locally sourced products, providing opportunities for food producers
                            and retailers to capitalize on this growing trend.
                            <br><br>
                            Whether it's a small startup or a established brand, the food business offers a wide range
                            of opportunities for entrepreneurs.
                        </p>
                        <div class="mbr-section-btn">
                            <a class="btn btn-primary-outline display-4" href="https://mobiri.se">
                                <span class="mobi-mbri mobi-mbri-right mbr-iconfont mbr-iconfont-btn"></span>
                                View more
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-3 card">
                <div class="items-wrapper">
                    <div class="item features-without-image">
                        <div class="item-wrapper">
                            <div class="card-box">
                                <h4 class="item-title mbr-fonts-style display-7">
                                    <strong>4,5%</strong>
                                </h4>
                                <p class="item-text mbr-fonts-style display-4">
                                    Food market will grow
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="item features-without-image">
                        <div class="item-wrapper">
                            <div class="card-box">
                                <h4 class="item-title mbr-fonts-style display-7">
                                    <strong>4k+ clients</strong>
                                </h4>
                                <p class="item-text mbr-fonts-style display-4">
                                    Regularly buy products
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="item features-without-image">
                        <div class="item-wrapper">
                            <div class="card-box">
                                <h4 class="item-title mbr-fonts-style display-7">
                                    <strong>100k</strong>
                                </h4>
                                <p class="item-text mbr-fonts-style display-4">
                                    People employed in the food
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="item features-without-image">
                        <div class="item-wrapper">
                            <div class="card-box">
                                <h4 class="item-title mbr-fonts-style display-7">
                                    <strong>5k+</strong>
                                </h4>
                                <p class="item-text mbr-fonts-style display-4">
                                    Available for ordering
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
xxxxx
                        <section data-bs-version="5.1" class="features06 stockm5 cid-ueURX6brXm" id="features06-h">
    

    
    

    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="content-wrap">
                    <div class="title-wrapper">
                        <h2 class="mbr-section-title mbr-fonts-style display-7">
                            <strong>Terms and conditions</strong>
                        </h2>
                    </div>
                    <div class="items-wrapper">
                        <div class="item features-without-image">
                            <div class="item-wrapper">
                                <div class="card-box">
                                    <div class="number-wrapper">
                                        <p class="item-number mbr-fonts-style display-4">
                                            01
                                        </p>
                                    </div>
                                    
                                    <p class="item-text mbr-fonts-style display-4">
                                        This refers to the practice of ordering food from a restaurant
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="item features-without-image">
                            <div class="item-wrapper">
                                <div class="card-box">
                                    <div class="number-wrapper">
                                        <p class="item-number mbr-fonts-style display-4">
                                            02
                                        </p>
                                    </div>
                                    
                                    <p class="item-text mbr-fonts-style display-4">
                                        A food courier is a person or company that delivers food to customers
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="item features-without-image">
                            <div class="item-wrapper">
                                <div class="card-box">
                                    <div class="number-wrapper">
                                        <p class="item-number mbr-fonts-style display-4">
                                            03
                                        </p>
                                    </div>
                                    
                                    <p class="item-text mbr-fonts-style display-4">
                                        This term refers to the process of optimizing a restaurant's menu
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="item features-without-image">
                            <div class="item-wrapper">
                                <div class="card-box">
                                    <div class="number-wrapper">
                                        <p class="item-number mbr-fonts-style display-4">
                                            04
                                        </p>
                                    </div>
                                    
                                    <p class="item-text mbr-fonts-style display-4">
                                        A food delivery app is a software application that allows customers
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
xxxxx
                        <section data-bs-version="5.1" class="features07 stockm5 cid-ueURXepypr" id="features07-i">
    

    
    

    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="content-wrap">
                    <div class="content-wrapper">
                        <h2 class="mbr-section-title mbr-fonts-style display-2">
                            <strong><span><b>The food business</b></span> is a thriving industry </strong>
                        </h2>
                        <div class="items-wrapper">
                            <div class="item features-without-image">
                                <div class="item-wrapper">
                                    <div class="card-box">
                                        <h4 class="item-title mbr-fonts-style display-7">
                                            <strong>4,5%</strong>
                                        </h4>
                                        <p class="item-text mbr-fonts-style display-4">
                                            Food market will grow
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="item features-without-image">
                                <div class="item-wrapper">
                                    <div class="card-box">
                                        <h4 class="item-title mbr-fonts-style display-7">
                                            <strong>4k+ clients</strong>
                                        </h4>
                                        <p class="item-text mbr-fonts-style display-4">
                                            Regularly buy products
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="item features-without-image">
                                <div class="item-wrapper">
                                    <div class="card-box">
                                        <h4 class="item-title mbr-fonts-style display-7">
                                            <strong>100k</strong>
                                        </h4>
                                        <p class="item-text mbr-fonts-style display-4">
                                            People employed in food
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="item features-without-image">
                                <div class="item-wrapper">
                                    <div class="card-box">
                                        <h4 class="item-title mbr-fonts-style display-7">
                                            <strong>5k+</strong>
                                        </h4>
                                        <p class="item-text mbr-fonts-style display-4">
                                            Available for ordering
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="image-wrapper">
                        <img src="template/8bd2b3fc/img/e2cc0779a820594f.jpeg" alt="Mobirise">
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
xxxxx
                        <section data-bs-version="5.1" class="features08 stockm5 cid-ueURXmwjzP" id="features08-j">
    

    
    

    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="title-wrapper">
                    <div class="title-wrap">
                        <h2 class="mbr-section-title mbr-fonts-style display-2">
                            <strong>Well-organized and efficient <span><b>management system</b></span> </strong>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
        <div class="row items-wrapper">
            <div class="item features-without-image col-12 col-lg-3">
                <div class="item-wrapper">
                    <div class="card-box">
                        <div class="icon-wrapper">
                            <span class="mbr-iconfont mobi-mbri-user mobi-mbri"></span>
                        </div>
                        <div class="desc-wrapper">
                            <p class="item-desc mbr-fonts-style display-4">
                                &gt; 5 years
                            </p>
                        </div>
                        <h4 class="item-name mbr-fonts-style display-4">
                            <strong>Ruth Howell</strong>
                        </h4>
                        <p class="item-role mbr-fonts-style display-4">
                            Operations Director
                        </p>
                    </div>
                    <div class="mbr-section-btn">
                        <a class="btn btn-secondary-outline display-4" href="https://mobiri.se">
                            Contact now
                        </a>
                    </div>
                </div>
            </div>
            <div class="item features-without-image col-12 col-lg-3">
                <div class="item-wrapper">
                    <div class="card-box">
                        <div class="icon-wrapper">
                            <span class="mbr-iconfont mobi-mbri-user mobi-mbri"></span>
                        </div>
                        <div class="desc-wrapper">
                            <p class="item-desc mbr-fonts-style display-4">
                                &gt; 3 years
                            </p>
                        </div>
                        <h4 class="item-name mbr-fonts-style display-4">
                            <strong>Dorothy Baker</strong>
                        </h4>
                        <p class="item-role mbr-fonts-style display-4">
                            Supply Chain Manager
                        </p>
                    </div>
                    <div class="mbr-section-btn">
                        <a class="btn btn-secondary-outline display-4" href="https://mobiri.se">
                            Contact now
                        </a>
                    </div>
                </div>
            </div>
            <div class="item features-without-image col-12 col-lg-3">
                <div class="item-wrapper">
                    <div class="card-box">
                        <div class="icon-wrapper">
                            <span class="mbr-iconfont mobi-mbri-user mobi-mbri"></span>
                        </div>
                        <div class="desc-wrapper">
                            <p class="item-desc mbr-fonts-style display-4">
                                &gt; 8 years
                            </p>
                        </div>
                        <h4 class="item-name mbr-fonts-style display-4">
                            <strong>Frank Weber</strong>
                        </h4>
                        <p class="item-role mbr-fonts-style display-4">
                            Customer Manager
                        </p>
                    </div>
                    <div class="mbr-section-btn">
                        <a class="btn btn-secondary-outline display-4" href="https://mobiri.se">
                            Contact now
                        </a>
                    </div>
                </div>
            </div>
            <div class="item features-without-image col-12 col-lg-3">
                <div class="item-wrapper">
                    <div class="card-box">
                        <div class="icon-wrapper">
                            <span class="mbr-iconfont mobi-mbri-user mobi-mbri"></span>
                        </div>
                        <div class="desc-wrapper">
                            <p class="item-desc mbr-fonts-style display-4">
                                &gt; 10 years
                            </p>
                        </div>
                        <h4 class="item-name mbr-fonts-style display-4">
                            <strong>Timothy Rice</strong>
                        </h4>
                        <p class="item-role mbr-fonts-style display-4">
                            Marketing Director
                        </p>
                    </div>
                    <div class="mbr-section-btn">
                        <a class="btn btn-secondary-outline display-4" href="https://mobiri.se">
                            Contact now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
xxxxx
                        <section data-bs-version="5.1" class="article01 stockm5 cid-ueURXHr8JW" id="article01-k">
    

    
    

    <div class="container">
        <div class="row content-wrap">
            <div class="col-12 col-lg-5">
                <div class="content-wrapper">
                    <div class="title-wrapper">
                        <div class="desc-wrapper">
                            <p class="mbr-desc mbr-fonts-style display-4">
                                About meals
                            </p>
                        </div>
                        <h2 class="mbr-section-title mbr-fonts-style display-2">
                            <strong><span><b>Discover the convenience</b></span> of food delivery</strong>
                        </h2>
                    </div>
                    <p class="mbr-text mbr-fonts-style display-4">
                        Our food delivery service is dedicated to providing you with high-quality, delicious meals that
                        cater to all tastes and dietary preferences. With just a few clicks, you can explore a diverse
                        menu, place your order, and enjoy a hot, freshly prepared meal delivered promptly.
                        <br><br>
                        We prioritize not only the flavor and presentation of our dishes but also ensuring a seamless
                        and pleasant delivery experience.
                    </p>
                </div>
            </div>
            <div class="col-12 col-lg-6">
                <div class="image-wrapper">
                    <img src="template/8bd2b3fc/img/a5d23ba8e7ebdd5e.jpeg" alt="Mobirise">
                </div>
            </div>
        </div>
    </div>
</section>
xxxxx
                        <section data-bs-version="5.1" class="article02 stockm5 cid-ueURXQddjc" id="article02-l">
    

    
    

    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="content-wrapper">
                    <div class="desc-wrapper">
                        <p class="mbr-desc mbr-fonts-style display-4">
                            About
                        </p>
                    </div>
                    <div class="title-wrap">
                        <h2 class="mbr-section-title mbr-fonts-style display-1">
                            <strong><span><b>Our diverse menu</b></span> is crafted to cater to a wide range of tastes and
                                dietary needs, offering everything from classic comfort foods
                                <span><b>to innovative gourmet creations</b></span>. Whether you're stopping by for a
                                quick lunch, dining in with family and friends, we aim to provide an exceptional dining
                                <span><b>experience every time</b></span>.
                            </strong>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
xxxxx
                        <section data-bs-version="5.1" class="image01 stockm5 cid-ueURYgFlxA mbr-parallax-background" id="image01-m">
    

    
    <div class="mbr-overlay" style="opacity: 0.6; background-color: rgb(255, 241, 226);"></div>

    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="image-wrapper"></div>
            </div>
        </div>
    </div>
</section>
xxxxx
                        <section data-bs-version="5.1" class="video01 stockm5 cid-ueURYoTONd" id="video01-n">
    

    
    

    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="title-wrapper">
                    <div class="desc-wrapper">
                        <p class="mbr-desc mbr-fonts-style display-4">
                            Work
                        </p>
                    </div>
                    <div class="title-wrap">
                        <h2 class="mbr-section-title mbr-fonts-style display-2">
                            <strong>About Delivery</strong>
                        </h2>
                    </div>
                </div>
                <div class="video-wrap">
                    
                    <div class="box">
                        <div class="mbr-media show-modal align-center" data-modal=".modalWindow">
                            <img src="template/8bd2b3fc/img/ce45e4f3d839b0c8.jpeg" alt="Mobirise">
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
                        <iframe width="100%" height="100%" frameborder="0" allowfullscreen="1" data-src="https://www.youtube.com/watch?v=H8kEPEwtuoM&amp;loop=1&amp;autoplay=1"></iframe>
                    </div>
                    <a class="close" role="button" data-dismiss="modal" data-bs-dismiss="modal">
                        <span aria-hidden="true" class="mbr-iconfont mobi-mbri-close mobi-mbri closeModal"></span>
                        <span class="sr-only visually-hidden visually-hidden">Close</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
xxxxx
                        <section data-bs-version="5.1" class="map01 stockm5 cid-ueURYPj4Vd" id="map01-o">
    

    
    

    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="map-wrapper">
                    <div class="google-map"><iframe frameborder="0" style="border:0" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6045.3003145248895!2d-73.9884657!3d40.7477229!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9ac1f1b85%3A0x7e33d1c0e7af3be4!2zMzUwIDV0aCBBdmUsIE5ldyBZb3JrLCBOWSAxMDExOCwg0KHQqNCQ!5e0!3m2!1sru!2sru!4v1689597362021!5m2!1sen!2sen" allowfullscreen=""></iframe></div>
                    <div class="card-wrapper">
                        <div class="card-wrap">
                            <div class="contacts-wrapper">
                                <ul class="list mbr-fonts-style display-7">
                                    <li class="mbr-text item-wrap">+98 765 43 21</li>
                                    <li class="mbr-text item-wrap">mobi@rise.com</li>
                                </ul>
                            </div>
                            <div class="text-wrapper">
                                <h3 class="mbr-section-subtitle mbr-fonts-style display-4">
                                    Address
                                </h3>
                                <p class="mbr-text mbr-fonts-style display-4">
                                    La Paix 12, Paris
                                </p>
                            </div>
                            <div class="title-wrapper">
                                <h3 class="mbr-section-subtitle mbr-fonts-style display-4">
                                    Company
                                </h3>
                                <div class="title-wrap">
                                    <div class="logo-wrapper">
                                        <a href="#">
                                            <img src="template/8bd2b3fc/img/3e89869a26f6d153.png" alt="Mobirise">
                                        </a>
                                    </div>
                                    <h2 class="mbr-section-title mbr-fonts-style display-7">
                                        <strong>STOCKM5</strong>
                                    </h2>
                                </div>
                            </div>
                            <div class="social-wrapper">
                                <h3 class="mbr-section-subtitle mbr-fonts-style display-4">
                                    Our social media
                                </h3>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
xxxxx
                        <section data-bs-version="5.1" class="form01 stockm5 cid-ueURYZCizf" id="form01-p">
    

    
    

    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="content-wrap">
                    <div class="cont-wrap">
                        <div class="title-wrapper">
                            <div class="desc-wrapper">
                                <p class="mbr-desc mbr-fonts-style display-4">
                                    Contacts
                                </p>
                            </div>
                            <h2 class="mbr-section-title mbr-fonts-style display-2">
                                <strong>Contact us about <span><b>cooperation</b></span></strong>
                            </h2>
                        </div>
                        <div class="mbr-form form-wrapper" data-form-type="formoid">
                            <form action="https://mobirise.eu/" method="POST" class="mbr-form form-with-styler" data-form-title="Form Name"><input type="hidden" name="email" data-form-email="true" value="2rMowR3CJ7gjCKws6C+sz9luKXKNWJjjNE+Zdh+HN155JWbFQo9+mr8QEyKp9/mZGcc5YaouYyH+qLMErgFgW3DXA1ETWXm0MduAeAFQI9yK4EfYsTR155WNWlcnKl5E.XGcZo3t5qpx4XQNZ+dJlX7UZc6FiilU9i46Y4MTFilXrcXIEmcR6VF+fddUlfskB6ZIFLn0heuML51somJKyQy2qZnQJ+5joYgJJLUCKtZMIZB2r4ff8i7XHroh+kX2i">
                                <div class="row">
                                    <div hidden="hidden" data-form-alert="" class="alert alert-success col-12">Thanks
                                        for
                                        filling out the form!</div>
                                    <div hidden="hidden" data-form-alert-danger="" class="alert alert-danger col-12">
                                        Oops...! some problem!
                                    </div>
                                </div>
                                <div class="dragArea row">
                                    <div class="col-lg-12 col-md-12 col-sm-12">
                                        <p class="mbr-text mbr-fonts-style display-4">
                                            Fill out the form and our manager will contact you
                                        </p>
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-sm-12 form-group mb-3" data-for="text">
                                        <input type="text" name="text" placeholder="Text" data-form-field="text" class="form-control display-7" value="" id="text-form01-p">
                                    </div>
                                    <div data-for="name" class="col-lg-12 col-md-12 col-sm-12 form-group mb-3 mb-3">
                                        <input type="text" name="name" placeholder="Company" data-form-field="name" class="form-control display-4" value="" id="name-form01-p">
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-sm-12 form-group mb-3 mb-3 mb-3 mb-3" data-for="email">
                                        <input type="email" name="email" placeholder="Email" data-form-field="email" class="form-control display-4" value="" id="email-form01-p">
                                    </div>
                                    <div class="col mbr-section-btn">
                                        <button type="submit" class="btn btn-secondary display-4">
                                            <span class="mobi-mbri mobi-mbri-right mbr-iconfont mbr-iconfont-btn"></span>
                                            Send now
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="map-wrapper card">
                        <div class="google-map"><iframe frameborder="0" style="border:0" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6045.3003145248895!2d-73.9884657!3d40.7477229!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9ac1f1b85%3A0x7e33d1c0e7af3be4!2zMzUwIDV0aCBBdmUsIE5ldyBZb3JrLCBOWSAxMDExOCwg0KHQqNCQ!5e0!3m2!1sru!2sru!4v1689597362021!5m2!1sen!2sen" allowfullscreen=""></iframe></div>
                        <div class="contacts-wrapper">
                            <div class="contacts-wrap">
                                <ul class="list mbr-fonts-style display-7">
                                    <li class="item-wrap"><strong>+98 765 43 21</strong></li>
                                    <li class="item-wrap"><strong>mobi@rise.com</strong></li>
                                    <li class="item-wrap">La Paix 12, Paris</li>
                                </ul>
                            </div>
                            <div class="social-wrapper">
                                <p class="soc-desc mbr-fonts-style display-4">
                                    Our social media
                                </p>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
xxxxx
                        <section data-bs-version="5.1" class="list01 stockm5 cid-ueURZpXRcq" id="list01-q">
    

    
    

    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="content-wrap">
                    <div class="image-wrapper">
                        <img src="template/8bd2b3fc/img/3fa4502e69cef394.jpeg" alt="Mobirise">
                    </div>
                    <div class="card-wrapper">
                        <h2 class="mbr-section-title mbr-fonts-style display-7">
                            <strong>Italian Extra Virgin Olive Oil</strong>
                        </h2>
                        <ul class="list mbr-fonts-style display-4">
                            <li class="item-wrap"><strong>Country of Origin:</strong> Italy</li>
                            <li class="item-wrap"><strong>Manufacturer:</strong> Oliveto Farms</li>
                            <li class="item-wrap"><strong>Weight:</strong> 1 Liter (33.8 fl oz)</li>
                            <li class="item-wrap"><strong>Type:</strong> Cold-pressed, first-press extra virgin olive oil</li>
                        </ul>
                        <div class="mbr-section-btn">
                            <a class="btn btn-secondary display-4" href="https://mobiri.se">
                               View all products
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
xxxxx
                        <section data-bs-version="5.1" class="list02 stockm5 cid-ueURZxR1v4" id="list02-r">
    

    
    

    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="content-wrap">
                    <div class="title-wrapper">
                        <h2 class="mbr-section-title mbr-fonts-style display-2">
                            <strong>FAQs</strong>
                        </h2>
                    </div>
                    <div id="bootstrap-accordion_18" class="panel-group accordionStyles accordion" role="tablist" aria-multiselectable="true">
                        <div class="card">
                            <div class="card-header" role="tab" id="headingOne">
                                <a role="button" class="panel-title collapsed" data-toggle="collapse" data-bs-toggle="collapse" data-core="" href="#collapse1_18" aria-expanded="false" aria-controls="collapse1">
                                    <h4 class="panel-title-edit mbr-fonts-style display-7">
                                        <strong>What is your policy on food allergies?</strong>
                                    </h4>
                                    <div class="icon-wrapper">
                                        <span class="sign mbr-iconfont mobi-mbri-plus mobi-mbri"></span>
                                    </div>
                                </a>
                            </div>
                            <div id="collapse1_18" class="panel-collapse noScroll collapse" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion" data-bs-parent="#bootstrap-accordion_18">
                                <div class="panel-body">
                                    <p class="panel-text mbr-fonts-style display-4">
                                        We take food allergies very seriously. Please inform us of any allergies
                                        when placing your order, and we will do our best to accommodate your needs.
                                        However, please note that we cannot guarantee a completely allergen-free
                                        environment.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" role="tab" id="headingTwo">
                                <a role="button" class="panel-title collapsed" data-toggle="collapse" data-bs-toggle="collapse" data-core="" href="#collapse2_18" aria-expanded="false" aria-controls="collapse2">
                                    <h4 class="panel-title-edit mbr-fonts-style display-7">
                                        <strong>Do you have a loyalty program?</strong>
                                    </h4>
                                    <div class="icon-wrapper">
                                        <span class="sign mbr-iconfont mobi-mbri-plus mobi-mbri"></span>
                                    </div>
                                </a>
                            </div>
                            <div id="collapse2_18" class="panel-collapse noScroll collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion" data-bs-parent="#bootstrap-accordion_18">
                                <div class="panel-body">
                                    <p class="panel-text mbr-fonts-style display-4">
                                        Yes, we have a loyalty program where you can earn points for every purchase.
                                        Points can be redeemed for discounts and special offers. Sign up through our
                                        website or mobile app to start earning rewards.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" role="tab" id="headingThree">
                                <a role="button" class="panel-title collapsed" data-toggle="collapse" data-bs-toggle="collapse" data-core="" href="#collapse3_18" aria-expanded="false" aria-controls="collapse3">
                                    <h4 class="panel-title-edit mbr-fonts-style display-7">
                                        <strong>How can I provide feedback about my experience?</strong>
                                    </h4>
                                    <div class="icon-wrapper">
                                        <span class="sign mbr-iconfont mobi-mbri-plus mobi-mbri"></span>
                                    </div>
                                </a>
                            </div>
                            <div id="collapse3_18" class="panel-collapse noScroll collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion" data-bs-parent="#bootstrap-accordion_18">
                                <div class="panel-body">
                                    <p class="panel-text mbr-fonts-style display-4">
                                        We value your feedback and would love to hear about your experience. You can
                                        provide feedback through our website, mobile app, or by contacting our
                                        customer service team directly.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" role="tab" id="headingFour">
                                <a role="button" class="panel-title collapsed" data-toggle="collapse" data-bs-toggle="collapse" data-core="" href="#collapse4_18" aria-expanded="false" aria-controls="collapse4">
                                    <h4 class="panel-title-edit mbr-fonts-style display-7">
                                        <strong>What is your return/refund policy?</strong>
                                    </h4>
                                    <div class="icon-wrapper">
                                        <span class="sign mbr-iconfont mobi-mbri-plus mobi-mbri"></span>
                                    </div>
                                </a>
                            </div>
                            <div id="collapse4_18" class="panel-collapse noScroll collapse" role="tabpanel" aria-labelledby="headingFour" data-parent="#accordion" data-bs-parent="#bootstrap-accordion_18">
                                <div class="panel-body">
                                    <p class="panel-text mbr-fonts-style display-4">
                                        If you are not satisfied with your order, please contact us within 24 hours.
                                        We will do our best to resolve the issue, which may include a replacement or
                                        refund.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" role="tab" id="headingFive">
                                <a role="button" class="panel-title collapsed" data-toggle="collapse" data-bs-toggle="collapse" data-core="" href="#collapse5_18" aria-expanded="false" aria-controls="collapse5">
                                    <h4 class="panel-title-edit mbr-fonts-style display-7">
                                        <strong>What payment methods do you accept?</strong>
                                    </h4>
                                    <div class="icon-wrapper">
                                        <span class="sign mbr-iconfont mobi-mbri-plus mobi-mbri"></span>
                                    </div>
                                </a>
                            </div>
                            <div id="collapse5_18" class="panel-collapse noScroll collapse" role="tabpanel" aria-labelledby="headingFive" data-parent="#accordion" data-bs-parent="#bootstrap-accordion_18">
                                <div class="panel-body">
                                    <p class="panel-text mbr-fonts-style display-4">
                                        We accept cash, credit/debit cards (Visa, MasterCard, American Express), and
                                        mobile payment options such as Apple Pay and Google Pay.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
xxxxx
                        <section data-bs-version="5.1" class="tabs01 stockm5 cid-ueURZFOK4t" id="tabs01-s">
    

    
    

    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="content-wrap">
                    <div class="title-wrapper">
                        <h2 class="mbr-section-title mbr-fonts-style display-2">
                            <strong><span><b>Food Delivery Service</b></span> Hot Dishes Menu</strong>
                        </h2>
                    </div>
                    <div class="tabs-wrapper">
                        <ul class="nav nav-tabs" role="tablist">
                            <li class="nav-item first mbr-fonts-style">
                                <a class="nav-link show active mbr-fonts-style display-4" role="tab" data-toggle="tab" data-bs-toggle="tab" href="#tab1" aria-selected="true">
                                    Spaghetti
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link show active mbr-fonts-style display-4" role="tab" data-toggle="tab" data-bs-toggle="tab" href="#tab2" aria-selected="true">
                                    Chicken
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link show active mbr-fonts-style display-4" role="tab" data-toggle="tab" data-bs-toggle="tab" href="#tab3" aria-selected="true">
                                    Beef
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link show active mbr-fonts-style display-4" role="tab" data-toggle="tab" data-bs-toggle="tab" href="#tab4" aria-selected="true">
                                    Vegetarian
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link show active mbr-fonts-style display-4" role="tab" data-toggle="tab" data-bs-toggle="tab" href="#tab5" aria-selected="true">
                                    Seafood
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="tab-content">
                        <div id="tab1" class="tab-pane in active" role="tabpanel">
                            <div class="content-wrapper">
                                <div class="text-wrapper">
                                    <h4 class="item-title mbr-fonts-style display-5">
                                        <strong>Classic Spaghetti Bolognese</strong>
                                    </h4>
                                    <div class="text-wrap">
                                        <p class="item-text mbr-fonts-style display-4">
                                            A hearty Italian classic made with al dente spaghetti topped with a rich and
                                            savory meat sauce. Our Bolognese sauce is simmered for hours with ground
                                            beef, tomatoes, onions, garlic, and a blend of Italian herbs. Served with a
                                            side of freshly baked garlic bread.
                                        </p>
                                    </div>
                                </div>
                                <div class="image-wrapper">
                                    <img src="template/8bd2b3fc/img/144f54c24d00d122.jpeg" alt="Mobirise">
                                </div>
                            </div>
                        </div>
                        <div id="tab2" class="tab-pane" role="tabpanel">
                            <div class="content-wrapper">
                                <div class="text-wrapper">
                                    <h4 class="item-title mbr-fonts-style display-5">
                                        <strong>Grilled Lemon Herb Chicken</strong>
                                    </h4>
                                    <div class="text-wrap">
                                        <p class="item-text mbr-fonts-style display-4">
                                            Juicy, marinated chicken breasts grilled to perfection and served with a
                                            side of roasted vegetables and a light lemon herb sauce. This dish offers a
                                            healthy and flavorful option, perfect for a balanced meal.
                                        </p>
                                    </div>
                                </div>
                                <div class="image-wrapper">
                                    <img src="template/8bd2b3fc/img/e7f4a0ff1f3e683f.jpeg" alt="Mobirise">
                                </div>
                            </div>
                        </div>
                        <div id="tab3" class="tab-pane" role="tabpanel">
                            <div class="content-wrapper">
                                <div class="text-wrapper">
                                    <h4 class="item-title mbr-fonts-style display-5">
                                        <strong>Beef Stroganoff</strong>
                                    </h4>
                                    <div class="text-wrap">
                                        <p class="item-text mbr-fonts-style display-4">
                                            Tender strips of beef cooked in a creamy mushroom sauce and served over egg
                                            noodles. This comforting dish is rich in flavor, with a hint of paprika and
                                            a touch of sour cream, providing a hearty and satisfying meal.
                                        </p>
                                    </div>
                                </div>
                                <div class="image-wrapper">
                                    <img src="template/8bd2b3fc/img/c3e9d729255b7dc5.jpeg" alt="Mobirise">
                                </div>
                            </div>
                        </div>
                        <div id="tab4" class="tab-pane" role="tabpanel">
                            <div class="content-wrapper">
                                <div class="text-wrapper">
                                    <h4 class="item-title mbr-fonts-style display-5">
                                        <strong>Vegetarian Stir-Fry</strong>
                                    </h4>
                                    <div class="text-wrap">
                                        <p class="item-text mbr-fonts-style display-4">
                                            A colorful mix of fresh vegetables stir-fried with tofu in a savory
                                            soy-ginger sauce. Served with steamed jasmine rice, this dish is both
                                            nutritious and delicious, catering to vegetarian and vegan preferences.
                                        </p>
                                    </div>
                                </div>
                                <div class="image-wrapper">
                                    <img src="template/8bd2b3fc/img/74046d08e9995b24.jpeg" alt="Mobirise">
                                </div>
                            </div>
                        </div>
                        <div id="tab5" class="tab-pane" role="tabpanel">
                            <div class="content-wrapper">
                                <div class="text-wrapper">
                                    <h4 class="item-title mbr-fonts-style display-5">
                                        <strong>Seafood Paella</strong>
                                    </h4>
                                    <div class="text-wrap">
                                        <p class="item-text mbr-fonts-style display-4">
                                            A traditional Spanish dish made with saffron-infused rice, shrimp, mussels,
                                            clams, and squid, cooked together with bell peppers, tomatoes, and peas.
                                            This dish is bursting with flavors from the sea and seasoned with a touch of
                                            paprika.
                                        </p>
                                    </div>
                                </div>
                                <div class="image-wrapper">
                                    <img src="template/8bd2b3fc/img/db5b9376249221da.jpeg" alt="Mobirise">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
xxxxx
                        <section data-bs-version="5.1" class="gallery01 stockm5 cid-ueUS05ZIEF" id="gallery01-t">
    

    
    

    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="items-wrapper">
                    <div class="image-wrapper">
                        <img src="template/8bd2b3fc/img/433a93d44455997f.jpeg" alt="Mobirise">
                    </div>
                    <div class="image-wrapper">
                        <img src="template/8bd2b3fc/img/f98ec36ea5bd0c00.jpeg" alt="Mobirise">
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
xxxxx
                        <section data-bs-version="5.1" class="slider01 mbr-embla stockm5 cid-ueUS0eioBU" id="slider01-u">
    
    

    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="slider-wrap">
                    <div class="embla" data-skip-snaps="true" data-align="center" data-contain-scroll="trimSnaps" data-loop="true" data-auto-play-interval="2" data-draggable="true">
                        <div class="embla__viewport">
                            <div class="embla__container">
                                <div class="embla__slide slider-image item" style="margin-left: 0rem; margin-right: 0rem;">
                                    <div class="slide-content">
                                        <div class="item-wrapper">
                                            <div class="item-content">
                                                <h2 class="item-title mbr-fonts-style display-2">
                                                    <strong><span><b>Chinese food</b></span> is a long-time favorite for
                                                        delivery</strong>
                                                </h2>
                                                <p class="item-text mbr-fonts-style display-4">
                                                    The convenience of ordering Chinese food for delivery, combined with
                                                    its affordability.
                                                </p>
                                                <div class="mbr-section-btn">
                                                    <a class="btn btn-primary display-4" href="https://mobiri.se">
                                                        <span class="mobi-mbri mobi-mbri-right mbr-iconfont mbr-iconfont-btn"></span>
                                                        Place an order now
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="item-img">
                                                <img src="template/8bd2b3fc/img/beaca2532c536004.jpeg" alt="Mobirise Website Builder">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="embla__slide slider-image item" style="margin-left: 0rem; margin-right: 0rem;">
                                    <div class="slide-content">
                                        <div class="item-wrapper">
                                            <div class="item-content">
                                                <h2 class="item-title mbr-fonts-style display-2">
                                                    <strong><span><b>Juicy burgers</b></span> are a staple in food
                                                        delivery</strong>
                                                </h2>
                                                <p class="item-text mbr-fonts-style display-4">
                                                    The convenience of ordering a quick burger and fries for delivery
                                                    has made.
                                                </p>
                                                <div class="mbr-section-btn">
                                                    <a class="btn btn-primary display-4" href="https://mobiri.se">
                                                        <span class="mobi-mbri mobi-mbri-right mbr-iconfont mbr-iconfont-btn"></span>
                                                        Place an order now
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="item-img">
                                                <img src="template/8bd2b3fc/img/46a77f69c6e8b9b1.jpeg" alt="Mobirise Website Builder">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="embla__slide slider-image item" style="margin-left: 0rem; margin-right: 0rem;">
                                    <div class="slide-content">
                                        <div class="item-wrapper">
                                            <div class="item-content">
                                                <h2 class="item-title mbr-fonts-style display-2">
                                                    <strong><span><b>Pizza is a clear favorite</b></span>
                                                        among food delivery</strong>
                                                </h2>
                                                <p class="item-text mbr-fonts-style display-4">
                                                    Whether it's a classic margherita, meat-lovers, or veggie-packed.
                                                </p>
                                                <div class="mbr-section-btn">
                                                    <a class="btn btn-primary display-4" href="https://mobiri.se">
                                                        <span class="mobi-mbri mobi-mbri-right mbr-iconfont mbr-iconfont-btn"></span>
                                                        Place an order now
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="item-img">
                                                <img src="template/8bd2b3fc/img/17e251697f1a4218.jpeg" alt="Mobirise Website Builder">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="embla__button embla__button--prev">
                            <span class="mbr-iconfont mobi-mbri-arrow-prev mobi-mbri" aria-hidden="true"></span>
                            <span class="sr-only visually-hidden visually-hidden visually-hidden">Previous</span>
                        </button>
                        <button class="embla__button embla__button--next">
                            <span class="mbr-iconfont mobi-mbri-arrow-next mobi-mbri" aria-hidden="true"></span>
                            <span class="sr-only visually-hidden visually-hidden visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
xxxxx
                        <section data-bs-version="5.1" class="slider02 mbr-embla stockm5 cid-ueUS0mfk3y" id="slider02-v">
    
    

    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="content-wrap">
                    <div class="embla" data-skip-snaps="true" data-align="center" data-contain-scroll="trimSnaps" data-loop="true" data-auto-play="true" data-auto-play-interval="4" data-draggable="true">
                        <div class="embla__viewport">
                            <div class="embla__container">
                                <div class="embla__slide slider-image item features-without-image" style="margin-left: 10px; margin-right: 10px;">
                                    <div class="slide-content">
                                        <div class="item-wrapper">
                                            <div class="card-box">
                                                <p class="item-text mbr-fonts-style display-7">
                                                    "I've been using this food delivery service for months now, and I
                                                    couldn't be happier! The delivery is always prompt, and the food
                                                    arrives hot and fresh."
                                                </p>
                                                <p class="item-name mbr-fonts-style display-7">
                                                    <strong>John M.</strong>
                                                </p>
                                                <p class="item-role mbr-fonts-style display-4">
                                                    Client
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="embla__slide slider-image item features-without-image" style="margin-left: 10px; margin-right: 10px;">
                                    <div class="slide-content">
                                        <div class="item-wrapper">
                                            <div class="card-box">
                                                <p class="item-text mbr-fonts-style display-7">
                                                    "Fantastic service! I ordered the Grilled Lemon Herb Chicken, and it
                                                    was amazing. The chicken was juicy, and the roasted vegetables."
                                                </p>
                                                <p class="item-name mbr-fonts-style display-7">
                                                    <strong>Emily R.</strong>
                                                </p>
                                                <p class="item-role mbr-fonts-style display-4">
                                                    Client
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="embla__slide slider-image item features-without-image" style="margin-left: 10px; margin-right: 10px;">
                                    <div class="slide-content">
                                        <div class="item-wrapper">
                                            <div class="card-box">
                                                <p class="item-text mbr-fonts-style display-7">
                                                    "Overall, a great experience. The Spaghetti Bolognese was delicious,
                                                    with a rich, flavorful sauce. The only reason I'm not giving five
                                                    stars."
                                                </p>
                                                <p class="item-name mbr-fonts-style display-7">
                                                    <strong>Michael S.</strong>
                                                </p>
                                                <p class="item-role mbr-fonts-style display-4">
                                                    Client
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="embla__slide slider-image item features-without-image" style="margin-left: 10px; margin-right: 10px;">
                                    <div class="slide-content">
                                        <div class="item-wrapper">
                                            <div class="card-box">
                                                <p class="item-text mbr-fonts-style display-7">
                                                    "The Vegetarian Stir-Fry was absolutely delicious and super fresh. I
                                                    appreciate the variety of vegetarian and vegan options available."
                                                </p>
                                                <p class="item-name mbr-fonts-style display-7">
                                                    <strong>Samantha L.</strong>
                                                </p>
                                                <p class="item-role mbr-fonts-style display-4">
                                                    Client
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="embla__slide slider-image item features-without-image" style="margin-left: 10px; margin-right: 10px;">
                                    <div class="slide-content">
                                        <div class="item-wrapper">
                                            <div class="card-box">
                                                <p class="item-text mbr-fonts-style display-7">
                                                    "Impressed with the quality and taste! I ordered the Beef
                                                    Stroganoff,
                                                    and it was like having a home-cooked meal. The portion size was
                                                    generous."
                                                </p>
                                                <p class="item-name mbr-fonts-style display-7">
                                                    <strong>David P.</strong>
                                                </p>
                                                <p class="item-role mbr-fonts-style display-4">
                                                    Client
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="embla__slide slider-image item features-without-image" style="margin-left: 10px; margin-right: 10px;">
                                    <div class="slide-content">
                                        <div class="item-wrapper">
                                            <div class="card-box">
                                                <p class="item-text mbr-fonts-style display-7">
                                                    "I had high hopes for this service based on the reviews, but my
                                                    experience was mixed. The Macaroni and Cheese was tasty, but it
                                                    wasn't as hot."
                                                </p>
                                                <p class="item-name mbr-fonts-style display-7">
                                                    <strong>Olivia K.</strong>
                                                </p>
                                                <p class="item-role mbr-fonts-style display-4">
                                                    Client
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="embla__button embla__button--prev">
                            <span class="mbr-iconfont mobi-mbri-arrow-prev mobi-mbri" aria-hidden="true"></span>
                            <span class="sr-only visually-hidden visually-hidden visually-hidden">Previous</span>
                        </button>
                        <button class="embla__button embla__button--next">
                            <span class="mbr-iconfont mobi-mbri-arrow-next mobi-mbri" aria-hidden="true"></span>
                            <span class="sr-only visually-hidden visually-hidden visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
xxxxx
                        <section data-bs-version="5.1" class="pricing01 stockm5 cid-ueUS0Jp5v1" id="pricing01-w">
    

    
    

    <div class="container">
        <div class="row items-wrapper">
            <div class="item features-image col-12 col-lg-3">
                <div class="item-wrapper">
                    <div class="item-img">
                        <div class="image-wrap">
                            <img src="template/8bd2b3fc/img/f1d62348a2941713.jpeg" alt="Mobirise">
                        </div>
                        <div class="item-content">
                            <h4 class="item-price mbr-fonts-style display-7">
                                <strong>$3.00</strong>
                            </h4>
                            <p class="item-text mbr-fonts-style display-4">
                                Bagel with Cream Cheese
                            </p>
                        </div>
                    </div>
                    <div class="mbr-section-btn">
                        <a class="btn btn-primary-outline display-4" href="https://mobiri.se">
                            More
                        </a>
                        <a class="btn btn-secondary display-4" href="https://mobiri.se">
                            Buy now
                        </a>
                    </div>
                </div>
            </div>
            <div class="item features-image col-12 col-lg-3">
                <div class="item-wrapper">
                    <div class="item-img">
                        <div class="image-wrap">
                            <img src="template/8bd2b3fc/img/04e1460d8c451e6d.jpeg" alt="Mobirise">
                        </div>
                        <div class="item-content">
                            <h4 class="item-price mbr-fonts-style display-7">
                                <strong>$1.50</strong>
                            </h4>
                            <p class="item-text mbr-fonts-style display-4">
                                Chocolate Chip Cookie
                            </p>
                        </div>
                    </div>
                    <div class="mbr-section-btn">
                        <a class="btn btn-primary-outline display-4" href="https://mobiri.se">
                            More
                        </a>
                        <a class="btn btn-secondary display-4" href="https://mobiri.se">
                            Buy now
                        </a>
                    </div>
                </div>
            </div>
            <div class="item features-image col-12 col-lg-3">
                <div class="item-wrapper">
                    <div class="item-img">
                        <div class="image-wrap">
                            <img src="template/8bd2b3fc/img/839e4cc20062caeb.jpeg" alt="Mobirise">
                        </div>
                        <div class="item-content">
                            <h4 class="item-price mbr-fonts-style display-7">
                                <strong>$7.00</strong>
                            </h4>
                            <p class="item-text mbr-fonts-style display-4">
                                Fresh Avocado Toast
                            </p>
                        </div>
                    </div>
                    <div class="mbr-section-btn">
                        <a class="btn btn-primary-outline display-4" href="https://mobiri.se">
                            More
                        </a>
                        <a class="btn btn-secondary display-4" href="https://mobiri.se">
                            Buy now
                        </a>
                    </div>
                </div>
            </div>
            <div class="item features-image col-12 col-lg-3">
                <div class="item-wrapper">
                    <div class="item-img">
                        <div class="image-wrap">
                            <img src="template/8bd2b3fc/img/66eb002bfb1677c3.jpeg" alt="Mobirise">
                        </div>
                        <div class="item-content">
                            <h4 class="item-price mbr-fonts-style display-7">
                                <strong>$2.50</strong>
                            </h4>
                            <p class="item-text mbr-fonts-style display-4">
                                Ice Cream Cone
                            </p>
                        </div>
                    </div>
                    <div class="mbr-section-btn">
                        <a class="btn btn-primary-outline display-4" href="https://mobiri.se">
                            More
                        </a>
                        <a class="btn btn-secondary display-4" href="https://mobiri.se">
                            Buy now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
xxxxx
                        <section data-bs-version="5.1" class="footer01 stockm5 cid-ueUIjNGmqg" once="footers" id="footer01-9">
    

    
    

    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="content-wrap">
                    <div class="row">
                        <div class="col-12">
                            <h3 class="mbr-copy mbr-fonts-style display-4">
                                © Copyright 2030 Mobirise - All Rights Reserved
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
xxxxx
 `

let finalText = ``
template.split("xxxxx").forEach((e) => {
    try {
        finalText += htmlToSchema(e)
    } catch (e) {

    }
})

writeFileSync('output.txt', finalText, 'utf8')