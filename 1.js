$(document).ready(function() {

  $(".mouse").click(function() {
    $('body,html').animate({ scrollTop: $('#khoiedu').offset().top }, 700);
  });
});