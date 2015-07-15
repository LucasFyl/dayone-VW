/*jshint -W117 */
$(document).ready(function() {

  var desktopButton = document.getElementById('desktop-button');
    addListener(desktopButton, 'click', function() {
    ga('send', 'event', 'button', 'click', 'desktop-button');
  });
  var mobileButton = document.getElementById('mobile-button');
    addListener(mobileButton, 'click', function() {
    ga('send', 'event', 'button', 'click', 'mobile-button');
  });

});

