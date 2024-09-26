/* ----------toggle icon navbar----------*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

/* ----------scroll section active link------------*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });

    /* ----------sticky navbar------------*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* ----------remove toggle icon and navbar------------*/
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/* ----------scroll reveal------------*/
document.addEventListener('DOMContentLoaded', function() {
   
    ScrollReveal().reveal('.home-content', {
        origin: 'top',
        distance: '50px',
        duration: 1000,
        delay: 200,
        easing: 'ease-in-out',
        reset: true, 
    });

    ScrollReveal().reveal('.about-content', {
        origin: 'bottom',
        distance: '50px',
        duration: 1000,
        delay: 200,
        easing: 'ease-in-out',
        reset: true, 
    });

    ScrollReveal().reveal('.projects-box', {
        origin: 'left',
        distance: '50px',
        duration: 1000,
        delay: 200,
        easing: 'ease-in-out',
        interval: 200, 
        reset: true, 
    });

    ScrollReveal().reveal('.contact form', {
        origin: 'right',
        distance: '50px',
        duration: 1000,
        delay: 200,
        easing: 'ease-in-out',
        reset: true, 
    });
});




