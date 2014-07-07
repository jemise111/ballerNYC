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
//= require search

$(document).foundation();
$(document).ready(function(){
  navSearchBox();
  courtResultsScripts();
  setWelcomeTopHeight();
  animatedTyping();
  learnMoreLink();
  displaySignInForm();
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
  if (query !== '') {
    geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': query }, function(results, status) {
      // use custom 'error' code to be used in controller
      mine = results;
      console.log(status);
      if (status !== google.maps.GeocoderStatus.OK) { results[0].geometry.location.k = 'error'; }
      window.location.href = "/courts/search?lat=" + results[0].geometry.location.k + "&lon=" + results[0].geometry.location.B;
    });
  }
}

function animatedTyping() {
  if ($('#animated-typing').size() > 0) {
    var toAdd = ["F", "i", "n", "d", " ", "A", " ", "C", "o", "u",
                   "r", "t",".", " ","","","<br>","&nbsp;","&nbsp;","&nbsp;",
                   "S", "t", "a", "r", "t", " ", "B", "a", "l", "l","i", "n",
                   "'","<br>","","","","",
                   "<a href='#' id='learn-more-link'>Learn More <i class='fa fa-angle-down fa-lg'></i></a>"];
    $.each(toAdd, function(index, element){
      setTimeout(function(){
        $('#animated-typing').append(element);
      }, 80*index);
    });
  }
}

function setWelcomeTopHeight() {
  var height = $(window).height() - $('.top-bar').height();
  $('#welcome-top').height(height);
}

function learnMoreLink() {
  $('#animated-typing').on('click', 'a', function(e) {
    e.preventDefault();
    var offset = $('#welcome-about').offset().top;
    // to achieve "snap scroll" effect we need 3 setTimeouts
    setTimeout(function(){
      $('html, body').animate({
        scrollTop: $(window).scrollTop() + 3
      }, 200);
    }, 40);
    setTimeout(function(){
      $('html, body').animate({
        scrollTop: $(window).scrollTop() + 6
      }, 200);
    }, 40);
    setTimeout(function(){
      $('html, body').animate({
        scrollTop: offset
      }, 200);
    }, 200);
  });
}

function displaySignInForm() {
  setTimeout(function() {
    $('#sign-in-form').css('visibility','visible').hide().fadeIn('slow');
  }, 3500);
}
