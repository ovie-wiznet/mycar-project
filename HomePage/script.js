// Scroll to login form
function scrollToLogin() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.scrollIntoView({ behavior: 'smooth', block: 'center'});
    }
}

// Handle login form submission
function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('floatingInput').value;
    const password = document.getElementById('floatingPassword').value;

    // Simple validation
    if (email && password) {
        // In a real application i would have validated credentials here
        // For now i will just redirect to the dashboard
        alert('Login successful! Redirecting to dashboard...');
        window.location.href = '../User Dashboard Page/dashboard.html';
    } else {
        alert('Please enter both email and password');
    }
}

// Sample data and renderer for Featured Cars
const sampleCars = [
    {
        id: 1,
        title: 'Lexus RX 350 F Sport',
        year: 2025,
        mileage: '1,200 km',
        price: 45999,
        img: '../Pictures/2022-LexusRX-350-F-Sport-feature-carprousa.webp'
    },
    {
        id: 2,
        title: 'Porsche 911 Carrera',
        year: 2024,
        mileage: '3,500 km',
        price: 32999,
        img: '../Pictures/Porsche 911.jpg'
    },
    {
        id: 3,
        title: 'Tesla Model X',
        year: 2023,
        mileage: '12,000 km',
        price: 89999,
        img: '../Pictures/2018-Tesla-Model-X.jpg'
    },
    {
        id: 4,
        title: 'Lexus RX 350 ',
        year: 2022,
        mileage: '4,500 km',
        price: 249999,
        img: '../Pictures/2025-rx-350-fsport-handling-awd-grecianwater-23.webp'
    }
];

function formatUSD(amount) {
    return amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

function renderFeaturedCars() {
    const container = document.getElementById('featuredCarsContainer');
    if (!container) return;

    container.innerHTML = sampleCars.map(car => `
        <div class="col-12 col-sm-6 col-lg-3">
            <div class="car-card">
                <img src="${car.img}" alt="${car.title}">
                <div class="card-body">
                    <div class="title">${car.title} <small class="text-muted">${car.year}</small></div>
                    <div class="meta">${car.mileage}</div>
                    <div class="mt-3">
                        <a href="../Sign Up Page/signup.html" class="btn btn-sm custom-btn" style="width: 100%;">View Price & Details</a>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Render on load
document.addEventListener('DOMContentLoaded', function() {
    renderFeaturedCars();
});