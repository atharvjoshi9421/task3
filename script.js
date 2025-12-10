// ===================================
// GSAP SETUP
// ===================================
gsap.registerPlugin(ScrollTrigger);

// ===================================
// NAVBAR SCROLL BEHAVIOR
// ===================================
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===================================
// NAVBAR ENTRY ANIMATION
// ===================================
gsap.from('.navbar', {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: 'power2.out',
    delay: 0.2
});

// ===================================
// MOBILE MENU TOGGLE
// ===================================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('mobile-active');
    
    // Animate mobile menu
    if (navMenu.classList.contains('mobile-active')) {
        gsap.from('.nav-menu.mobile-active', {
            x: '100%',
            duration: 0.5,
            ease: 'power2.out'
        });
        
        gsap.from('.nav-menu.mobile-active li', {
            x: 50,
            opacity: 0,
            duration: 0.4,
            stagger: 0.1,
            ease: 'power2.out',
            delay: 0.2
        });
    }
});

// Close mobile menu when clicking nav links
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('mobile-active');
    });
});

// ===================================
// HERO SECTION PAGE-LOAD ANIMATION
// ===================================
const heroTimeline = gsap.timeline({ defaults: { ease: 'power2.out' } });

heroTimeline
    .from('.hero-heading', {
        y: 80,
        opacity: 0,
        duration: 1,
        delay: 0.5
    })
    .from('.hero-subtitle', {
        y: 50,
        opacity: 0,
        duration: 0.8
    }, '-=0.5')
    .from('.hero-cta', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        scale: 0.9
    }, '-=0.4');

// ===================================
// HERO CTA BUTTON HOVER ANIMATION
// ===================================
const heroCta = document.querySelector('.hero-cta');

heroCta.addEventListener('mouseenter', () => {
    gsap.to(heroCta, {
        scale: 1.05,
        duration: 0.3,
        ease: 'power2.out'
    });
});

heroCta.addEventListener('mouseleave', () => {
    gsap.to(heroCta, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
    });
});

