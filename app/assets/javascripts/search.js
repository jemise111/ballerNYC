function courtResultOverlay(){
  if ($(window).width() > 630) {
    $(".result-court-box-inner img").mouseenter(function(){
      $(this).parent().find('.result-court-overlay').animate({
        "margin-top": "-50px"
      });
    });
    $(".result-court-box-inner img").mouseleave(function(){
      $(this).parent().find('.result-court-overlay').animate({
        "margin-top": "0px"
      });
    });
  }
}
