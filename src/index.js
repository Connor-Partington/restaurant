import { showHomepage } from "./home";
import { showMenu } from "./menu";
import { showAbout } from "./about";

document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("home-button").addEventListener("click", showHomepage);
    document.getElementById("menu-button").addEventListener("click", showMenu);
    document.getElementById("about-button").addEventListener("click", showAbout);
});