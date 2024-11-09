// Array to store cart items
let cartItems = [];

// Function to add an item to the cart
function addToCart(itemName, itemImage) {
    // Check if the item is already in the cart
    let existingItem = cartItems.find(item => item.name === itemName);
    if (existingItem) {
        existingItem.quantity += 1; // Increment quantity if item already exists
    } else {
        cartItems.push({ name: itemName, image: itemImage, quantity: 1 }); // Add new item
    }

    updateCheckout();
}

// Function to update the checkout display
function updateCheckout() {
    const checkoutContent = document.querySelector('.checkoutContent');
    checkoutContent.innerHTML = ''; // Clear current items

    cartItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'checkoutItem d-flex justify-content-between align-items-center mb-3';

        itemElement.innerHTML = `
            <div class="itemDetails">
                <h5 class="itemTitle">${item.name}</h5>
                <div class="itemControls">
                    <button class="btn btn-outline-secondary btn-sm minusBtn">-</button>
                    <input type="number" class="itemQuantity" value="${item.quantity}" min="1">
                    <button class="btn btn-outline-secondary btn-sm plusBtn">+</button>
                </div>
            </div>
            <button class="btn btn-danger btn-sm deleteBtn"><i class="bi bi-trash"></i></button>
        `;

        // Append item to checkout content
        checkoutContent.appendChild(itemElement);

        // Add event listeners for minus, plus, and delete buttons
        itemElement.querySelector('.minusBtn').addEventListener('click', () => adjustQuantity(item.name, -1));
        itemElement.querySelector('.plusBtn').addEventListener('click', () => adjustQuantity(item.name, 1));
        itemElement.querySelector('.deleteBtn').addEventListener('click', () => removeItem(item.name));
    });
}

// Function to adjust the quantity of an item
function adjustQuantity(itemName, change) {
    const item = cartItems.find(item => item.name === itemName);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeItem(itemName);
        } else {
            updateCheckout();
        }
    }
}

// Function to remove an item from the cart
function removeItem(itemName) {
    cartItems = cartItems.filter(item => item.name !== itemName);
    updateCheckout();
}



// Add event listeners to "Add to Cart" buttons
document.querySelectorAll('.btn-primary').forEach((button, index) => {
    button.addEventListener('click', () => {
        const itemCard = button.closest('.card');
        const itemName = itemCard.querySelector('.card-title').textContent;
        const itemImage = itemCard.querySelector('.card-img-top').src;
        addToCart(itemName, itemImage);
    });
});
