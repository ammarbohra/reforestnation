import 'bootstrap'
import { gsapInit } from './gsap'

window.addEventListener('load', () => {
    gsapInit()    
})

const myNav = document.querySelector('.navbar');
const navItem = document.getElementsByClassName('nav-item');

console.log(navItem);

window.addEventListener('scroll',() => {
    // console.log(window.scrollY)
    if (window.scrollY >= 100 ) {
        myNav.classList.add("bg-white");
        myNav.classList.add("navbar-light");
        myNav.classList.remove("navbar-dark");
    } 
    else {
        myNav.classList.add("navbar-dark");
        myNav.classList.remove("bg-white");
        myNav.classList.remove("navbar-light");
    }
})