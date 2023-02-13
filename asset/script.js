window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 50 ||
    document.documentElement.scrollTop > 500
  ) {
    document.querySelector("#logo").style.width = "30%";
    document.querySelector("#logo").style.align = "center";
  } else {
    document.querySelector("#logo").style.width = "92%";
  }
}

var size = $("a").css("fontSize");
$("a").hover(
  function () {
    $(this).css("fontSize", "30px");
  },
  function () {
    $(this).css("fontSize", size);
  }
);
