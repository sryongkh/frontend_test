// let logo = document.querySelector("#logo");
// let scroll_tracking = window.scrollY;
// let value = window.addEventListener("scroll", function () {
//   scroll_tracking = window.scrollY;
//   console.log(scroll_tracking);
//   if (scroll_tracking > 0 && scroll_tracking <= 600) {
//     logo.style.width = "10%";
//   }
// });

$(document).ready(function () {
  var initialWidth = $("#logo").width();
  var minWidth = 1000;
  $(document).scroll(function () {
    // var x = initialWidth - (minWidth * $(window).scrollTop());

    // $("#logo").css("width", x);

    var min_size = Math.min(1000, 1 - 0.0015 * $(this).scrollTop());
    scroll_tracking = window.scrollY;
    console.log(scroll_tracking);
    console.log(min_size);
    
  });
});
