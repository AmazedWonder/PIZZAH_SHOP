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