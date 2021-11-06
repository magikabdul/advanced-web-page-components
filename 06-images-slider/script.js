const sliderBox = document.querySelector('.slider-box');

const leftBtn = document.querySelector('.btn-left');
const rightBtn = document.querySelector('.btn-right');

const sliderImages = document.querySelectorAll('.slider-img');

const carouselWidth = 1400;
const carouselSpeed = 3000;

let index = 0;

let autoCarousel = setInterval(() => handleCarousel(true), carouselSpeed);

const handleCarousel = (isRight) => {
  isRight ? index++ : index--;

  if (index > sliderImages.length - 1) {
    index = 0;
  } else if (index < 0) {
    index = sliderImages.length -1;
  }
  sliderBox.style.transform = `translateX(${-index * carouselWidth}px)`;
  clearInterval(autoCarousel);
  autoCarousel = setInterval(() => handleCarousel(true), carouselSpeed);
}

rightBtn.addEventListener('click', () => handleCarousel(true));
leftBtn.addEventListener('click', () => handleCarousel());


