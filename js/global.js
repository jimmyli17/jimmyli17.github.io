
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

$("#home-button").click(function() {
     $('html, body').animate({
         scrollTop: $("section.home-hero").offset().top
      }, 800);
 });

$("#about-button").click(function() {
    $('html, body').animate({
        scrollTop: $("section.home-about").offset().top
     }, 800);
});

$("#see-my-work").click(function() {
    $('html, body').animate({
        scrollTop: $("section.portfolio").offset().top
     }, 800);
});

$("#contact-button").click(function() {
    $('html, body').animate({
        scrollTop: $("footer").offset().top
     }, 800);
});

$("#home-button").scrollTo('section.home-hero');

$("#about-button").scrollTo('section.home-about');

$("#see-my-work").scrollTo('section.portfolio');

$("#contact-button").scrollTo('footer');
