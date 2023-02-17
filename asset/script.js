// let logo = document.querySelector("#logo");
// let scroll_tracking = window.scrollY;
// let value = window.addEventListener("scroll", function () {
//   scroll_tracking = window.scrollY;
//   console.log(scroll_tracking);
//   if (scroll_tracking > 0 && scroll_tracking <= 600) {
//     logo.style.width = "10%";
//   }
// });

$(function() {

  $(window).scroll(function() {
    
    var mass = $(this).scrollTop();
    console.log(mass)
    // $('#expandable').css('transform', 'scale(' + mass + ')');
    if (mass == '200') {
      $('#logo').css('transform', 'scale(100px)')
    }
  });
});


