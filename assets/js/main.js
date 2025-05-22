document.addEventListener('DOMContentLoaded', function() {
    const topNav = document.querySelector('.top-nav');
    const navLinksContainer = document.querySelector('.main-navigation');
    const navLinks = document.querySelectorAll('.main-navigation a[href^="#"]');
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const headerHeight = document.querySelector('.top-nav').offsetHeight;
    const sections = document.querySelectorAll('main section[id]'); // All sections in main with an ID

    // 1. Mobile Navigation Toggle
    if (mobileNavToggle && navLinksContainer) {
        mobileNavToggle.addEventListener('click', () => {
            const isNavOpen = mobileNavToggle.getAttribute('aria-expanded') === 'true';
            mobileNavToggle.setAttribute('aria-expanded', !isNavOpen);
            document.body.classList.toggle('nav-open'); // Toggles class on body for .main-navigation transform
        });

        // Close mobile nav when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (document.body.classList.contains('nav-open')) {
                    mobileNavToggle.setAttribute('aria-expanded', 'false');
                    document.body.classList.remove('nav-open');
                }
            });
        });
    }

    // 2. Sticky Header on Scroll
    if (topNav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) { // Add 'scrolled' class after 50px scroll
                topNav.classList.add('scrolled');
            } else {
                topNav.classList.remove('scrolled');
            }
        });
    }

    // 3. Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                let offset = headerHeight;
                // If the target is the hero section, scroll to very top
                if (targetId === '#hero') {
                    offset = 0; 
                }
                
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 4. Active Link Highlighting on Scroll
    function changeActiveLink() {
        let index = sections.length;

        while(--index && window.scrollY + headerHeight * 1.5 < sections[index].offsetTop) {} // headerHeight * 1.5 for better trigger point
        
        navLinks.forEach((link) => link.classList.remove('active'));
        
        // Check if the current section ID has a corresponding nav link
        const currentSection = sections[index];
        if (currentSection) {
            const activeLink = document.querySelector(`.main-navigation a[href="#${currentSection.id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    }

    // Initial call and on scroll
    if (sections.length > 0 && navLinks.length > 0) {
        changeActiveLink(); // Set active link on page load
        window.addEventListener('scroll', changeActiveLink);
    }

    // 5. Update Copyright Year (Optional, if you have <span id="current-year"></span>)
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

});