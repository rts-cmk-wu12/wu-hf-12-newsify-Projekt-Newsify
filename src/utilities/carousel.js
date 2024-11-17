import Carousel from '../classes/carouselClass';

document.addEventListener('DOMContentLoaded', () => {
    new Carousel('#carousel', '#carousel__slides', '#carousel__dots', '#carousel__next');
});