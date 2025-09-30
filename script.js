document.addEventListener('DOMContentLoaded', function() {

    // --- GSAP ANIMATIONS ---
    const gsapAnims = () => {
        gsap.registerPlugin(ScrollTrigger);

        // Hero Section Animation
        gsap.to('.hero-content', {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power3.out",
            delay: 0.5
        });

        // Animate elements on scroll
        const animateOnScroll = (elem, y = 50) => {
            gsap.from(elem, {
                scrollTrigger: {
                    trigger: elem,
                    start: "top 85%",
                    toggleActions: "play none none none"
                },
                opacity: 0,
                y: y,
                duration: 1,
                ease: "power3.out",
                stagger: 0.2
            });
        };

        animateOnScroll('.about-content .animate-text');
        animateOnScroll('.about-content .animate-image');
        animateOnScroll('.section-title');
        animateOnScroll('.service-card', 100);
        animateOnScroll('.portfolio-item');
        animateOnScroll('.testimonial-card');
        animateOnScroll('.contact-form .form-group');
    };

    // --- NAVBAR SCROLL EFFECT ---
    const navbarScroll = () => {
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    };

    // --- DARK MODE TOGGLE ---
    const darkModeToggle = () => {
        const themeSwitcher = document.querySelector('.theme-switcher');
        const body = document.body;

        themeSwitcher.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            // Save preference to localStorage
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });

        // Check for saved theme preference
        if (localStorage.getItem('theme') === 'dark') {
            body.classList.add('dark-mode');
        }
    };

    // --- HAMBURGER MENU FOR MOBILE ---
    const mobileMenu = () => {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        const navLinks = document.querySelectorAll('.nav-link');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    };
    
    // Initialize all functions
    gsapAnims();
    navbarScroll();
    darkModeToggle();
    mobileMenu();

});