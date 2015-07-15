/*jshint -W117 */
$(document).ready(function() {

  $('#desktop-button').on('click', function(){
    ga('send', 'event', 'button', 'click', 'desktop-button');
  });
  $('#mobile-button').on('click', function(){
    ga('send', 'event', 'button', 'click', 'mobile-button');
  });

});

