// Walter De Lara Portfolio - Enhanced JavaScript with Animations

// Resume Page Scroll Animations
function initResumeScrollAnimations() {
    if (!document.querySelector('.resume-page')) return;

    const cards = document.querySelectorAll('.card');
    const downloadBtn = document.querySelector('.download-cv-btn');
    
    // Initially hide all cards
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
    });
    
    if (downloadBtn) {
        downloadBtn.style.opacity = '0';
        downloadBtn.style.transform = 'translateY(20px)';
    }

    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const card = entry.target;
                const delay = card.dataset.delay || 0;
                
                setTimeout(() => {
                    card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, delay);
                
                observer.unobserve(card);
            }
        });
    }, observerOptions);

    // Observe all cards with staggered delays
    cards.forEach((card, index) => {
        card.dataset.delay = index * 100;
        observer.observe(card);
    });

    // Observe download button
    if (downloadBtn) {
        downloadBtn.dataset.delay = 400;
        observer.observe(downloadBtn);
    }
}

// Experience Cards Scroll Visibility
function initExperienceScrollVisibility() {
    if (!document.querySelector('.resume-page')) return;

    const experienceCards = document.querySelectorAll('.experience-card');
    const experienceContainer = document.querySelector('.experience-scroll-container');
    
    if (!experienceContainer || experienceCards.length === 0) return;

    // Show first card immediately
    if (experienceCards[0]) {
        experienceCards[0].classList.add('visible');
    }

    // Intersection Observer for scroll visibility (both directions)
    const observerOptions = {
        root: experienceContainer,
        rootMargin: '0px',
        threshold: 0.5 // Card must be 50% visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const card = entry.target;
            const isFirstCard = card === experienceCards[0];
            
            if (entry.isIntersecting) {
                // Show card when scrolling into view
                card.classList.add('visible');
            } else {
                // Hide card when scrolling out of view (except first card at top)
                if (!isFirstCard) {
                    card.classList.remove('visible');
                } else {
                    // Check if we're at the very top - keep first card visible
                    const scrollTop = experienceContainer.scrollTop;
                    if (scrollTop > 50) {
                        card.classList.remove('visible');
                    }
                }
            }
        });
    }, observerOptions);

    // Observe all cards
    experienceCards.forEach((card) => {
        observer.observe(card);
    });

    // Handle scroll to top - keep first card visible
    experienceContainer.addEventListener('scroll', () => {
        const scrollTop = experienceContainer.scrollTop;
        if (scrollTop <= 50 && experienceCards[0]) {
            experienceCards[0].classList.add('visible');
        }
    });
}

// Skillset Cards Scroll Visibility
function initSkillScrollVisibility() {
    if (!document.querySelector('.resume-page')) return;

    const skillCards = document.querySelectorAll('.skill-card');
    const skillContainer = document.querySelector('.skill-scroll-container');
    
    if (!skillContainer || skillCards.length === 0) return;

    // Show first card immediately
    if (skillCards[0]) {
        skillCards[0].classList.add('visible');
    }

    // Intersection Observer for scroll visibility (both directions)
    const observerOptions = {
        root: skillContainer,
        rootMargin: '0px',
        threshold: 0.5 // Card must be 50% visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const card = entry.target;
            const isFirstCard = card === skillCards[0];
            
            if (entry.isIntersecting) {
                // Show card when scrolling into view
                card.classList.add('visible');
            } else {
                // Hide card when scrolling out of view (except first card at top)
                if (!isFirstCard) {
                    card.classList.remove('visible');
                } else {
                    // Check if we're at the very top - keep first card visible
                    const scrollTop = skillContainer.scrollTop;
                    if (scrollTop > 50) {
                        card.classList.remove('visible');
                    }
                }
            }
        });
    }, observerOptions);

    // Observe all cards
    skillCards.forEach((card) => {
        observer.observe(card);
    });

    // Handle scroll to top - keep first card visible
    skillContainer.addEventListener('scroll', () => {
        const scrollTop = skillContainer.scrollTop;
        if (scrollTop <= 50 && skillCards[0]) {
            skillCards[0].classList.add('visible');
        }
    });
}

