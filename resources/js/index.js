/**
 * index js
 */

$(document).ready(function () {

  /** scroll on button click */
  $('.js--scroll-to-start').click(function () {
    $('html, body').animate({
      scrollTop: $('.js--section-features').offset().top
    }, 1000);
  });
  
});
