
const headerSocials = document.querySelector('.header__socials');
const headerContentBlock = document.querySelector('.header__content-block');
function handleResponsiveLayout() {
    if (window.innerWidth < 571) {
        document.querySelector('.header__navigation').appendChild(headerSocials);
    } else {
        headerContentBlock.insertBefore(headerSocials, headerContentBlock.firstChild);
    }
}
handleResponsiveLayout()
window.addEventListener('resize', handleResponsiveLayout);
document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector('.header__burger');
    const headerNavigation = document.querySelector('.header__navigation');
    const body = document.querySelector('.body');
    burger.addEventListener('click', () => {
        headerNavigation.classList.toggle('active');
        body.classList.toggle('no-scroll')
    });
    const linkOpenElements = document.querySelectorAll('.header__link-open');
    linkOpenElements.forEach(function (element) {
        element.addEventListener('click', function () {
            const parentLi = this.closest('li');
            if (parentLi) {
                parentLi.classList.toggle('active');
            }
        });
    });
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 10) {
            header.classList.add('scroll');
        } else {
            header.classList.remove('scroll');
        }
    });
    function checkScroll() {
        const header = document.querySelector('header');
        if (window.scrollY > 10) {
            header.classList.add('scroll');
        } else {
            header.classList.remove('scroll');
        }
    }
    checkScroll()
    window.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);
    
});
