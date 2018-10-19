
window.onload = function () {
    if (localStorage.getItem("hasCodeRunBefore") === null) {
        if($('.cookie-banner').length) {
          $('.cookie-banner').slideDown(800);
        }
    }
}

$("#got-it").click(function(){
    localStorage.setItem("hasCodeRunBefore", true);
});
