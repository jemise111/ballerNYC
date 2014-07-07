function courtResultsScripts() {
  // test that we're on the court search result page
  if ($('#court-search-results').length > 0) {
    courtResultOverlay();
    initializeGoogleMap();
  }
}

function courtResultOverlay(){
  if ($(window).width() > 630) {
    $(".result-court-box-inner").mouseenter(function(){
      $(this).find('.result-court-footer').animate({
        "margin-top": "-50px"
      }, 100);
    });
    $(".result-court-box-inner").mouseleave(function(){
      $(this).find('.result-court-footer').animate({
        "margin-top": "-25px"
      }, 100);
    });
  }
}

function initializeGoogleMap(){
  var queryString = window.location.href.split("?")[1];
  var lat = parseFloat(queryString.split("&")[0].replace(/lat=/,""));
  var lon = parseFloat(queryString.split("&")[1].replace(/lon=/,""));
  var centerPoint = new google.maps.LatLng(lat, lon);
  var mapOptions = {
    zoom: 14,
    center: centerPoint,
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
    },
    scrollwheel: false,
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.SMALL
    }
  };
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  placeMarkers(map);
}

function placeMarkers(map) {
  $('.result-court-box-inner img').each(function(i, element){
    var latLon = element.src.substring(element.src.indexOf('center=') + 7, element.src.indexOf('&size'));
    var lat = parseFloat(latLon.split(",")[0]);
    var lon = parseFloat(latLon.split(",")[1]);
    setTimeout(function(){
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(lat, lon),
        animation: google.maps.Animation.DROP,
        icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
        map: map
      });
    }, 1000 + i*100);
  });
  setupMarkerAnimation(map);
}

function setupMarkerAnimation(map){
  var marker;
  if ($(window).width() > 630) {
    $(".result-court-box-inner img").mouseenter(function(){
      var source = $(this).attr("src");
      var latLon = source.substring(source.indexOf('center=') + 7, source.indexOf('&size'));
      var lat = parseFloat(latLon.split(",")[0]);
      var lon = parseFloat(latLon.split(",")[1]);
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(lat, lon),
        icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
        map: map
      });
    });
    $(".result-court-box-inner img").mouseleave(function(){
      marker.setMap(null);
    });
  }
}
