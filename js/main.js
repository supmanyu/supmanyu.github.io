$(function () {
    $(document).scroll(function () {
      var $nav = $(".fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });

$(function () {
    $(document).scroll(function () {
        var $footer = $(".fixed-bottom");
        $footer.toggleClass('scrolled', $(this).scrollTop() > $footer.height());
    });
});