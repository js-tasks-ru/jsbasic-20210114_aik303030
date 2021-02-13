import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {

    this.slidesArr = slides;
    
    this.elem = document.createElement('div');
    this.elem.classList.add('carousel');
    this.elem.insertAdjacentHTML('afterbegin', `
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
      <div class="carousel__inner">
      </div>
    `);

    this.carouselInner = this.elem.querySelector('.carousel__inner');

    for(let slide of this.slidesArr) {
      const slideInner = document.createElement('div');
      slideInner.insertAdjacentHTML('afterBegin', `
        <div class="carousel__slide" data-id="${slide.id}">
        <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${slide.price}</span>
          <div class="carousel__title">${slide.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>
      `);

      this.carouselInner.appendChild(slideInner);

      const addingProductEvent = new CustomEvent("product-add", {
        detail: slide.id,
        bubbles: true
      });

      const button = slideInner.querySelector('.carousel__button');

      button.addEventListener('click', () => {
        this.elem.dispatchEvent(addingProductEvent);
      });
    }

    this.arrowRight = this.elem.querySelector('.carousel__arrow_right');
    this.arrowLeft = this.elem.querySelector('.carousel__arrow_left');
    this.slideIndex = 0;
    this.sliderTransform = 0;
    this.slides = this.elem.querySelectorAll('.carousel__slide');
  }

  checkDisplay() {
    if (this.slideIndex === 0) {
      this.arrowLeft.style.display = 'none';
    } else {
      this.arrowLeft.style.display = '';
    }

    if (this.slideIndex === this.slides.length - 1) {
      this.arrowRight.style.display = 'none';
    } else {
      this.arrowRight.style.display = '';
    }
  }

  initCarousel() {
    this.checkDisplay();
    const carouselInner = this.elem.querySelector('.carousel__inner');
    const slides = this.elem.querySelectorAll('.carousel__slide');

    let sliderTransform = 0;

    this.arrowLeft.addEventListener('click', () => {
      const slide = slides[slideIndex];
      const width = slide.offsetWidth;
      sliderTransform = sliderTransform + width;
      carouselInner.style.transform = `translateX(${sliderTransform}px)`;
      this.slideIndex--;
      this.checkDisplay();
    });

    this.arrowRight.addEventListener('click', () => {
      const slide = slides[slideIndex];
      const width = slide.offsetWidth;
      sliderTransform = sliderTransform - width;
      carouselInner.style.transform = `translateX(${sliderTransform}px)`;
      this.slideIndex++;
      this.checkDisplay();
    });
  }
}
