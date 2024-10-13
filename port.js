document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Scroll to Top Button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.textContent = '↑';
scrollTopBtn.classList.add('scroll-to-top');
document.body.appendChild(scrollTopBtn);

// Show the button when scrolling down
window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

// Scroll back to the top when the button is clicked
scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Typewriter Effect for Introduction
const typewriterText = "Hi, I'm Shafiur Rahman Rad, a passionate CSE student.";
let i = 0;
const speed = 100; // Speed of typing effect
function typeWriter() {
    if (i < typewriterText.length) {
        document.querySelector('.header h1').textContent += typewriterText.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
window.onload = typeWriter;

// Hover Effect on Project Cards (Optional)
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.transition = 'transform 0.3s ease-in-out';
    });
    card.addEventListener('mouseout', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Dynamic Year in Footer
const yearSpan = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;
