const btnLeft = document.getElementById("left");
const btnRight = document.getElementById("right");
const sliderSection = document.querySelectorAll(".slider-section");
const slider = document.getElementById("slider");

let operacion = 0;
let count = 0;
const widthImg = 100 / sliderSection.length;

btnLeft.addEventListener("click", (e) => moveToLeft());
btnRight.addEventListener("click", (e) => moveToRight());

setInterval(() => moveToRight(), 10000);

const moveToRight = () => {
  if (count >= sliderSection.length - 1) {
    operacion = 0;
    count = 0;
    slider.style.transform = `translate(-${operacion}%)`;
  } else {
    operacion += widthImg;
    ++count;
    slider.style.transform = `translate(-${operacion}%)`;
  }
};

const moveToLeft = () => {
  --count;
  if (count < 0) {
    count = sliderSection.length - 1;
    operacion = widthImg * (sliderSection.length - 1);
    slider.style.transform = `translate(-${operacion}%)`;
  } else {
    operacion -= widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
  }
};
