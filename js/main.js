$(function(){
   $('.bxslider').bxSlider({
    minSlides: 2,
    maxSlides: 6,
    slideWidth: 150,
    pager:false,
    controls:false,
    mode: 'horizontal',
    auto:true,
    slideMargin: 10
  });
});


$(".leftPaddle").click(function() {
        var incr=$(".wrapper-scroll").scrollLeft();
        incr=incr+200;
        $('.wrapper-scroll').animate({
            scrollLeft: incr
        }, 500);
    });

$(".rightPaddle").click(function() {
    var incr=$(".wrapper-scroll").scrollLeft();
    incr=incr-200;
    $('.wrapper-scroll').animate({
        scrollLeft: incr
    }, 500);
});


wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();