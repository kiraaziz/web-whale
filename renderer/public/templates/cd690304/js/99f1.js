~(() => {
    const options = { align: 'center', draggable: false, skipSnaps: true, loop: false, autoPlay: false, autoPlayInterval: 5 }
    let carousels = []

    function setupPrevNextBtns (prevBtn, nextBtn, embla) {
        prevBtn.addEventListener('click', embla.scrollPrev, false)
        nextBtn.addEventListener('click', embla.scrollNext, false)
    }
        
    function disablePrevNextBtns (prevBtn, nextBtn, embla) {
        return () => {
            if (embla.canScrollPrev()) prevBtn.removeAttribute('disabled');
            else prevBtn.setAttribute('disabled', 'disabled')

            if (embla.canScrollNext()) nextBtn.removeAttribute('disabled');
            else nextBtn.setAttribute('disabled', 'disabled')
        }
    }

    function autoPlay(carouselId, bool, sec = 0) {
        const index = carousels.findIndex((obj) => obj.carouselId === carouselId)
        if (index === -1) return
        if (bool) {
            if (!carousels[index].intervalId) {
                carousels[index].intervalId = setInterval(() => {
                    if (!document.hidden) { 
                        const currentIndex = carousels.findIndex((obj) => obj.carouselId === carouselId)
                        if (currentIndex === -1) return
                        if(carousels[currentIndex].embla.scrollProgress() !== 1) {
                            carousels[currentIndex].embla.scrollNext()
                            return
                        }
                        carousels[currentIndex].embla.scrollTo(0)
                    }
                }, sec * 1000)
            }
        }
    }

    function initCarouseMultiple(target, options) {
        return new Promise((resolve, reject) => {
            const wrap = target.querySelector('.embla')
            const carouselId = target.getAttribute('id')
            const viewPort = wrap.querySelector('.embla__viewport')
            const prevBtn = wrap.querySelector('.embla__button--prev')
            const nextBtn = wrap.querySelector('.embla__button--next')
            let index = carousels.findIndex((obj) => obj.carouselId === carouselId)
            if (index !== -1) return
    
            const embla = EmblaCarousel(viewPort, options)
            const disablePrevAndNextBtns = disablePrevNextBtns(prevBtn, nextBtn, embla)
            
            setupPrevNextBtns(prevBtn, nextBtn, embla)
            
            embla.on('select', disablePrevAndNextBtns)
            embla.on('init', disablePrevAndNextBtns)
            carousels.push({carouselId , embla, intervalId: null})
            resolve(embla) 

        })
    }

    function getDataAttr(el) {
        const data = {}
        const array = []
        array.forEach.call(el.attributes, (attr) => {
            if (/^data-/.test(attr.name)) {
                var camelCaseName = attr.name.substr(5).replace(/-(.)/g, ($0, $1) => {
                    return $1.toUpperCase()
                })
                data[camelCaseName] = parseBool(attr.value)
            }
        })
        return data
    }

    function carouselDestroy(carouselId) {
        const index = carousels.findIndex((obj) => obj.carouselId === carouselId)
        if (index === -1) return
        if ('embla' in carousels[index]) carousels[index].embla.destroy()
        clearInterval(carousels[index].intervalId)
        carousels.splice(index, 1)
    }

    function parseBool(val) { return val === "true" ? true : val }

    function contains(whereObj, whatObj){
        const data = {}
        for(let key in whatObj) {
            if(!whereObj[key]) data[key] = false
        }
        return data
    }
    let add = false

    let $,
        isJQuery = typeof jQuery == 'function'
    if (isJQuery) $ = jQuery
    const isBuilder = document.querySelector('html').classList.contains('is-builder')
    if (isBuilder && isJQuery) {
        $(document).on('add.cards', (e) => {
            const hasClass = $(e.target).hasClass('mbr-embla');
            if (!hasClass || add) return Promise.resolve();

            const carouselId = e.target.getAttribute('id')
            carouselDestroy(carouselId)

            const buildOptions = getDataAttr(e.target.querySelector('.embla'))
            const falsyOptions = contains(buildOptions, options)
            const fnOptions = Object.assign(buildOptions, falsyOptions)
            fnOptions.draggable = false

            return initCarouseMultiple(e.target, fnOptions).then((embla) => {
                embla.reInit(fnOptions);
                autoPlay(carouselId, fnOptions.autoPlay, fnOptions.autoPlayInterval);
                add = true;
                setTimeout(() => {
                    add = false;
                }, 0);
            });
        }).on('delete.cards', (e) => {
            const carouselId = e.target.getAttribute('id')
            
            carouselDestroy(carouselId)
        }).on('changeParameter.cards', (e, paramName, value) => {
            if ($(e.target).hasClass('mbr-embla')) {
                const carouselId = e.target.getAttribute('id')
                const prodOptions = getDataAttr(e.target.querySelector('.embla'))
                const falsyOptions = contains(prodOptions, options)
                const fnOptions = Object.assign(prodOptions, falsyOptions)
                switch (paramName) {
                    case 'loop':
                        if (value) {
                            options.loop = true
                        } else {
                            options.loop = false
                        }
                        break;
                    case 'autoplay':
                        options.autoPlay = value
                        break;
                    case 'interval':
                        options.autoPlayInterval = +value
                        break;
                    default:
                        break;
                }
                carouselDestroy(carouselId)
                fnOptions.draggable = false
                initCarouseMultiple(e.target, fnOptions)
                autoPlay(carouselId, fnOptions.autoPlay, fnOptions.autoPlayInterval)
            }
        })
    } else {
        if (typeof window.initCarouseMultiplePlugin === 'undefined') {
            window.initCarouseMultiplePlugin = true
            document.querySelectorAll('.mbr-embla').forEach((el) => {
                const carouselId = el.getAttribute('id')
                const prodOptions = getDataAttr(el.querySelector('.embla'))
                const falsyOptions = contains(prodOptions, options)
                const fnOptions = Object.assign(prodOptions, falsyOptions)
                initCarouseMultiple(el, Object.assign(prodOptions, falsyOptions))
                autoPlay(carouselId, fnOptions.autoPlay, +fnOptions.autoPlayInterval)
            })
        }
    }
})()
