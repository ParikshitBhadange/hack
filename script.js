// FoodLink - Vendor & Supplier Marketplace JavaScript

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Role toggle functionality
const roleToggle = document.getElementById('role-toggle');
const vendorSignupBtn = document.getElementById('vendor-signup');

let isVendor = true; // Start as vendor

roleToggle.addEventListener('click', () => {
    isVendor = !isVendor;

    // Update toggle button text
    roleToggle.textContent = isVendor ? 'Switch Profile' : 'Switch Profile';

    // Show/hide signup button depending on role
    if (!isVendor) {
        vendorSignupBtn.style.display = 'inline-flex'; // Show button
    } else {
        vendorSignupBtn.style.display = 'none'; // Hide button
    }
});

// Optional: hide the button initially if starting as vendor
if (isVendor) {
    vendorSignupBtn.style.display = 'none';
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        mobileMenu.classList.add('hidden');
    });
});

// Add to cart functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.closest('.card-hover').querySelector('h3').textContent;
        this.textContent = 'Added! ✓';
        this.classList.remove('bg-amber-500', 'hover:bg-amber-600');
        this.classList.add('bg-green-600');
        
        setTimeout(() => {
            this.textContent = 'Add to Cart';
            this.classList.remove('bg-green-600');
            this.classList.add('bg-amber-500', 'hover:bg-amber-600');
        }, 2000);
        
        // Show notification
        showNotification(`${productName} added to cart!`);
    });
});

// Chat functionality
const chatInput = document.getElementById('chat-input');
const sendButton = document.getElementById('send-message');
const chatMessages = document.getElementById('chat-messages');

function sendMessage() {
    const message = chatInput.value.trim();
    if (message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'flex flex-col';
        messageDiv.innerHTML = `
            <div class="chat-bubble chat-vendor">
                <p class="text-sm">${message}</p>
                <span class="text-xs opacity-75 mt-1">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
            </div>
        `;
        chatMessages.appendChild(messageDiv);
        chatInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        // Simulate supplier response
        setTimeout(() => {
            const responseDiv = document.createElement('div');
            responseDiv.className = 'flex flex-col';
            responseDiv.innerHTML = `
                <div class="chat-bubble chat-supplier">
                    <p class="text-sm">Thanks for your message! I'll get back to you with details shortly.</p>
                    <span class="text-xs opacity-75 mt-1">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                </div>
            `;
            chatMessages.appendChild(responseDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1500);
    }
}

sendButton.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Chat contact switching
document.querySelectorAll('.chat-contact').forEach(contact => {
    contact.addEventListener('click', function() {
        document.querySelectorAll('.chat-contact').forEach(c => c.classList.remove('active-chat'));
        this.classList.add('active-chat');
        
        // Update chat header
        const name = this.querySelector('h4').textContent;
        const initials = this.querySelector('.rounded-full').textContent;
        document.querySelector('.bg-amber-500 h4').textContent = name;
        document.querySelector('.bg-amber-500 .rounded-full').textContent = initials;
    });
});

// Notification system
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'fixed top-20 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Order tracking simulation
document.querySelectorAll('button').forEach(button => {
    if (button.textContent.includes('Track Order')) {
        button.addEventListener('click', function() {
            showNotification('Order tracking details sent to your email!');
        });
    }
    
    if (button.textContent.includes('Reorder')) {
        button.addEventListener('click', function() {
            showNotification('Items added to cart for reordering!');
        });
    }
});

// Profile save functionality
document.querySelectorAll('button').forEach(button => {
    if (button.textContent.includes('Save Preferences')) {
        button.addEventListener('click', function() {
            showNotification('Preferences saved successfully!');
        });
    }
    
    if (button.textContent.includes('Edit Profile')) {
        button.addEventListener('click', function() {
            showNotification('Profile editing feature coming soon!');
        });
    }
});

// Signup buttons
document.getElementById('vendor-signup').addEventListener('click', () => {
    showNotification('Vendor registration form would open here!');
});

document.getElementById('supplier-signup').addEventListener('click', () => {
    showNotification('Supplier registration form would open here!');
});

// Note: The Cloudflare script at the end has been omitted as it's automatically injected
// and should not be manually included in custom JavaScript files