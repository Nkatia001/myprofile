// JavaScript for enhancing the portfolio website

// Add animation to the profile picture
const profilePic = document.getElementById('profile-pic');
profilePic.addEventListener('mouseover', () => {
    profilePic.style.transform = 'scale(1.1)';
});
profilePic.addEventListener('mouseout', () => {
    profilePic.style.transform = 'scale(1)';
});

// Change color of navigation links on hover
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#00f'; // Blue color on hover
    });
    link.addEventListener('mouseout', () => {
        link.style.color = '#fff'; // White color on mouseout
    });
});

// Add smooth scrolling effect to navigation links
document.querySelectorAll('nav ul li a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});