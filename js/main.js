// Walter De Lara Portfolio - Main JavaScript with Sonner Toast Notifications

// Mobile Navigation Toggle
function initMobileNav() {
    const navToggle = document.querySelector('.navbar-toggle');
    const navRight = document.querySelector('.navbar-right');
    
    if (navToggle && navRight) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navRight.classList.toggle('active');
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navRight.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navRight.contains(e.target)) {
                navToggle.classList.remove('active');
                navRight.classList.remove('active');
            }
        });
    }
}

// Sonner Toast Notification System
class ToastNotification {
    constructor() {
        this.container = null;
        this.init();
    }

    init() {
        // Create toast container if it doesn't exist
        if (!document.getElementById('toast-container')) {
            this.container = document.createElement('div');
            this.container.id = 'toast-container';
            this.container.setAttribute('aria-live', 'polite');
            this.container.setAttribute('aria-atomic', 'true');
            document.body.appendChild(this.container);
            this.addStyles();
        } else {
            this.container = document.getElementById('toast-container');
        }
    }

    addStyles() {
        const style = document.createElement('style');
        style.textContent = `
            #toast-container {
                position: fixed;
                top: 90px;
                right: 20px;
                z-index: 10000;
                display: flex;
                flex-direction: column;
                gap: 10px;
                max-width: 400px;
            }

            .toast {
                background: white;
                border-radius: 12px;
                padding: 16px 20px;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
                display: flex;
                align-items: center;
                gap: 12px;
                animation: slideIn 0.3s ease-out;
                min-width: 300px;
                font-family: 'Rethink Sans', 'Inter', sans-serif;
            }

            .toast.removing {
                animation: slideOut 0.3s ease-out forwards;
            }

            .toast-icon {
                width: 24px;
                height: 24px;
                flex-shrink: 0;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 16px;
            }

            .toast.success .toast-icon {
                background: #10b981;
                color: white;
            }

            .toast.error .toast-icon {
                background: #ef4444;
                color: white;
            }

            .toast.info .toast-icon {
                background: #0050FF;
                color: white;
            }

            .toast.warning .toast-icon {
                background: #f59e0b;
                color: white;
            }

            .toast-content {
                flex: 1;
            }

            .toast-title {
                font-weight: 600;
                font-size: 14px;
                color: #000;
                margin-bottom: 4px;
            }

            .toast-message {
                font-size: 13px;
                color: #666;
                line-height: 1.4;
            }

            .toast-close {
                width: 20px;
                height: 20px;
                border: none;
                background: transparent;
                cursor: pointer;
                color: #999;
                font-size: 18px;
                padding: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: color 0.2s;
            }

            .toast-close:hover {
                color: #333;
            }

            @keyframes slideIn {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }

            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(400px);
                    opacity: 0;
                }
            }

            @media (max-width: 768px) {
                #toast-container {
                    right: 10px;
                    left: 10px;
                    max-width: none;
                }

                .toast {
                    min-width: auto;
                }
            }
        `;
        document.head.appendChild(style);
    }

    show(options) {
        const {
            type = 'info',
            title = '',
            message = '',
            duration = 4000
        } = options;

        const toast = document.createElement('div');
        toast.className = `toast ${type}`;

        const icons = {
            success: '✓',
            error: '✕',
            info: 'i',
            warning: '⚠'
        };

        toast.innerHTML = `
            <div class="toast-icon">${icons[type]}</div>
            <div class="toast-content">
                ${title ? `<div class="toast-title">${title}</div>` : ''}
                ${message ? `<div class="toast-message">${message}</div>` : ''}
            </div>
            <button class="toast-close" aria-label="Close notification">×</button>
        `;

        this.container.appendChild(toast);

        // Close button functionality
        const closeBtn = toast.querySelector('.toast-close');
        closeBtn.addEventListener('click', () => this.remove(toast));

        // Auto remove after duration
        if (duration > 0) {
            setTimeout(() => this.remove(toast), duration);
        }

        return toast;
    }

    remove(toast) {
        toast.classList.add('removing');
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }

    success(title, message, duration) {
        return this.show({ type: 'success', title, message, duration });
    }

    error(title, message, duration) {
        return this.show({ type: 'error', title, message, duration });
    }

    info(title, message, duration) {
        return this.show({ type: 'info', title, message, duration });
    }

    warning(title, message, duration) {
        return this.show({ type: 'warning', title, message, duration });
    }
}

// Initialize Toast
const toast = new ToastNotification();

// Make toast globally accessible
window.toast = toast;

// Smooth Scroll
function initSmoothScroll() {
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
        });
    });
}

// Button Hover Effects
function initButtonEffects() {
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Form Submission Handler (Contact Page)
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const button = form.querySelector('.send-button');
            const originalText = button.textContent;
            
            // Disable button
            button.disabled = true;
            button.textContent = 'SENDING...';
            
            // Get form data
            const formData = {
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            // Simulate sending (replace with actual API call)
            setTimeout(() => {
                // Success notification
                toast.success(
                    'Message Sent!',
                    `Thank you ${formData.firstName}! I'll get back to you soon.`,
                    5000
                );
                
                // Reset form
                form.reset();
                button.disabled = false;
                button.textContent = originalText;
                
                console.log('Form submitted:', formData);
            }, 1500);
        });

        // Real-time validation feedback
        const inputs = form.querySelectorAll('.form-input, .form-textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                if (this.value && !this.checkValidity()) {
                    toast.warning(
                        'Invalid Input',
                        `Please check the ${this.name} field`,
                        3000
                    );
                }
            });
        });
    }
}

// Download CV Handler (Resume Page)
function initDownloadCV() {
    const downloadBtn = document.querySelector('.download-cv-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            toast.info(
                'Download Started',
                'Your CV is being prepared for download...',
                3000
            );
            
            // Simulate download (replace with actual file URL)
            setTimeout(() => {
                toast.success(
                    'Download Complete!',
                    'CV has been downloaded successfully.',
                    4000
                );
                
                // Actual download would happen here
                // window.open('path/to/cv.pdf', '_blank');
            }, 1500);
        });
    }
}

// Intersection Observer for Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe project cards
    document.querySelectorAll('.project-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // Observe resume cards
    document.querySelectorAll('.resume-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.5s ease ${index * 0.05}s, transform 0.5s ease ${index * 0.05}s`;
        observer.observe(card);
    });
}

// Welcome Toast on Page Load
function showWelcomeToast() {
    // Show welcome message on about page
    if (document.body.classList.contains('about-page')) {
        setTimeout(() => {
            toast.success(
                'Welcome!',
                'Thanks for visiting my portfolio.',
                4000
            );
        }, 1000);
    }
}

// Initialize all functions when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initMobileNav();
    initSmoothScroll();
    initButtonEffects();
    initContactForm();
    initDownloadCV();
    initScrollAnimations();
    showWelcomeToast();
    
    // Show info toast
    console.log('Portfolio initialized successfully');
    
    // Add custom loading complete notification
    window.addEventListener('load', function() {
        console.log('All resources loaded');
    });
});

// Export for use in other scripts if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { toast, ToastNotification };
}
