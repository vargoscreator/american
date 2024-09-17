const bathroomSwiper = new Swiper(".bathroom__slider", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    breakpoints: {
        679: {
            spaceBetween: 17,
            slidesPerView: 2,
        },
    },
    navigation: {
        nextEl: ".bathroom__slider-next",
        prevEl: ".bathroom__slider-prev"
    },
    speed: 500
});