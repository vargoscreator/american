document.addEventListener("DOMContentLoaded", function () {
    const reviewsSwiper = new Swiper(".reviews__slider", {
        loop: true,
        spaceBetween: 50,
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