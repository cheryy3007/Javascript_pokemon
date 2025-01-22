import pokemons from "./pokemons.js";
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const productList = Array.from(document.querySelectorAll('.card')); // Преобразуем NodeList в массив

function filterByName() {
    const searchValue = searchInput.value.toLowerCase().trim();

    const filteredProducts = productList.filter(product => {
        const productName = product.getAttribute('data-name').toLowerCase();
        return productName.includes(searchValue);
    });

    productList.forEach(product => product.style.display = 'none');
    filteredProducts.forEach(product => product.style.display = 'block');
}
function searchProduct() {
    const searchValue = searchInput.value.toLowerCase().trim();

    const filteredProducts = productList.filter(product => {
        const productName = product.querySelector('.name').textContent.toLowerCase();
        return productName.includes(searchValue);
    });

    productList.forEach(product => product.style.display = 'none');
    filteredProducts.forEach(product => product.style.display = 'block');

    if (filteredProducts.length === 0) {
        alert('No Pokémon found!');
    }
}
searchButton.addEventListener('click', searchProduct);
searchInput.addEventListener('keypress', event => {
    if (event.key === 'Enter') {
        searchProduct();
    }
});


