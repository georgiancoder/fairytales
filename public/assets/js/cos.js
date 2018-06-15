var menuli = $("#cat");
var slider = $("#sli");
var bull = false;
slider.hide(0);
menuli.on("click", function () {
    if (bull) {
        slider.slideUp();
    } else {
        slider.slideDown();
    }
    bull = !bull
})