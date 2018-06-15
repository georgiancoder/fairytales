var menuli = $("#cat");
var slider = $("#sli");
var bull = false;

menuli.on("click", function () { 
    if(bull){
        slider.fadeIn()
    }else{
        slider.fadeOut()
    }
    bull = !bull
 })