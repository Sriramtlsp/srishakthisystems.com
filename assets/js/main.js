// Mobile Menu Toggle with animation
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuButton = document.querySelector('[onclick="toggleMobileMenu()"]');
    
    mobileMenu.classList.toggle('hidden');
    
    // Animate hamburger icon
    if (mobileMenu.classList.contains('hidden')) {
        menuButton.innerHTML = '<i class="fas fa-bars text-2xl"></i>';
    } else {
        menuButton.innerHTML = '<i class="fas fa-times text-2xl"></i>';
    }
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuButton = document.querySelector('[onclick="toggleMobileMenu()"]');
    
    if (mobileMenu && !mobileMenu.contains(event.target) && !menuButton.contains(event.target)) {
        if (!mobileMenu.classList.contains('hidden')) {
            toggleMobileMenu();
        }
    }
});

// Close mobile menu when window is resized to desktop
window.addEventListener('resize', function() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (window.innerWidth >= 768 && mobileMenu && !mobileMenu.classList.contains('hidden')) {
        toggleMobileMenu();
    }
});

// Service Form Submission
document.addEventListener('DOMContentLoaded', function() {
    const serviceForm = document.getElementById('serviceForm');
    if (serviceForm) {
        serviceForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const deviceType = document.getElementById('deviceType').value;
            const issue = document.getElementById('issue').value;
            
            // Validate form
            if (!name || !phone || !deviceType || !issue) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Create WhatsApp message
            const message = `New Service Request:%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0ADevice: ${encodeURIComponent(deviceType)}%0AIssue: ${encodeURIComponent(issue)}`;
            
            // Open WhatsApp
            window.open(`https://api.whatsapp.com/send?phone=15558611761&text=${message}`, '_blank');
        });
    }
});

// Contact Form Submission
function submitContactForm() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(form);
            
            // Here you would typically send the data to a server
            // For now, we'll show a success message
            alert('Thank you for your message! We will get back to you soon.');
            form.reset();
        });
    }
}

// Product/Rental Booking
function bookProduct(productName) {
    const message = `I am interested in booking the ${productName}. Please provide more details.`;
    window.open(`https://api.whatsapp.com/send?phone=15558611761&text=${encodeURIComponent(message)}`, '_blank');
}

// Rental Quote Request
function requestRentalQuote(itemName) {
    const message = `I would like to request a rental quote for ${itemName}. Please provide pricing and availability.`;
    window.open(`https://api.whatsapp.com/send?phone=15558611761&text=${encodeURIComponent(message)}`, '_blank');
}

// Chatbot Functions
function toggleChatbot() {
    const chatbot = document.getElementById('chatbot');
    chatbot.style.display = chatbot.style.display === 'none' || chatbot.style.display === '' ? 'block' : 'none';
}

function chatbotAction(action) {
    let message = '';
    
    switch(action) {
        case 'service':
            message = 'Hello! I need help with a service request. Please assist me.';
            break;
        case 'sales':
            message = 'Hi! I am interested in purchasing a computer/laptop/printer. Can you help me?';
            break;
        case 'question':
            message = 'Hello! I have a question about your services. Can someone help me?';
            break;
    }
    
    window.open(`https://api.whatsapp.com/send?phone=15558611761&text=${encodeURIComponent(message)}`, '_blank');
    toggleChatbot(); // Close chatbot after action
}

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Initialize contact form if on contact page
document.addEventListener('DOMContentLoaded', function() {
    submitContactForm();
});

// Animation on scroll (optional enhancement)
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
}

// Call animation function when DOM is loaded
document.addEventListener('DOMContentLoaded', animateOnScroll);

// Mobile-specific optimizations
document.addEventListener('DOMContentLoaded', function() {
    // Optimize touch interactions for mobile
    if ('ontouchstart' in window) {
        // Add touch-friendly classes
        document.body.classList.add('touch-device');
        
        // Improve button tap targets for mobile
        const buttons = document.querySelectorAll('button, .btn, a[class*="bg-"]');
        buttons.forEach(button => {
            if (!button.classList.contains('min-h-12')) {
                button.classList.add('min-h-12');
            }
        });
    }
    
    // Optimize form inputs for mobile
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        // Add mobile-friendly attributes
        if (input.type === 'tel') {
            input.setAttribute('inputmode', 'tel');
        }
        if (input.type === 'email') {
            input.setAttribute('inputmode', 'email');
        }
        if (input.type === 'number') {
            input.setAttribute('inputmode', 'numeric');
        }
        
        // Prevent zoom on focus for iOS
        if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
            input.addEventListener('focus', function() {
                input.style.fontSize = '16px';
            });
        }
    });
    
    // Optimize images for mobile
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        // Add loading="lazy" for better performance
        if (!img.hasAttribute('loading')) {
            img.setAttribute('loading', 'lazy');
        }
    });
    
    // Mobile-friendly chatbot positioning
    const chatbot = document.getElementById('chatbot');
    if (chatbot && window.innerWidth < 768) {
        chatbot.style.width = '90vw';
        chatbot.style.left = '5vw';
        chatbot.style.right = 'auto';
    }
    
    // Adjust floating WhatsApp button for mobile
    const whatsappBtn = document.querySelector('.floating-whatsapp');
    if (whatsappBtn && window.innerWidth < 768) {
        whatsappBtn.style.bottom = '80px'; // Move higher to avoid browser UI
    }
});

// Handle orientation change
window.addEventListener('orientationchange', function() {
    // Reload page after orientation change to fix layout issues
    setTimeout(function() {
        window.location.reload();
    }, 500);
});

// Optimize scroll performance on mobile
let ticking = false;
function updateScrollPosition() {
    // Add scroll-based optimizations here
    ticking = false;
}

window.addEventListener('scroll', function() {
    if (!ticking) {
        requestAnimationFrame(updateScrollPosition);
        ticking = true;
    }
});

// Mobile-specific utility functions
function isMobile() {
    return window.innerWidth < 768;
}

function isTouch() {
    return 'ontouchstart' in window;
}
