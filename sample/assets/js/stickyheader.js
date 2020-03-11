// Sticky Header from 80 px scroll down

(function ($, Drupal) {
  Drupal.behaviors.westham = {
    attach: function (context, settings) {
      $("body", context).once('body').each(function () {
        $(window).scroll(function() {
          if ($(document).scrollTop() > 80) {
            $('.whu-header-stripe').addClass( "sticky-header" );
          }
          else {
            $('.whu-header-stripe').removeClass( "sticky-header" );
          }
        });
      });
    }
  };
})(jQuery, Drupal);
