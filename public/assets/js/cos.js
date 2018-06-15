var menuli = $("#cat");
var slider = $("#sli");
var bull = false;

menuli.on("click", function () { 
    if(bull){
        slider.fadeOut()
    }else{
        slider.fadeIn()
    }
    bull = !bull
 })