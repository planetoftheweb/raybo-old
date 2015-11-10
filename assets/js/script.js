(function ($) {
    "use strict";
    $(document).ready(function(){

    var $window = $(window),
    $image = $('.post .header-background');

    $window.on('scroll', function() {
      var top = $window.scrollTop();

      if (top < 0 || top > 1500) { return; }
      $image
        .css('transform', 'translate3d(0px, '+top/2+'px, 0px)')
        .css('opacity', 1-Math.max(top/($window.height()*0.5), 0));
    });
    $window.trigger('scroll');

//    var height = $('.article-image').height();
    $('.post-content').css('padding-top', $window.height() + 'px');

    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({ scrollTop: target.offset().top }, 500);
          return false;
        } //target.length
      } // if replace
    }); // target links on page

  $("input").focus(function() {
    $('.sitesearch').addClass("focus");
  });

  $("input").blur(function() {
    $('.sitesearch').removeClass("focus");
  });

  $( "body" ).keypress(function(e) {
      $('.sitesearch input').focus();
  });


  $( "body" ).keyup(function(e) {
    if (e.keyCode == 27) {
      $('.sitesearch input').val(null);
      $('.sitesearch input').blur();
    }
  });


  }); // document ready
}(jQuery)); // anonymous closure



(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-58547762-1', 'auto');
ga('send', 'pageview');
