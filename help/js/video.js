
//
// Data
var videos = [];
videos.push({ "id" : "1", "ref" : "WSQJ2vZENyw" });
videos.push({ "id" : "2", "ref" : "3GFNW5VtyRQ" });
videos.push({ "id" : "3", "ref" : "SQHZROiICbs" });
videos.push({ "id" : "4", "ref" : "svgU2DjMeYM" });
videos.push({ "id" : "5", "ref" : "5MVyrA-1UU4" });
videos.push({ "id" : "6", "ref" : "Xpw5htmTJZ4" });
videos.push({ "id" : "7", "ref" : "WO0W90oZlus" });


//
// Functions
function doResizeVideo() {

  var width = $( window ).width();
  var height = $( window ).height();
  var productVideoElement = $("#product-video");

  if (width > 1200) {
    width = 1200;
  }

  productVideoElement.width(width * .8);
  productVideoElement.height(width * .45);

  var heightPercentage = .15;

  if (width < 991) {
    heightPercentage = .1;
  }

  if (width > 991 && height < 600) {
    heightPercentage = .05;
  }

  productVideoElement.css('top', Math.floor(height * heightPercentage) + 'px');

}

var getUrlParameter = function getUrlParameter(sParam) {

    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }

    return null;
};

function findVideoRef(id) {

  for (var i=0; i < videos.length; i++) {
    if (videos[i].id == id) {
      return videos[i].ref;
    }
  }

  return null;
}


//
// Events
$(window).on('resize', function() {
  doResizeVideo();
});


//
// On Load
$(function() {

  var videoId = getUrlParameter('vid');

  if (videoId == null) {
    return;
  }

  var videoRef = findVideoRef(videoId);

  if (videoRef == null) {
    return;
  }

  var productVideoFrame = $(".product-video-frame");
  productVideoFrame.attr('src', 'https://www.youtube.com/embed/' + videoRef + '?rel=0&amp;modestbranding=1&amp;vq=hd720');

  doResizeVideo();
});
