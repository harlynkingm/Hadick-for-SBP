jQuery(document).ready(function($) { 
    
    $.fn.scrollTo = function( target, options, callback ){
      if(typeof options == 'function' && arguments.length == 2){ callback = options; options = target; }
      var settings = $.extend({
        scrollTarget  : target,
        offsetTop     : 50,
        duration      : 500,
        easing        : 'swing'
      }, options);
      return this.each(function(){
        var scrollPane = $(this);
        var scrollTarget = (typeof settings.scrollTarget == "number") ? settings.scrollTarget : $(settings.scrollTarget);
        var scrollY = (typeof scrollTarget == "number") ? scrollTarget : scrollTarget.offset().top + scrollPane.scrollTop() - parseInt(settings.offsetTop);
        scrollPane.animate({scrollTop : scrollY }, parseInt(settings.duration), settings.easing, function(){
          if (typeof callback == 'function') { callback.call(this); }
        });
      });
    }
    
    $("#owl").owlCarousel({
        slideSpeed: 400,
        autoPlay: true,
        navigation: false,
        pagination: false,
        singleItem: true
    });
//    
//    $(".overlay").click(function(){
//        $(".overlay").fadeOut(200);
//    });
//    
//    $(".content-block").click(function(){
//        $(".overlay").fadeIn(200);
//    });
//    
    $(".candidate-header").click(function(){
        $(this).next().slideToggle();
    });
    
    $(".content-block").data('fading', false);
    
    $(".content-block").click(function(){
        var obj = $(this);
        if (!$(this).data('fading')){
            $(this).data('fading', true);
            if ($(this).children().first().is(":visible")){
                $(this).children().first().fadeToggle(200);
                $(this).children().first().next().fadeToggle(200);
                $(this).children().last().delay(200).fadeToggle(200);
            }
            else{
                $(this).children().last().fadeToggle(200);
                $(this).children().first().delay(200).fadeToggle(200);
                $(this).children().first().next().delay(200).fadeToggle(200);
            }
        }
        setTimeout(function(){
            obj.data('fading', false);
        }, 450);
    });
    
    $("#scroll-about").click(function(){
        $('body').scrollTo('#aboutUs');
    });
    $("#scroll-platform").click(function(){
        $('body').scrollTo('#platform');
    });
    $("#scroll-issues").click(function(){
        $('body').scrollTo('#issues');
    });
    $("#scroll-team").click(function(){
        $('body').scrollTo('#our-team');
    });
    
});