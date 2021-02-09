function initCarousel() {
  const carouselInner = document.querySelector('.carousel__inner');
  const arrowRight = document.querySelector('.carousel__arrow_right');
  const arrowLeft = document.querySelector('.carousel__arrow_left');
  const slides = document.querySelectorAll('.carousel__slide');

  let slideIndex = 0;
  arrowLeft.style.display = 'none';

  function checkDisplay() {
    if(slideIndex === 0) {
      arrowLeft.style.display = 'none';
    } else {
      arrowLeft.style.display = '';
    }
  
    if(slideIndex === 3) {
      arrowRight.style.display = 'none';
    } else {
      arrowRight.style.display = '';
    }
  }  

  arrowLeft.addEventListener('click', function() {
    const slide = slides[slideIndex];
    const width = slide.offsetWidth;
    console.log(width);
    carouselInner.style.transform = `translateX(${width}px)`;
    slideIndex--;
    checkDisplay();
  });

  arrowRight.addEventListener('click', function() {
    const slide = slides[slideIndex];
    const width = slide.offsetWidth;
    console.log(width);
    carouselInner.style.transform = `translateX(${-width}px)`;
    slideIndex++;
    checkDisplay();
  });
}
