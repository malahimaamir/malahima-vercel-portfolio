// Transition effect for navbar and back-to-top icon
window.addEventListener('scroll', function() {
    // Check if window is scrolled more than 550px
    if (window.scrollY > 550) {
        document.querySelector('.navbar').classList.add('solid');
        document.querySelector('.back-to-top').classList.add('visible');
    } else {
        document.querySelector('.navbar').classList.remove('solid');
        document.querySelector('.back-to-top').classList.remove('visible');
    }
});

// Scrolling effect for Arrow icons
document.querySelector("#scrollIcon").addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector("#about").scrollIntoView({ behavior: 'smooth' });
});

document.querySelector("#nav-about").addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector("#about").scrollIntoView({ behavior: 'smooth' });
});

document.querySelector("#nav-portfolio").addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector("#portfolio").scrollIntoView({ behavior: 'smooth' });
});

document.querySelector("#nav-contact").addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector("#contact").scrollIntoView({ behavior: 'smooth' });
});

document.querySelector(".navbar-brand").addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
