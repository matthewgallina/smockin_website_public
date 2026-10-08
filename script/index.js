$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

      if (target.length 
          && (target.selector == null || target.selector.indexOf('Carousel') == -1)) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

function doOpenVideo() {
  document.getElementById('product-video-popup').style.display = 'block';
  document.body.style.overflow = 'hidden';
  doResizeVideo();
}

function doCloseVideo() {
  document.getElementById('product-video-popup').style.display = 'none';
  document.body.style.overflow = 'scroll';
}

function doResizeVideo() {

  var width = $( window ).width();
  var height = $( window ).height();
  var productVideoElement = $("#product-video");

  if (width > 1200) {
    width = 1200;
  }

  productVideoElement.width(width * .7);
  productVideoElement.height(width * .4);

  var heightPercentage = .2;

  if (width < 991) {
    heightPercentage = .3;
  }

  if (width > 991 && height < 600) {
    heightPercentage = .1;
  }

  productVideoElement.css('top', Math.floor(height * heightPercentage) + 'px');

}

$(window).on('resize', function() {
  doResizeVideo();
});