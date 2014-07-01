// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require_tree .

$(document).foundation();
$(document).ready(function(){
  navSearchBox();
});

function navSearchBox() {
  $('input.top-nav-court-search').bind("enterKey",function(e){
    var query = $('input.top-nav-court-search').val();
    googleGeocode(query);
    $('input.top-nav-court-search').val("");
  });

  $('input.top-nav-court-search').keyup(function(e){
      if (e.keyCode == 13) {
        $(this).trigger("enterKey");
      }
  });

  $('button.top-nav-court-search').click(function(){
    var query = $('input.top-nav-court-search').val();
    googleGeocode(query);
    $('input.top-nav-court-search').val("");
  });
}

function googleGeocode(query) {
  geocoder = new google.maps.Geocoder();
  geocoder.geocode({ 'address': query }, function(results, status) {
    // use custom 'error' code to be used in controller
    if (status !== google.maps.GeocoderStatus.OK) { results[0].geometry.location.k = 'error'; }
    window.location.href = "/courts/search?lat=" + results[0].geometry.location.k + "&lon=" + results[0].geometry.location.A;
  });
}
