const menuItems = [
    {
        name: 'Veg Pizza',
        price: 220,
        img: 'images/veg-pizza.jpg',
        rating: 4,
    },
    {
        name: 'Burger',
        price: 99,
        img: 'images/burger.jpg',
        rating: 5,
    },
    {
        name: 'Pasta Alfredo',
        price: 180,
        img: 'images/pasta.jpg',
        rating: 4,
    },
    {
        name: 'French Fries',
        price: 75,
        img: 'images/fries.jpg',
        rating: 3,
    },
    {
        name: 'Cold Drink',
        price: 55,
        img: 'images/cold-drink.jpg',
        rating: 4,
    }
];

let cart = [];
let totalPrice = 0;
let currentView = 'large'; // Default view mode

// Disable main page interaction until modal is closed
function disableScroll() {
    document.body.style.overflow = 'hidden';
}

function enableScroll() {
    document.body.style.overflow = 'auto';
}

function renderMenu() {
    const menuDiv = document.getElementById('menu-items');
    menuDiv.innerHTML = '';
    menuItems.forEach((item, idx) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'menu-item';
        itemDiv.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <div class="menu-info">
                <div><strong>${item.name}</strong> - ₹${item.price}</div>
                <div class="stars">
                    ${'★'.repeat(item.rating)}${'☆'.repeat(5 - item.rating)}
                </div>
            </div>
            <button onclick="addToCart(${idx})">Add</button>
        `;
        menuDiv.appendChild(itemDiv);
    });

    // Set menu view class
    menuDiv.parentElement.classList.remove('menu-large', 'menu-small');
    menuDiv.parentElement.classList.add('menu-' + currentView);
}

window.addToCart = function(idx) {
    cart.push(menuItems[idx]);
    totalPrice += menuItems[idx].price;
    updateCart();
};

function updateCart() {
    const cartDiv = document.getElementById('cart-items');
    cartDiv.innerHTML = '';
    cart.forEach((item) => {
        const cartItm = document.createElement('div');
        cartItm.textContent = `${item.name} - ₹${item.price}`;
        cartDiv.appendChild(cartItm);
    });
    document.getElementById('total-price').textContent = `Total Price: ₹${totalPrice}`;
}

document.getElementById('checkout-btn').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    alert(`Your total is ₹${totalPrice}. Thank you for your order!`);
    cart = [];
    totalPrice = 0;
    updateCart();
});

// Dark mode toggle
const darkBtn = document.getElementById('dark-mode-toggle');
darkBtn.onclick = function() {
    document.body.classList.toggle('dark-mode');
    darkBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
};

// View toggle buttons
document.getElementById('large-view-btn').onclick = function() {
    currentView = 'large';
    renderMenu();
};
document.getElementById('small-view-btn').onclick = function() {
    currentView = 'small';
    renderMenu();
};

// Modal logic
const overlay = document.getElementById('overlay');
const btnSignIn = document.getElementById('btn-signin');
const btnLogin = document.getElementById('btn-login');
const btnSkip = document.getElementById('btn-skip');

function closeModal() {
    overlay.style.display = 'none';
    enableScroll();
}

btnSignIn.addEventListener('click', () => {
    alert('Sign In functionality to be implemented!');
    closeModal();
});

btnLogin.addEventListener('click', () => {
    alert('Login functionality to be implemented!');
    closeModal();
});

btnSkip.addEventListener('click', () => {
    closeModal();
});

// Disable scroll when modal active
disableScroll();

window.onload = renderMenu;
