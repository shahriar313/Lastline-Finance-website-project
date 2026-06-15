document.addEventListener('DOMContentLoaded', () => {
    
    // --- Sticky Header Effect ---
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
            header.style.padding = '10px 0';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
            header.style.padding = '15px 0';
        }
    });

    // --- Service Card Hover Effects ---
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.icon-wrapper');
            icon.style.backgroundColor = '#1e58d7';
            icon.style.color = '#ffffff';
        });

        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.icon-wrapper');
            icon.style.backgroundColor = '#e8f0fe';
            icon.style.color = '#1e58d7';
        });
    });

    // --- Number Counting Animation for Stats Section ---
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // The lower the number, the faster the count

    const animateCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText.replace(/,/g, '');
                const inc = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc).toLocaleString();
                    setTimeout(updateCount, 10);
                } else {
                    counter.innerText = target.toLocaleString();
                }
            };
            updateCount();
        });
    };

    // Trigger stats animation when scrolled into view using Intersection Observer
    const statsSection = document.querySelector('.stats');
    if(statsSection) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    observer.unobserve(entry.target); 
                }
            });
        }, { threshold: 0.5 }); // Starts when 50% of the section is visible

        observer.observe(statsSection);
    }

    // --- Prevent Form Submission Reload & Show Feedback ---
    const callbackForm = document.getElementById('callbackForm');
    if(callbackForm) {
        callbackForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevents page reload
            const btn = callbackForm.querySelector('button');
            const originalText = btn.innerText;
            
            // Visual feedback
            btn.innerText = "Request Sent!";
            btn.style.backgroundColor = "#2ecc71"; // Success green color
            btn.style.borderColor = "#2ecc71";
            
            // Reset button and form after 3 seconds
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.backgroundColor = ""; 
                btn.style.borderColor = ""; 
                callbackForm.reset();
            }, 3000);









            // --- Mobile Menu Toggle Logic ---
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            // Toggle the visibility of the nav links
            navLinks.classList.toggle('active');
            
            // Change the icon from hamburger (bars) to close (X)
            const icon = menuToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    }
        });
    }



    /*contract form*/





    document.addEventListener('DOMContentLoaded', () => {
    
    // --- Sticky Header Effect ---
    const header = document.getElementById('main-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                header.style.padding = '10px 0';
            } else {
                header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
                header.style.padding = '15px 0';
            }
        });
    }

    // --- Office Tabs Switching Logic ---
    const tabs = document.querySelectorAll('.office-tabs .tab');
    // If you had multiple map iframes, you could change the src here.
    // For now, it just handles the visual active state.
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Example of how you would switch maps based on data-target
            // const target = tab.getAttribute('data-target');
            // console.log("Switched to map: ", target);
        });
    });

    // --- Prevent Main Contact Form Submission & Show Feedback ---
    const contactForm = document.getElementById('mainContactForm');
    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); 
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;
            
            // Visual feedback
            btn.innerText = "MESSAGE SENT!";
            btn.style.backgroundColor = "#8cc63f"; // Accent Green
            
            // Reset button and form after 3 seconds
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.backgroundColor = ""; 
                contactForm.reset();
            }, 3000);
        });
    }

    // --- Newsletter Form Submission ---
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = form.querySelector('input');
            input.value = "Subscribed successfully!";
            input.style.color = "#8cc63f";
            
            setTimeout(() => {
                input.value = "";
                input.style.color = "";
            }, 3000);
        });
    });
});




/*-captcha check function for apply now form*-*/
function checkRobot() {
    if (!document.getElementById("robot").checked) {
        alert("Please confirm you are not a robot");
        return false;
    }
    return true;
}





  setTimeout(function(){
    let loader = document.getElementById("loader");

    loader.style.opacity = "0";
    loader.style.transition = "0.5s";

    setTimeout(function(){
        loader.style.display = "none";
    }, 500);

}, 1500);







// --- Initialize AOS Scroll Animation ---
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 800, //  (800ms = 0.8s)
        easing: 'ease-in-out', // 
        once: true, // 
        offset: 100 // 
    });
});

});