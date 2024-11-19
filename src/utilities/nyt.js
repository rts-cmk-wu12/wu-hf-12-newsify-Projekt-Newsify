const API_KEY = 'AA6iA4a5XkBbnhrqoa01wltF6JwD8d84'

const BASE_URL = 'https://api.nytimes.com/svc/';

const endpoints = {
    mostPopularByView: 'mostpopular/v2/viewed/'
}

async function fetchMostPopularByViews(days = 1){
    const url = new URL(`${days}.json`, BASE_URL + endpoints.mostPopularByView);

    url.searchParams.set('api-key', API_KEY);

    const response = await fetch(url);
    const data = await response.json();
    
    return data;
}

module.exports = { fetchMostPopularByViews };