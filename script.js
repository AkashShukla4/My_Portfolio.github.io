

// ===================== Toggle icon navbar =====================
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


// ===================== scroll section active links =====================
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
