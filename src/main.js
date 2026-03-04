import { searchProducts } from "./api.js"
import { debounce } from "./debounce.js"

const searchInput = document.getElementById("searchInput");
const resultsText = document.getElementById("results");

async function testSearch(query) {
    try {
        console.log("loading...");
        const results = await searchProducts(query);
        console.log('results', results)
        resultsText.innerHTML = results.length > 0 ? results.map(r => `<div>${r.name}</div>`).join("") : "Nema rezultata";
    }
    catch (err) {
        console.error("err", err.message);
    }
}

searchInput.addEventListener("input", debounce((e) => testSearch(e.target.value), 500))

