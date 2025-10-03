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

    // --- LOGO THEME SWITCHING ---
    const logoThemeSwitch = () => {
        const logoImage = document.getElementById('logoImage');
        const body = document.body;

        const updateLogo = () => {
            if (body.classList.contains('dark-mode')) {
                logoImage.src = 'https://i.ibb.co/rGJTTtFc/logo-dark.jpg';
            } else {
                logoImage.src = 'https://i.ibb.co/zhdfckyV/logo-light.jpg';
            }
        };

        // Initial logo set
        updateLogo();

        return updateLogo;
    };

    // --- DARK MODE TOGGLE ---
    const darkModeToggle = () => {
        const themeSwitcher = document.querySelector('.theme-switcher');
        const body = document.body;
        const logoImage = document.getElementById('logoImage');

        const lightLogo = 'https://i.ibb.co/zhdfckyV/logo-light.jpg';
        const darkLogo = 'https://i.ibb.co/rGJTTtFc/logo-dark.jpg';

        // Toggle dark mode on click
        themeSwitcher.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            logoImage.src = body.classList.contains('dark-mode') ? darkLogo : lightLogo;
            localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
        });

        // Check for saved theme preference
        if (localStorage.getItem('theme') === 'dark') {
            body.classList.add('dark-mode');
            logoImage.src = darkLogo;
        } else {
            logoImage.src = lightLogo;
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

    // INITIALIZE EVERYTHING
    gsapAnims();
    navbarScroll();
    logoThemeSwitch();
    darkModeToggle();
    mobileMenu();

});
