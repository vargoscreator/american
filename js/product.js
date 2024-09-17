document.addEventListener('DOMContentLoaded', function() {
    let galleryThumbs = new Swiper(".product__slider .gallery-thumbs", {
        spaceBetween: 13,
        slidesPerView: 4,
        spaceBetween: 7,        
        loop: false,
        freeMode: true,
        loopedSlides: 4,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
            481: {
                spaceBetween: 24,
            },
            741: {
                spaceBetween: 30,
            },
        },
    });
    let galleryTop = new Swiper(".product__slider .gallery-top", {
        spaceBetween: 10,
        loop: false,
        loopedSlides: 4,
        thumbs: {
            swiper: galleryThumbs,
        },
    });   
    const dropdownItems = document.querySelectorAll('.product__dropdown-item')
    const dropdownNames = document.querySelectorAll('.product__dropdown-name');
    dropdownNames.forEach(name => {
        name.addEventListener('click', function() {
            const item = this.closest('.product__dropdown-item');
            if (item.classList.contains('active')) {
                item.classList.remove('active');
            } else {
                dropdownItems.forEach(i => {
                    i.classList.remove('active');
                });
                item.classList.add('active');
            }
        });
    });


    const garageSwiper = new Swiper(".garage__slider", {
        loop: true,
        spaceBetween: 13,
        slidesPerView: 2,
        speed: 500,
        breakpoints: {
            741: {
                slidesPerView: 3,
            },
            1001: {
                slidesPerView: 4,
            },
        },
    });
});