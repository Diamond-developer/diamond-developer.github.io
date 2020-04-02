$(document).ready(function() {
  // alert("ok");
  $("#crolltop").click(function() {
    $('body,html').animate({ scrollTop: 0 }, 700);
  });

  $("#mouse").click(function() {
    $('body,html').animate({ scrollTop: $('#khoiedu').offset().top }, 700);
  });

  $("#gioithieu").click(function() {
    $('body,html').animate({ scrollTop: $('#khoiedu').offset().top }, 700);
  });

  $("#comment").click(function() {
    $('body,html').animate({ scrollTop: $('.cmt').offset().top }, 700);
  });

  $("#lienhe").click(function() {
    $('body,html').animate({ scrollTop: $('.jumbotron').offset().top }, 700);
  });

  $("#hoptac").click(function() {
    $('body,html').animate({ scrollTop: $('.jumbotron').offset().top }, 700);
  });

});