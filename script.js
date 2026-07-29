/*
==========================================================
AL FAARED TRAVEL
Professional Logo Slider
Platform : Netlify + Google Sites
File : script.js
==========================================================
*/

document.addEventListener("DOMContentLoaded", () => {

    const slider = document.querySelector(".logo-track");

    if (!slider) return;

    /* ---------------------------------------
       Pause animation when page is hidden
    --------------------------------------- */

    document.addEventListener("visibilitychange", () => {

        if (document.hidden) {
            slider.style.animationPlayState = "paused";
        } else {
            slider.style.animationPlayState = "running";
        }

    });

    /* ---------------------------------------
       Restart animation after browser resize
    --------------------------------------- */

    let resizeTimer;

    window.addEventListener("resize", () => {

        slider.style.animation = "none";

        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(() => {

            slider.offsetHeight;

            slider.style.animation = "";

        }, 150);

    });

});
