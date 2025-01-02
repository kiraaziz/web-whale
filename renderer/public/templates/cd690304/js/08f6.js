(function () {

    function _dataApiHandler(event) {

        if (event.type === 'resize') {
            document.body.classList.remove('navbar-dropdown-open');
            document.querySelector('.navbar-dropdown').querySelector('.navbar-collapse').classList.remove('show');
            document.querySelector('.navbar-dropdown').classList.remove('opened');
            Array.from(document.querySelector('.navbar-dropdown').querySelectorAll('.navbar-toggler[aria-expanded="true"]')).forEach(el => {
                let target = el.querySelector(el.getAttribute('data-target'));
                if (target) {
                    target.classList.remove('in');
                    target.setAttribute('aria-expanded', 'false');
                    el.setAttribute('aria-expanded', 'false');
                }

            });
        }

        let scrollTop = document.documentElement.scrollTop;

        Array.from(document.querySelectorAll('.navbar-dropdown')).forEach(el => {

            if (!el.matches('.navbar-fixed-top')) return;

            if (el.matches('.transparent') && !el.classList.contains('opened')) {
                if (scrollTop > 0) {
                    el.classList.remove('bg-color');
                } else {
                    el.classList.add('bg-color');
                }
            }

            if (scrollTop > 0) {
                el.classList.add('navbar-short');
            } else {
                el.classList.remove('navbar-short');
            }

        });
    }


    var _timeout;
    var windowEvents = ['scroll', 'resize'];
    windowEvents.forEach(eventName => {
        document.addEventListener(eventName, event => {
            clearTimeout(_timeout);
            _timeout = setTimeout(function () {
                _dataApiHandler(event);
            }, 10);
        });
    });


    const dropdownEvents = ['show.bs.collapse', 'hide.bs.collapse'];
    dropdownEvents.forEach(eventName => {
        document.addEventListener(eventName, ({ target }) => {
            const dropDown = target.closest('.navbar-dropdown');

            if (!dropDown) return;

            if (eventName === 'show.bs.collapse') {
                document.body.classList.add('navbar-dropdown-open')
                dropDown.classList.add('opened')
            } else {
                document.body.classList.remove('navbar-dropdown-open');
                dropDown.classList.remove('opened');
                window.dispatchEvent(new Event('scroll.bs.navbar-dropdown.data-api'));
                dropDown.dispatchEvent(new Event('collapse.bs.navbar-dropdown'));
            }
        })
    });

    const isBuilder = document.querySelector('html').classList.contains('is-builder');

    if (!isBuilder){
        document.addEventListener('click', function(event) {
            const target = event.target;
            if (target.classList.contains('nav-link') || target.parentNode.classList.contains('nav-link')) return;
            const navbarContent = document.querySelector('#navbarSupportedContent');
            const navbarDropdown = document.querySelector('.navbar-dropdown');
            const isNavbarExpanded = navbarContent.classList.contains('show');
            const isNavItemLink = target.closest('.nav-item a:not(.dropdown-toggle)');        
            const isNavbarDropdownCollapsed = navbarDropdown.classList.contains('collapsed');
            if (window.matchMedia('(max-width: 991px)').matches || isNavbarDropdownCollapsed) {
              if (isNavbarExpanded && !target.closest('.navbar-collapse') || isNavItemLink) {
                new bootstrap.Collapse(navbarContent);
              }
            }
          });
    }
    
    document.addEventListener('collapse.bs.nav-dropdown', event => {
        let dropDown = event.relatedTarget.closest('.navbar-dropdown');
        if (dropDown) {
            let toggler = dropDown.querySelector('.navbar-toggler[aria-expanded="true"]');
            if (toggler) {
                toggler.dispatchEvent(new Event('click'));
            }
        }
    });

    const dropdowns = document.querySelectorAll('.nav-link.dropdown-toggle')
    dropdowns.forEach(item => {
        item.addEventListener('click', e => {
            e.preventDefault();
            e.target.parentNode.classList.toggle('open');
        })
    })
})();