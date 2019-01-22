function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.right === "-360px") {
      x.style.right = "0px";
    } else {
      x.style.right = "-360px";
    }

    var x = document.getElementById("spin");
    if (x.style.transform === "rotateZ(0deg)") {
      x.style.transform = "rotateZ(-405deg)";
    } else {
      x.style.transform = "rotateZ(0deg)";
    }
  }

 // Hide header below 150px on scroll
$(window).scroll(function () {
  if ($(this).scrollTop() < 150) {
      $('nav').css({
          'padding': '30px 0px'
      });
  }
});
// Show header above 50px on scroll
$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
      $('nav').css({
          'padding': '10px 0px'
      });
  }
});

 // Hide header below 150px on scroll
 $(window).scroll(function () {
  if ($(this).scrollTop() < 150) {
      $('div#myDIV').css({
          'padding': '164px 20px 20px 20px'
      });
  }
});
// Show header above 50px on scroll
$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
      $('div#myDIV').css({
        'padding': '124px 20px 20px 20px'
      });
  }
});