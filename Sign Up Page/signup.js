// Current step tracking
let currentStep = 1;
let selectedPlan = '';

// Simple step navigation 
function nextStep(step) {
    // For step 1, just basic validation
    if (currentStep === 1) {
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const agreeTerms = document.getElementById('agreeTerms').checked;
        
        if (!firstName || !lastName || !email || !phone || !password || !confirmPassword) {
            alert('Please fill in all required fields.');
            return;
        }
        
        if (password.length < 8) {
            alert('Password must be at least 8 characters long.');
            return;
        }
        
        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }
        
        if (!agreeTerms) {
            alert('Please agree to the terms.');
            return;
        }
    }
    
    // For step 2, check if a plan is selected
    if (currentStep === 2) {
        if (!selectedPlan) {
            alert('Please select a plan.');
            return;
        }
    }
    
    // Hide current step
    const currentContent = document.getElementById(`stepContent${currentStep}`);
    const currentStepEl = document.getElementById(`step${currentStep}`);
    
    if (currentContent) {
        currentContent.classList.add('d-none');
    }
    if (currentStepEl) {
        currentStepEl.classList.remove('active');
        currentStepEl.classList.add('completed');
    }
    
    // Update current step
    currentStep = step;
    
    // Show next step
    const nextContent = document.getElementById(`stepContent${currentStep}`);
    const nextStepEl = document.getElementById(`step${currentStep}`);
    
    if (nextContent) {
        nextContent.classList.remove('d-none');
    }
    if (nextStepEl) {
        nextStepEl.classList.add('active');
    }
    
    // Update confirmation if on final step
    if (currentStep === 3 && selectedPlan) {
        const planText = selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1);
        const planElement = document.getElementById('selectedPlan');
        if (planElement) {
            planElement.textContent = planText;
        }
    }
}
 
function previousStep(step) {
    // Hide current step
    const currentContent = document.getElementById(`stepContent${currentStep}`);
    const currentStepEl = document.getElementById(`step${currentStep}`);
    
    if (currentContent) {
        currentContent.classList.add('d-none');
    }
    if (currentStepEl) {
        currentStepEl.classList.remove('active');
        currentStepEl.classList.remove('completed');
    }
    
    // Update current step
    currentStep = step;
    
    // Show previous step
    const prevContent = document.getElementById(`stepContent${step}`);
    const prevStepEl = document.getElementById(`step${step}`);
    
    if (prevContent) {
        prevContent.classList.remove('d-none');
    }
    if (prevStepEl) {
        prevStepEl.classList.add('active');
    }
}

function selectPlan(event, plan) {
    // Remove all selections
    document.querySelectorAll('.plan-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    // Add selection to clicked card
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('selected');
    }
    
    // Store selected plan
    selectedPlan = plan;
    console.log('Selected plan:', plan);
}

function goToDashboard() {
    // Store user name before redirecting
    const firstName = document.getElementById('firstName').value.trim();
    if (firstName) {
        localStorage.setItem('userName', firstName);
    }
    window.location.href = '../User Dashboard Page/dashboard.html';
}

function goToHomepage() {
    window.location.href = '../HomePage/index.html';
}