// Navbar
let menu = document.querySelector('#menuIcon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}

//Dark mode
let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
    if (darkmode.classList.contains('bx-moon')) {
        darkmode.classList.replace('bx-moon','bx-sun');
        document.body.classList.add('active');
    } else {
        darkmode.classList.replace('bx-sun','bx-moon');
        document.body.classList.remove('active');
    }
}

// Scroll Reveal
const sr = ScrollReveal ({
    origin: 'top',
    distance: '40px',
    duration: 2000,
    reset: true
});

sr.reveal(`.home-content, .home-img, 
            .about-img, .about-content, 
            .box, .s-box, 
            .btn, .connect-content, 
            .contact-box`, {
    interval: 200
})