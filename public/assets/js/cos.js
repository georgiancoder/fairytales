var menuli = $("#cat");
var slider = $("#sli");
var bull = false;
menuli.on("click", function () {
    if (bull) {
        slider.slideUp();
    } else {
        slider.slideDown();
        slide();
    }
    bull = !bull
})



function slide() {
    

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 8,
    spaceBetween: 5,
    loop: true,
    breakpoints: {
        1024: {
            slidesPerView: 4,
            spaceBetween: 5,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 5,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 5,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 5,
        }
    }
});

}