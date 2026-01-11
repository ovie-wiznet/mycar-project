// Featured cars data (prices in USD)
const featuredCars = [
    { id: 1, name: 'Toyota Camry', year: 2022, mileage: '12,000 km', price: 15500, location: 'New York, USA', image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=60', rating: 4.8, favorite: false },
    { id: 2, name: 'Honda Accord', year: 2021, mileage: '25,000 km', price: 13200, location: 'Abuja, NG', image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=60', rating: 4.6, favorite: true },
    { id: 3, name: 'BMW X5', year: 2023, mileage: '8,500 km', price: 35800, location: 'London, UK', image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=60', rating: 4.9, favorite: false }
];

// Utility: format as USD
function formatUSD(amount) {
    return amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

// Load featured cars on DOM ready
document.addEventListener('DOMContentLoaded', function() {
    loadFeaturedCars();
    // Set dynamic welcome message
    const userName = localStorage.getItem('userName') || 'User';
    const welcomeElement = document.querySelector('.welcome-section h1');
    if (welcomeElement) {
        welcomeElement.textContent = 'Welcome back, ' + userName + '!👋';
    }
    // Set navbar name
    const navNameElement = document.querySelector('.navbar-nav .dropdown-toggle');
    if (navNameElement) {
        navNameElement.innerHTML = '<i class="fas fa-user-circle"></i> ' + userName;
    }
});

function loadFeaturedCars() {
    const container = document.getElementById('FeaturedCars') || document.getElementById('featuredCars');
    if (!container) return;

    container.innerHTML = '';
    featuredCars.forEach(car => {
        container.appendChild(createCarCard(car));
    });
}

function createCarCard(car) {
    const col = document.createElement('div');
    col.className = 'col-12 col-md-4 mb-4';

    const heartIcon = car.favorite ? 'fas fa-heart text-danger' : 'far fa-heart';
    const fullStars = Math.floor(car.rating);
    const stars = '★'.repeat(fullStars) + '☆'.repeat(5 - fullStars);

    col.innerHTML = `
        <div class="card car-card">
            <img src="${car.image}" class="card-img-top" alt="${car.name}">
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-start mb-2">
                    <h5 class="card-title mb-0">${car.name}</h5>
                    <i class="${heartIcon}" style="cursor:pointer;" onclick="toggleFavorite(${car.id})"></i>
                </div>
                <div class="mb-2">
                    <span class="price-tag">${formatUSD(car.price)}</span>
                </div>
                <p class="card-text text-muted mb-2"><i class="fas fa-map-marker-alt"></i> ${car.location}</p>
                <div class="row text-muted small mb-2">
                    <div class="col-6"><i class="fas fa-calendar"></i> ${car.year}</div>
                    <div class="col-6"><i class="fas fa-tachometer-alt"></i> ${car.mileage}</div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="rating">${stars} <span class="text-muted">(${car.rating})</span></div>
                    <button class="btn btn-primary btn-sm" onclick="viewCarDetails(${car.id})">View Details</button>
                </div>
            </div>
        </div>
    `;

    return col;
}

// Search functionality 
function searchCars() {
    const searchTerm = document.getElementById('searchInput').value;
    if (searchTerm.trim()) {
        alert(`searching for: ${searchTerm}`);
        // Here you would implement actual search functionality
    }
}

// Toggle favorite status 
function viewCarDetails(carId) {
    const cars = featuredCars.find(c => c.id === carId);
    if (car) {
        car.favorite = !car.favorite;
         loadFeaturedCars(); // Reload to update heart icon 

         const status = car.favorite ? 'added to' : 'removed from';
         showToast(`${car.name} ${status} favorites!`)
    }
}

// Viw car details 
function viewCarDetails(carId) {
    const car = featuredCars.find(c => c.Id === carId);
    if (car) {
        alert(`Viewing details for: ${car.name}`);
        // Here you would navigate to car details page 
    }
}

// Quick action functions 
function sellCar() {
    alert('Redirecting to Sell Your page...');
    // Here you would navigate to sell car page 
}

function advancedSearch() {
    alert('Opening Advanced Search...');
    // Here you would open advanced search modal or page 
}

function viewWishList() {
    alert('Opening your wishlist...');
    // Here you would navigate to wishlist page 
}

// Logout Function 
function logout() {
    if (confirm('Are you sure you want to logout?')) {
        window.location.href = 'index.html';
    }
}

// Simple toast notification function 
function showToast(message) {
    // Create toast element 
    const toast = document.createElement('div');
    toast.className = 'toast align-items-center text-white bg-primary border-0';
    toast.style.position = 'fixed';
    toast.style.top = '20px';
    toast.style.right = '20px';
    toast.style.zIndex = '9999';

    toast.innerHTML = `
        <div class="d-flex">
            <div class="toast-body">
             ${message}
            </div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" onclick="this.parentElement.parentElement.remove()"></button>
        </div>
    `;

    document.body.append(toast);

    // Remove toast after 3 seconds 
    setTimeout(() => {
        if (toast.parentElement) {
            toast.remove();
        }
    }, 3000);
}