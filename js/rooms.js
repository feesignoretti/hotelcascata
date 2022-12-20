$(".icon-box").hover(
  function () {
    $(".room-img").removeClass('show');
    var room = $(this).data("room");
    $("#" + room).addClass("show");
  },
  function () {
    var room = $(this).data("room");
    $("#" + room).removeClass("show");
    setTimeout(() => {
      if ($(".room-img.show").length === 0) {
        $("#" + $(".icon-box").data("room")).addClass("show");
      }
    }, 50);
  }
);

if ($(".room-img.show").length === 0) {
  $("#" + $(".icon-box").data("room")).addClass("show");
}
