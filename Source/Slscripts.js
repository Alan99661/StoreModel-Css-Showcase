var i = 0;
var images = [];
var time = 10000;
var list = [];

images[0] = "Source/img/img1.png";
images[1] = "Source/img/img2.png";
images[2] = "Source/img/img3.png";
images[3] = "Source/img/img4.png";

list[0] = document.getElementById("proli1");
list[1] = document.getElementById("proli2");
list[2] = document.getElementById("proli3");
list[3] = document.getElementById("proli4");

// function changeImg() {
//   // i = getImage();
//   document.img_promo.src = images[i];
//   if (i < images.length - 1) {
//     i++;
//     list[i].classList.add("selected");
//     list[i - 1].classList.remove("selected");
//     document.img_promo.style.animation = "promoswitch 1s";

//     // changeList(i);
//   } else {
//     i = 0;
//     // changeList(i);
//     list[i].classList.add("selected");
//     list[3].classList.remove("selected");
//   }
//   setTimeout("changeImg()", time);
// }
// window.onload = changeImg;

function getImage() {
  switch (document.img_promo.src) {
    case "/VRHS/Source/img/img1.png":
      i = 0;
    case "/VRHS/Source/img/img2.png":
      i = 1;
    case "/VRHS/Source/img/img3.png":
      i = 2;
    case "/VRHS/Source/img/img4.png":
      i = 3;
  }
  return i;
}

function changeList(select) {
  list.forEach((Element) => {
    if (Element == select) {
      Element.classList.add("selected");
    } else {
      Element.classList.remove("selected");
    }
  });
}
// document.getElementById("proli1").addEventListener("click",changeList(0));

//I am very sorry about this here
document.getElementById("proli1").addEventListener("click", Slidefunction1);
function Slidefunction1() {
  document.img_promo.style.animation = "promoswitch 1s";
  document.img_promo.src = "/VRHS/Source/img/img1.png";
  document.getElementById("proli1").classList.add("selected");
  document.getElementById("proli2").classList.remove("selected");
  document.getElementById("proli3").classList.remove("selected");
  document.getElementById("proli4").classList.remove("selected");
  i = 0;
}
document.getElementById("proli2").addEventListener("click", Slidefunction2);
function Slidefunction2() {
  document.img_promo.style.animation = "promoswitch 1s";
  document.img_promo.src = "/VRHS/Source/img/img2.png";
  document.getElementById("proli1").classList.remove("selected");
  document.getElementById("proli2").classList.add("selected");
  document.getElementById("proli3").classList.remove("selected");
  document.getElementById("proli4").classList.remove("selected");
  i = 1;
}
document.getElementById("proli3").addEventListener("click", Slidefunction3);
function Slidefunction3() {
  document.img_promo.style.animation = "promoswitch 1s";
  document.img_promo.src = "/VRHS/Source/img/img3.png";
  document.getElementById("proli1").classList.remove("selected");
  document.getElementById("proli2").classList.remove("selected");
  document.getElementById("proli3").classList.add("selected");
  document.getElementById("proli4").classList.remove("selected");
  i = 2;
}
document.getElementById("proli4").addEventListener("click", Slidefunction4);
function Slidefunction4() {
  document.img_promo.style.animation = "promoswitch 1s";
  document.img_promo.src = "/VRHS/Source/img/img4.png";
  document.getElementById("proli1").classList.remove("selected");
  document.getElementById("proli2").classList.remove("selected");
  document.getElementById("proli3").classList.remove("selected");
  document.getElementById("proli4").classList.add("selected");
  i = 3;
}
