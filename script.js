// Dynamic Navbar Effect on Scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '15px 50px';
        navbar.style.backgroundColor = '#0f172abf';
    } else {
        navbar.style.padding = '20px 50px';
        navbar.style.backgroundColor = 'rgba(15, 23, 42, 0.9)';
    }
});
