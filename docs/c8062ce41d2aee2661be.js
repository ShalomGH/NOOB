document.addEventListener("DOMContentLoaded", function () {
  var moveArea = document.querySelector(".move-area");
  var eye = document.querySelector(".eye");
  moveArea.addEventListener("mousemove", function (event) {
    var x = eye.offsetLeft + eye.offsetWidth / 2;
    var y = eye.offsetTop + eye.offsetHeight / 2;
    var rad = Math.atan2(event.pageX - x, event.pageY - y);
    var rot = rad * (180 / Math.PI) * -1 + 180;
    eye.style.transform = 'rotate(' + rot + 'deg)';
  });
});
$(document).ready(function () {
  $(".move-area").mousemove(function (event) {
    var eye = $(".eye");
    var x = eye.offset().left + eye.width() / 2;
    var y = eye.offset().top + eye.height() / 2;
    var rad = Math.atan2(event.pageX - x, event.pageY - y);
    var rot = rad * (180 / Math.PI) * -1 + 180;
    eye.css({
      "transform": "rotate(" + rot + "deg)"
    });
  });
});