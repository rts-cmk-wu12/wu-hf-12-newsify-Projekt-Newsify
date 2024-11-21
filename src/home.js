require("../style/main.scss");
require("../style/home.scss");

const API_URL = "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=A96OnmG6coXjgi6Hcr90iWAFDFNcOUoO";
const API_KEY = "A96OnmG6coXjgi6Hcr90iWAFDFNcOUoO";
export async function fetchNews() {
    const response = await fetch(API_URL)
 
    if (!response.ok){
        console.log(response.statusText)
    }
    const data = await response.json()
    return data
}


console.log(await fetchNews())