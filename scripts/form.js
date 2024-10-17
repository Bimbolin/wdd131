// Example product array of objects
const products = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" }
];
// Populate the product select element with options
window.onload = function() {
    const productSelect = document.getElementById('product-name');
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id; // Use the product ID as the value
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
};

        // Get the current review count from localStorage
        let reviewCount = localStorage.getItem('reviewCount');
        if (!reviewCount) {
            reviewCount = 0;
        } else {
            reviewCount = parseInt(reviewCount);
        }

        // Increment the review count
        reviewCount += 1;

        // Update the review count in localStorage
        localStorage.setItem('reviewCount', reviewCount);

        // Display the review count
        document.getElementById('review-count').innerText = `Number of reviews completed: ${reviewCount}`;
    
