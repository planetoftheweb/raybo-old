$(document).ready(function(){

  $(window).on('scroll', function() {
    var top = $(window).scrollTop();
    $('.background-image')
    .css('transform', 'translate3d(0px, '+top/3+'px, 0px)')
    .css('opacity', 1 - Math.max(top/700, 0));
    });

    $(window).trigger('scroll');

}); // document ready


(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-58547762-1', 'auto');
ga('send', 'pageview');
