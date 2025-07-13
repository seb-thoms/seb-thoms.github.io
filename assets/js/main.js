document.addEventListener('DOMContentLoaded', function() {
    
    // --- Mobile Navigation Toggle ---
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mainNavigation = document.querySelector('.main-navigation');
    
    if (mobileNavToggle && mainNavigation) {
        mobileNavToggle.addEventListener('click', () => {
            const isNavOpen = document.body.classList.contains('nav-open');
            mobileNavToggle.setAttribute('aria-expanded', !isNavOpen);
            document.body.classList.toggle('nav-open');
        });

        // Close mobile nav when a link inside it is clicked
        mainNavigation.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                if (document.body.classList.contains('nav-open')) {
                    mobileNavToggle.setAttribute('aria-expanded', 'false');
                    document.body.classList.remove('nav-open');
                }
            }
        });
    }

    // --- Sticky Header on Scroll ---
    const topNav = document.querySelector('.top-nav');
    if (topNav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                topNav.classList.add('scrolled');
            } else {
                topNav.classList.remove('scrolled');
            }
        });
    }

    // --- Smooth Scrolling for Anchor Links ---
    const headerHeight = 80;
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            // Check if the link is part of the main navigation in mobile view before preventing default
            if (window.innerWidth > 768 || !mainNavigation.contains(e.target)) {
                 e.preventDefault();
            }
           
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- General Fade-in Animation Observer ---
    const faders = document.querySelectorAll('.fade-in-section');
    const faderOptions = {
        threshold: 0,
        rootMargin: "0px 0px -100px 0px"
    };
    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            appearOnScroll.unobserve(entry.target);
        });
    }, faderOptions);
    faders.forEach(fader => appearOnScroll.observe(fader));

    // --- Staggered Timeline Animation Observer ---
    const timelineItems = document.querySelectorAll('.timeline-item.hidden');
    const timelineOptions = { threshold: 0.1 };
    const timelineObserver = new IntersectionObserver(function(entries, timelineObserver) {
        entries.forEach((entry, index) => {
            if (!entry.isIntersecting) return;
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 150);
            timelineObserver.unobserve(entry.target);
        });
    }, timelineOptions);
    timelineItems.forEach(item => timelineObserver.observe(item));

    // --- Typewriter Animation ---
    class Typewriter {
        constructor(el, phrases) {
            this.el = el;
            this.phrases = phrases;
            this.loopNum = 0;
            this.period = 2000;
            this.txt = '';
            this.isDeleting = false;
            this.tick();
        }
        tick() {
            const i = this.loopNum % this.phrases.length;
            const fullTxt = this.phrases[i];
            if (this.isDeleting) {
                this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {
                this.txt = fullTxt.substring(0, this.txt.length + 1);
            }
            this.el.innerHTML = `<span class="wrap">${this.txt}</span>`;
            let delta = 180 - Math.random() * 90;
            if (this.isDeleting) { delta /= 2; }
            if (!this.isDeleting && this.txt === fullTxt) {
                delta = this.period;
                this.isDeleting = true;
            } else if (this.isDeleting && this.txt === '') {
                this.isDeleting = false;
                this.loopNum++;
                delta = 500;
            }
            setTimeout(() => { this.tick(); }, delta);
        }
    }

    const typewriterElement = document.querySelector('.hero-subtitle');
    const phrases = [
        "I build things with AI.",
        "I'm an IEEE-CS Scholar.",
        "I'm a Grad Student.",
        "I'm a Quizzer.",
        "I'm an Ex-Commvault Engineer.",
        "I'm Learning, Always."
    ];
    if (typewriterElement) {
        new Typewriter(typewriterElement, phrases);
    }
});