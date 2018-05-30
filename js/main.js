$(document).ready(function() {

});

$(window).scroll(function() {
  if ($(window).scrollTop() >= 200) {
    $('.header').addClass('sticky-header');
  } else {
    $('.header').removeClass('sticky-header');
  }
});
