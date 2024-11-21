import './scss/style.scss';

const { fetchMostPopularByViews } = require('./utilities/nyt');
const popularNews = await fetchMostPopularByViews();
console.log(popularNews.results[0]);


