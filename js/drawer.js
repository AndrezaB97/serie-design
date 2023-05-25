jQuery(function ($) {
  $(".js-menu__open").on("touchend click", function () {
    var menu = $(this).attr("data-menu");

    $(menu).toggleClass("js-menu__expanded");
    $(menu).parent().toggleClass("js-menu__expanded");
  });

  $(".js-menu__context, .js-menu__close").on(
    "touchend click",
    function (event) {
      if (
        $(event.target).hasClass("js-menu__context") ||
        $(event.target).hasClass("js-menu__close")
      ) {
        $(".js-menu__expanded").removeClass("js-menu__expanded");
      }
    }
  );
});
