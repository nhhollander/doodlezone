/*
 * This is the place where the code goes.
 *
 * I should probably put an actual code header here.
 */

window.addEventListener('load', main_init);

function main_init() {
    let homebutton = document.getElementById("homebutton");
    homebutton.addEventListener('click', homebutton_pressed);
}

function homebutton_pressed() {
    window.location = "index.html";
}