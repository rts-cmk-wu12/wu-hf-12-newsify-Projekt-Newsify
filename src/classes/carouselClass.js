class Carousel {
    constructor(containerSelector, sliderSelector, dotsSelector, nextSelector) {
        this.container = document.querySelector(containerSelector);
        this.slider = document.querySelector(sliderSelector);
        this.dots = document.querySelector(dotsSelector);
        this.next = document.querySelector(nextSelector);
        this.currentIndex = 0;
        this.sliderWindowWidth = this.slider.offsetWidth;

        this.init();
    }

    init() {
        this.createDots();
        this.updateDots();
        this.next.addEventListener('click', () => this.moveToNextSlide());
    }

    createDots() {
        Array.from(this.slider.children).forEach((_, index) => {
            this.dots.innerHTML += `<div class="dot ${index === 0 ? 'fill' : ''}"></div>`;
        });
    }

    updateDots() {
        Array.from(this.dots.children).forEach((dot, index) => {
            dot.classList.toggle('currentDot', this.currentIndex === index);
        });
    }

    moveToNextSlide() {
        if (this.currentIndex < this.slider.children.length - 1) {
            this.currentIndex += 1;
        }

        const offset = this.currentIndex * this.sliderWindowWidth;
        this.slider.animate([{ transform: `translateX(-${offset}px)` }], { duration: 300, fill: 'both' });

        this.updateDots();
    }
}

export default Carousel;