function outerFind(el, selector) {
    var elements = Array.from(el.querySelectorAll(selector));
    if (el.matches(selector)) elements.splice(0, 0, el);
    return elements;
}

function updateId(target) {
    if (target.querySelectorAll('.nav-tabs').length !== 0) {
        outerFind(target, 'section[id^="tabs"], section.tabs, section[id^="extTabs"], section [class*="-tabs"]').forEach(function (el) {
            if (el.tagName !== 'SECTION') return;
            var componentID = el.getAttribute('id');
            var tabsNavItems = el.querySelectorAll('.nav-tabs > .nav-item');
            var tabPanes = el.querySelectorAll('.tab-pane');
            tabPanes.forEach((el, index) => {
                el.setAttribute('id', componentID + '_tab' + index);
                if (index === 0) {
                    if (!el.classList.contains('active')) el.classList.add('active');
                    if (!el.classList.contains('show')) el.classList.add('show');
                    return;
                } else {
                    el.classList.remove('active');
                    el.classList.remove('show');
                }
            })

            tabsNavItems.forEach((el, index) => {
                var item = el.querySelector('a');
                item.setAttribute('href', '#' + componentID + '_tab' + index);
                // temp fix
                if (target.getAttribute('data-bs-version') && target.getAttribute('data-bs-version').startsWith('5')) item.setAttribute('data-bs-toggle', 'tab');
                if (index === 0) {
                    if (!item.classList.contains('active')) item.classList.add('active');
                    if (!item.classList.contains('show')) item.classList.add('show');
                    return;
                } else {
                    item.classList.remove('active');
                    item.classList.remove('show');
                    item.removeAttribute('active');
                }
            })
        });
    }
}

// Mobirise Initilizaton
var $,
    isJQuery = typeof jQuery == 'function';
if (isJQuery) $ = jQuery;
var isBuilder = document.querySelector('html').classList.contains('is-builder');

if (isBuilder && isJQuery) {
    $(document).on('add.cards', function (e) {
        updateId(e.target);
    });
} else {
    if (typeof window.initTabsPlugin === 'undefined') {
        window.initTabsPlugin = true;
        updateId(document.body);
    }
}