import { showHomepage } from "./home";
import { showMenu } from "./menu";
import { showAbout } from "./about";
import './styles.css';

document.addEventListener("DOMContentLoaded", (event) => {
    showHomepage();

    document.getElementById("home-button").addEventListener("click", showHomepage);
    document.getElementById("menu-button").addEventListener("click", showMenu);
    document.getElementById("about-button").addEventListener("click", showAbout);

    const navBtn = document.querySelector('nav').querySelectorAll('button');
    navBtn.forEach(button => {
        button.classList.add("nav-button");
    });
});