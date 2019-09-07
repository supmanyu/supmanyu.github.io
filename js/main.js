$(function () {
    $(document).scroll(function () {
      var $nav = $(".fixed-top");
      var $jumbotron = $(".jumbotron");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $jumbotron.height());
    });
  });
