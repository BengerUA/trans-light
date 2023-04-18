$(document).ready(function(){
  $('.slider').slick({
    autoplay:true,
    autoplaySpeed:5000,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
  });
});
$(document).ready(function(){
  $('.rent__slider').slick({
    autoplay:true,
    autoplaySpeed:5000,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.prev1'),
    nextArrow: $('.next1'),
  });
});

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let content1 = document.getElementById("content1");
let content2 = document.getElementById("content2");

btn1.addEventListener("click", function() {
  btn1.classList.add("active");
  btn2.classList.remove("active");

  content1.style.display = "block";
  content2.style.display = "none";
});

btn2.addEventListener("click", function() {
  btn2.classList.add("active");
  btn1.classList.remove("active");

  content2.style.display = "block";
  content1.style.display = "none";
});