// ===================================
// POPULAR DESTINATIONS SCROLL ANIMATION
// ===================================
gsap.from('.destinations .section-title', {
    scrollTrigger: {
        trigger: '.destinations',
        start: 'top 80%',
        end: 'top 50%',
        toggleActions: 'play none none none'
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out'
});

gsap.from('.destinations .section-subtitle', {
    scrollTrigger: {
        trigger: '.destinations',
        start: 'top 80%',
        end: 'top 50%',
        toggleActions: 'play none none none'
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    ease: 'power2.out'
});

gsap.from('.destination-card', {
    scrollTrigger: {
        trigger: '.destinations-grid',
        start: 'top 75%',
        end: 'top 25%',
        toggleActions: 'play none none none'
    },
    y: 80,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power2.out'
});

// ===================================
// WHY CHOOSE US SCROLL ANIMATION
// ===================================
gsap.from('.why-choose .section-title', {
    scrollTrigger: {
        trigger: '.why-choose',
        start: 'top 80%',
        end: 'top 50%',
        toggleActions: 'play none none none'
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out'
});

gsap.from('.why-choose .section-subtitle', {
    scrollTrigger: {
        trigger: '.why-choose',
        start: 'top 80%',
        end: 'top 50%',
        toggleActions: 'play none none none'
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    ease: 'power2.out'
});

gsap.from('.feature-card', {
    scrollTrigger: {
        trigger: '.features-grid',
        start: 'top 75%',
        end: 'top 25%',
        toggleActions: 'play none none none'
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    stagger: 0.12,
    ease: 'power2.out'
});

// ===================================
// TOUR PACKAGES SCROLL ANIMATION
// ===================================
gsap.from('.packages .section-title', {
    scrollTrigger: {
        trigger: '.packages',
        start: 'top 80%',
        end: 'top 50%',
        toggleActions: 'play none none none'
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out'
});

gsap.from('.packages .section-subtitle', {
    scrollTrigger: {
        trigger: '.packages',
        start: 'top 80%',
        end: 'top 50%',
        toggleActions: 'play none none none'
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    ease: 'power2.out'
});

gsap.from('.package-card', {
    scrollTrigger: {
        trigger: '.packages-grid',
        start: 'top 75%',
        end: 'top 25%',
        toggleActions: 'play none none none'
    },
    y: 80,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power2.out'
});

// ===================================
// TESTIMONIALS SCROLL ANIMATION
// ===================================
gsap.from('.testimonials .section-title', {
    scrollTrigger: {
        trigger: '.testimonials',
        start: 'top 80%',
        end: 'top 50%',
        toggleActions: 'play none none none'
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out'
});

gsap.from('.testimonials .section-subtitle', {
    scrollTrigger: {
        trigger: '.testimonials',
        start: 'top 80%',
        end: 'top 50%',
        toggleActions: 'play none none none'
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    ease: 'power2.out'
});

gsap.from('.testimonial-card', {
    scrollTrigger: {
        trigger: '.testimonials-grid',
        start: 'top 75%',
        end: 'top 25%',
        toggleActions: 'play none none none'
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power2.out'
});

// ===================================
// TESTIMONIAL FLOATING ANIMATION (VERY SUBTLE)
// ===================================
gsap.to('.testimonial-card', {
    y: -8,
    duration: 2.5,
    ease: 'power1.inOut',
    stagger: {
        each: 0.3,
        repeat: -1,
        yoyo: true
    }
});

// ===================================
// CALL TO ACTION SCROLL ANIMATION
// ===================================
gsap.from('.cta-content h2', {
    scrollTrigger: {
        trigger: '.cta',
        start: 'top 75%',
        end: 'top 45%',
        toggleActions: 'play none none none'
    },
    y: 50,
    opacity: 0,
    duration: 0.9,
    ease: 'power2.out'
});

gsap.from('.cta-content p', {
    scrollTrigger: {
        trigger: '.cta',
        start: 'top 75%',
        end: 'top 45%',
        toggleActions: 'play none none none'
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    ease: 'power2.out'
});

gsap.from('.cta-btn', {
    scrollTrigger: {
        trigger: '.cta',
        start: 'top 75%',
        end: 'top 45%',
        toggleActions: 'play none none none'
    },
    y: 30,
    opacity: 0,
    scale: 0.9,
    duration: 0.8,
    delay: 0.4,
    ease: 'power2.out'
});

// ===================================
// CTA BACKGROUND PARALLAX
// ===================================
gsap.to('.cta', {
    scrollTrigger: {
        trigger: '.cta',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
    },
    backgroundPosition: '50% 100px',
    ease: 'none'
});

// ===================================
// CTA BUTTON HOVER ANIMATION
// ===================================
const ctaBtn = document.querySelector('.cta-btn');

ctaBtn.addEventListener('mouseenter', () => {
    gsap.to(ctaBtn, {
        scale: 1.05,
        duration: 0.3,
        ease: 'power2.out'
    });
});

ctaBtn.addEventListener('mouseleave', () => {
    gsap.to(ctaBtn, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
    });
});

// ===================================
// FOOTER SCROLL ANIMATION
// ===================================
gsap.from('.footer-content', {
    scrollTrigger: {
        trigger: '.footer',
        start: 'top 85%',
        end: 'top 55%',
        toggleActions: 'play none none none'
    },
    y: 50,
    opacity: 0,
    duration: 0.9,
    ease: 'power2.out'
});

gsap.from('.footer-bottom', {
    scrollTrigger: {
        trigger: '.footer',
        start: 'top 80%',
        end: 'top 50%',
        toggleActions: 'play none none none'
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    delay: 0.3,
    ease: 'power2.out'
});

// ===================================
// SOCIAL ICONS HOVER ANIMATION
// ===================================
const socialIcons = document.querySelectorAll('.social-icon');

socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        gsap.to(icon, {
            scale: 1.15,
            rotation: 5,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    icon.addEventListener('mouseleave', () => {
        gsap.to(icon, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// ===================================
// REFRESH SCROLLTRIGGER ON RESIZE
// ===================================
window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
});

// ===================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            gsap.to(window, {
                duration: 1,
                scrollTo: {
                    y: target,
                    offsetY: 80
                },
                ease: 'power2.inOut'
            });
        }
    });
});