function changeQuote() {
    i = getImage();
    document.img_promo.src = images[i];
    if (i < images.length - 1) {
      i++;
    } else {
      i = 0;
    }
    setTimeout("changeImg()", time);
  }
  window.onload = changeImg;