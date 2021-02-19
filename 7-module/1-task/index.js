import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
    constructor(categories) {
        this.categories = categories;

        this.elem = document.createElement('div');

        this.elem.insertAdjacentHTML('afterbegin', `
            <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
                <img src="/assets/images/icons/angle-icon.svg" alt="icon">
            </button>
        
            <nav class="ribbon__inner" />
        
            <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
                <img src="/assets/images/icons/angle-icon.svg" alt="icon">
            </button>
        `);

        this.ribbonInner = this.elem.querySelector('.ribbon__inner');

        this.categories.forEach(item => {
            const ribbonItem = document.createElement('a');
            ribbonItem.classList.add('ribbon__item');
            ribbonItem.dataset.id = item.id;
            ribbonItem.setAttribute('href', '#');
            ribbonItem.innerHTML = item.name;
            this.ribbonInner.append(ribbonItem);
        });

        this.elem.append(this.ribbonInner);

        this.arrowLeft = this.elem.querySelector('.ribbon__arrow_left');
        this.arrowRight = this.elem.querySelector('.ribbon__arrow_right');



        this.ribbonInner.addEventListener('scroll', () => {
           if(this.ribbonInner.scrollLeft === 0) {
               this.arrowLeft.classList.remove('ribbon__arrow_visible');
           } else {
               this.arrowLeft.classList.add('ribbon__arrow_visible');
           }
           if(this.ribbonInner.scrollWidth - this.ribbonInner.scrollLeft - this.ribbonInner.clientWidth < 1) {
               this.arrowRight.classList.remove('ribbon__arrow_visible');
           } else {
               this.arrowRight.classList.add('ribbon__arrow_visible');
           }
        });
    }

    initArrows() {
        this.arrowLeft.addEventListener('click', () => {
            this.ribbonInner.scrollBy(350, 0);
        });

        this.arrowRight.addEventListener('click', () => {
            this.ribbonInner.scrollBy(-350, 0);
        });
    }
}
