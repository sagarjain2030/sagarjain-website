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
    });
});

// CTA Button interactions
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function() {
        const buttonText = this.textContent;
        if (buttonText === 'View My Work') {
            const projectsSection = document.getElementById('projects');
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        } else if (buttonText === 'Contact Me') {
            alert('Thank you for your interest! Please send me an email at contact@sagarjain.com');
        }
    });
});

// Add animation to project cards on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

console.log('Portfolio website loaded successfully!');