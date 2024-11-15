// scripts.js

// Get the search bar input and table
const searchBar = document.getElementById('searchBar');
const productTable = document.getElementById('productTable');
const rows = productTable.getElementsByTagName('tr');

// Listen for the input event on the search bar
searchBar.addEventListener('input', function () {
    const searchQuery = searchBar.value.toLowerCase();

    // Loop through each table row (skip the first row which is the header)
    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        const productName = cells[0].textContent.toLowerCase();  // Get the first column (product name)

        // Show or hide row based on search query match
        if (productName.includes(searchQuery)) {
            rows[i].style.display = '';
        } else {
            rows[i].style.display = 'none';
        }
    }
});

// Confirm delete action with redirect
function confirmDeleteAndRedirect(url) {
    if (confirm('Are you sure you want to delete this product?')) {
        window.location.href = url; // Redirect to the delete page
    }
}
