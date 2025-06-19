// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
let title = document.getElementById("animatedTitle");
let direction = 1;
let position = 0;

function animateTitle() {
    if (position >= 20 || position <= -20) direction *= -1;
    position += direction;
    title.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(animateTitle);
}

animateTitle();
