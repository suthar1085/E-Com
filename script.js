const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category');

// Set the category title dynamically
document.getElementById('category-title').textContent = `Category: ${capitalizeFirstLetter(category)}`;

// Fetch the JSON file and render products
fetch('Ecommercedata.json')
    .then(response => response.json())
    .then(data => renderProducts(data, category))
    .catch(error => console.error('Error loading JSON:', error));

// Function to render products based on the category
function renderProducts(data, category) {
    const products = data.products[0][category];
    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = ''; // Clear any previous content

    // Create product cards for each product in the selected category
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'g-col-3 g-col-md-1';

        productCard.innerHTML = `
                <a href="product.html?id=${product.id}">
                    <div class="imgs"><img src="${product.thumbnail}" alt="${product.title}" class="image" height="auto" width="100%"></div>
                    <div class="d-flex justify-content-between">
                    <h4 class="product-title w-75">${product.title}</h4>
                    <h5 class="product-price d-flex align-items-center">Rs. ${product.price}</h5>
                    </div>
                </a>
                `;

        productsContainer.appendChild(productCard);
    });
}

// Function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}




// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}







