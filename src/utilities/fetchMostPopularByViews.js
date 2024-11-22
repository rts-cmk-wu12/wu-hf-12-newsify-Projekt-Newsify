import sections from '../json/apiNewsCategories.json';
import truncate from './textfunctions.js';
console.log(sections);

import { fetchMostPopularByViews } from './nyt';
const popularNews = await fetchMostPopularByViews();
// console.log(popularNews.results);

const categorySections = [...new Set(popularNews.results.map(article => article.section.toUpperCase()))];
// console.log(categorySections);

categorySections.forEach(category => {
    const matchingArticles = popularNews.results.filter(article => article.section.toUpperCase() === category);
    const detailsElement = document.createElement('details');
    detailsElement.classList.add('category__details');
    detailsElement.innerHTML = `
        <summary class="category__summary category__summary--arrow">
            <img class="category__logo" src="./images/newsify_logo.svg" alt="logo">
            <h2 class="category__name">${category}</h2>
        </summary>`;

    matchingArticles.forEach(article => {
        const articleElement = document.createElement('article');
        articleElement.classList.add('category__article');
        articleElement.innerHTML = `
        <img class="category__image" src="https://placehold.co/600x400" alt="">
        <div class="category__description">
            <h3 class="category__description-heading">${article.title}</h3>
            <p class="category__description-text">${truncate(article.abstract, 60)}</p>
        </div>`;
        detailsElement.append(articleElement);
        articleElement.addEventListener('click', () => {
            window.open(article.url);
        });
    })

    const categoryContainerElement = document.querySelector('.category');
    categoryContainerElement.append(detailsElement);
})