// Personal Info Cards Scroll Visibility
function initPersonalScrollVisibility() {
    if (!document.querySelector('.resume-page')) return;

    const personalCards = document.querySelectorAll('.personal-card');
    const personalContainer = document.querySelector('.personal-scroll-container');
    
    if (!personalContainer || personalCards.length === 0) return;

    // Show first card immediately
    if (personalCards[0]) {
        personalCards[0].classList.add('visible');
    }

    // Intersection Observer for scroll visibility (both directions)
    const observerOptions = {
        root: personalContainer,
        rootMargin: '0px',
        threshold: 0.5 // Card must be 50% visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const card = entry.target;
            const isFirstCard = card === personalCards[0];
            
            if (entry.isIntersecting) {
                // Show card when scrolling into view
                card.classList.add('visible');
            } else {
                // Hide card when scrolling out of view (except first card at top)
                if (!isFirstCard) {
                    card.classList.remove('visible');
                } else {
                    // Check if we're at the very top - keep first card visible
                    const scrollTop = personalContainer.scrollTop;
                    if (scrollTop > 50) {
                        card.classList.remove('visible');
                    }
                }
            }
        });
    }, observerOptions);

    // Observe all cards
    personalCards.forEach((card) => {
        observer.observe(card);
    });

    // Handle scroll to top - keep first card visible
    personalContainer.addEventListener('scroll', () => {
        const scrollTop = personalContainer.scrollTop;
        if (scrollTop <= 50 && personalCards[0]) {
            personalCards[0].classList.add('visible');
        }
    });
}

// Education Cards Scroll Visibility
function initEducationScrollVisibility() {
    if (!document.querySelector('.resume-page')) return;

    const educationCards = document.querySelectorAll('.education-card');
    const educationContainer = document.querySelector('.education-scroll-container');
    
    if (!educationContainer || educationCards.length === 0) return;

    // Show first card immediately
    if (educationCards[0]) {
        educationCards[0].classList.add('visible');
    }

    // Intersection Observer for scroll visibility (both directions)
    const observerOptions = {
        root: educationContainer,
        rootMargin: '0px',
        threshold: 0.5 // Card must be 50% visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const card = entry.target;
            const isFirstCard = card === educationCards[0];
            
            if (entry.isIntersecting) {
                // Show card when scrolling into view
                card.classList.add('visible');
            } else {
                // Hide card when scrolling out of view (except first card at top)
                if (!isFirstCard) {
                    card.classList.remove('visible');
                } else {
                    // Check if we're at the very top - keep first card visible
                    const scrollTop = educationContainer.scrollTop;
                    if (scrollTop > 50) {
                        card.classList.remove('visible');
                    }
                }
            }
        });
    }, observerOptions);

    // Observe all cards
    educationCards.forEach((card) => {
        observer.observe(card);
    });

    // Handle scroll to top - keep first card visible
    educationContainer.addEventListener('scroll', () => {
        const scrollTop = educationContainer.scrollTop;
        if (scrollTop <= 50 && educationCards[0]) {
            educationCards[0].classList.add('visible');
        }
    });
}

// Projects Page Scroll Visibility
function initProjectsScrollVisibility() {
    if (!document.querySelector('.projects-page')) return;

    const projectCards = document.querySelectorAll('.project-card');
    const projectsSection = document.querySelector('.projects-section');
    
    if (!projectsSection || projectCards.length === 0) return;

    // Show first card immediately
    if (projectCards[0]) {
        projectCards[0].classList.add('visible');
    }

    // Intersection Observer for scroll visibility (both directions)
    const observerOptions = {
        root: projectsSection,
        rootMargin: '0px',
        threshold: 0.5 // Card must be 50% visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const card = entry.target;
            const isFirstCard = card === projectCards[0];
            
            if (entry.isIntersecting) {
                // Show card when scrolling into view
                card.classList.add('visible');
            } else {
                // Hide card when scrolling out of view (except first card at top)
                if (!isFirstCard) {
                    card.classList.remove('visible');
                } else {
                    // Check if we're at the very top - keep first card visible
                    const scrollTop = projectsSection.scrollTop;
                    if (scrollTop > 50) {
                        card.classList.remove('visible');
                    }
                }
            }
        });
    }, observerOptions);

    // Observe all cards
    projectCards.forEach((card) => {
        observer.observe(card);
    });

    // Handle scroll to top - keep first card visible
    projectsSection.addEventListener('scroll', () => {
        const scrollTop = projectsSection.scrollTop;
        if (scrollTop <= 50 && projectCards[0]) {
            projectCards[0].classList.add('visible');
        }
    });
}

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

        const closeBtn = toast.querySelector('.toast-close');
        closeBtn.addEventListener('click', () => this.remove(toast));

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
window.toast = toast;

