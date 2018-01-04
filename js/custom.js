$(document).ready(function(){
  $(window).on('scroll' , function(){
    if($(this).scrollTop() >= $('.our_services').offset().top){
      $('.scroll_top i').fadeIn(1000);
    }
    else{
      $('.scroll_top i').fadeOut(500);
    }
  });
  $('.scroll_top i').on('click' , function(){
      $('body , html').animate({
        scrollTop: 0 ,
      }, 1500);
  });
  $('.main-header .header-content #scroll').on('click' , function(){
    $('body , html').animate({
      scrollTop : $('.our_services').offset().top
    } , 1000);
  });
});
