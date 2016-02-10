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
        slideSpeed: 200,
        autoPlay: true,
        navigation: false,
        pagination: false,
        singleItem: true
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
    $("#scroll-timeline").click(function(){
        $('body').scrollTo('#timeline');
    });
    $("#scroll-contact").click(function(){
        $('body').scrollTo('#contact');
    });
    $("#scroll-top").click(function(){
        window.scrollTo(0, 0);
    });
    
    function getTimeRemaining(endtime) {
      var t = Date.parse(endtime) - Date.parse(new Date());
      var seconds = Math.floor((t / 1000) % 60);
      var minutes = Math.floor((t / 1000 / 60) % 60);
      var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      var days = Math.floor(t / (1000 * 60 * 60 * 24));
      return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
      };
    }

    function initializeClock(id, endtime) {
      var clock = $(id);
      var daysSpan = $(id + ' .days');
      console.log(daysSpan);
      var hoursSpan = $(id + ' .hours');
      var minutesSpan = $(id + ' .minutes');
      var secondsSpan = $(id + ' .seconds');

      function updateClock() {
        var t = getTimeRemaining(endtime);

        daysSpan.html(t.days);
        hoursSpan.html(('0' + t.hours).slice(-2));
        minutesSpan.html(('0' + t.minutes).slice(-2));
        secondsSpan.html(('0' + t.seconds).slice(-2));

        if (t.total <= 0) {
          clearInterval(timeinterval);
        }
      }

      updateClock();
      var timeinterval = setInterval(updateClock, 1000);
    }

    var deadline = new Date("March 31, 2016 12:00:00");
    initializeClock('#clockdiv', deadline);
    
});