// Enhanced Scroll Animations with Intersection Observer
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
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);

    // Observe all cards and sections
    const elementsToAnimate = document.querySelectorAll(
        '.project-card, .resume-card, .content-box, .contact-form-container'
    );

    elementsToAnimate.forEach((element, index) => {
        if (!element.classList.contains('animated')) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
            observer.observe(element);
        }
    });

    // Enhanced hover animations for cards (excluding project cards in scroll container)
    document.querySelectorAll('.resume-card, .content-box').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.25)';
            this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0.15)';
            this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    });

    // Project cards hover effect (subtle, doesn't interfere with scroll)
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0px 15px 40px rgba(0, 0, 0, 0.2)';
            this.style.transition = 'box-shadow 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0px 10px 30px rgba(0, 0, 0, 0.15)';
            this.style.transition = 'box-shadow 0.3s ease';
        });
    });

    // Parallax effect for background gradients
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                const scrolled = window.pageYOffset;
                const gradients = document.querySelectorAll('.gradient-1, .gradient-2, .gradient-3, .gradient-4');
                
                gradients.forEach((gradient, index) => {
                    const speed = 0.3 + (index * 0.1);
                    const yPos = -(scrolled * speed);
                    gradient.style.transform = `translate3d(0, ${yPos}px, 0)`;
                    gradient.style.willChange = 'transform';
                });
                
                ticking = false;
            });
            ticking = true;
        }
    });

    // Scroll progress indicator removed for cleaner look
}

// Enhanced Smooth Scroll
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 68;
                const targetPosition = target.offsetTop - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Close mobile menu on navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            const navToggle = document.querySelector('.navbar-toggle');
            const navRight = document.querySelector('.navbar-right');
            if (navToggle && navRight) {
                navToggle.classList.remove('active');
                navRight.classList.remove('active');
            }
        });
    });
}

// Enhanced Button Effects
function initButtonEffects() {
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
            this.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
        });
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'none';
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
            
            button.disabled = true;
            button.textContent = 'SENDING...';
            
            const formData = {
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            setTimeout(() => {
                toast.success(
                    'Message Sent!',
                    `Thank you ${formData.firstName}! I'll get back to you soon.`,
                    5000
                );
                
                form.reset();
                button.disabled = false;
                button.textContent = originalText;
            }, 1500);
        });

        // Real-time validation
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

            // Add focus animations
            input.addEventListener('focus', function() {
                this.style.transform = 'scale(1.02)';
                this.style.borderBottom = '2px solid #0050FF';
            });

            input.addEventListener('blur', function() {
                this.style.transform = 'scale(1)';
            });
        });
    }
}

// Download CV Handler
function initDownloadCV() {
    const downloadBtn = document.querySelector('.download-cv-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            // Don't prevent default - let the download happen
            
            toast.info(
                'Download Started',
                'Walter De Lara Resume.docx is downloading...',
                3000
            );
            
            setTimeout(() => {
                toast.success(
                    'Download Complete!',
                    'Resume has been downloaded successfully.',
                    4000
                );
            }, 1500);
        });
    }
}

// Welcome Toast
function showWelcomeToast() {
    const body = document.body;
    const pageToasts = [
        {
            className: 'about-page',
            method: 'success',
            title: 'Welcome!',
            message: 'Thanks for visiting my portfolio.'
        },
        {
            className: 'resume-page',
            method: 'info',
            title: 'Welcome to my info',
            message: 'Browse my experience and education details.'
        },
        {
            className: 'projects-page',
            method: 'info',
            title: 'Projects showcase',
            message: 'Dive into the initiatives I helped lead.'
        },
        {
            className: 'contact-page',
            method: 'info',
            title: 'Let’s connect',
            message: 'Send a note and I’ll reply as soon as I can.'
        }
    ];

    const match = pageToasts.find(item => body.classList.contains(item.className));
    if (match) {
        setTimeout(() => {
            toast[match.method](match.title, match.message, 4000);
        }, 900);
    }
}

// Add fade-in animation to page elements on load
function initPageAnimations() {
    const elements = document.querySelectorAll('.navbar, .footer, .hello-text, .subtitle, .description');
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.animation = `fadeIn 0.6s ease-out ${index * 0.1}s forwards`;
    });
}

// Initialize all functions when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initMobileNav();
    initSmoothScroll();
    initButtonEffects();
    initContactForm();
    initDownloadCV();
    initScrollAnimations();
    initResumeScrollAnimations();
    initProjectsScrollVisibility();
    initEducationScrollVisibility();
    initExperienceScrollVisibility();
    initPersonalScrollVisibility();
    initSkillScrollVisibility();
    showWelcomeToast();
    initPageAnimations();
    
    console.log('Portfolio initialized successfully');
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { toast, ToastNotification };
}
