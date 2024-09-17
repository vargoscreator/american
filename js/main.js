document.addEventListener("DOMContentLoaded", function () {
    const heroSwiper = new Swiper(".hero__slider", {
        loop: true,
        spaceBetween: 0,
        slidesPerView: 1,
        allowTouchMove: false,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        speed: 1000
    });
    const infoSwiper = new Swiper(".info__slider", {
        slidesPerView: 2,
        loop: true,
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 1.5,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        breakpoints: {
            769: {
                spaceBetween: 24,
                slidesPerView: 3.78,
                centeredSlides: false,
            },
        },
        navigation: {
            nextEl: ".info__slider-next",
            prevEl: ".info__slider-prev"
        },
        speed: 500,
        pagination: {
            el: ".info__slider-pagination",
        },
    });
    const reviewsSwiper = new Swiper(".reviews__slider", {
        loop: true,
        spaceBetween: 40,
        slidesPerView: 1,
        navigation: {
            nextEl: ".reviews__slider-next",
            prevEl: ".reviews__slider-prev"
        },
        speed: 500,
        pagination: {
            el: ".reviews__slider-pagination",
        },
    });
});
