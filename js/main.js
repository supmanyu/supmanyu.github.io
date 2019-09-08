$(function () {
    $(document).scroll(function () {
      var $nav = $(".fixed-top");
      var $jumbotron = $(".jumbotron");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $jumbotron.height());
    });
  });

//Hamburger animation

$(function () {
  $(document).ready(function () {
    $('.first-button').on('click', function () {
      $('.animated-icon1').toggleClass('open');
    });
    $('.second-button').on('click', function () {
      $('.animated-icon2').toggleClass('open');
    });
    $('.third-button').on('click', function () {
      $('.animated-icon3').toggleClass('open');
    });
  });
});