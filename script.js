// ================================
// AL FAARED TRAVEL
// Premium Logo Slider
// Version 4
// ================================

document.addEventListener("DOMContentLoaded", function () {

    const track = document.querySelector(".logo-track");

    if (!track) return;

    // Pause on hover
    track.addEventListener("mouseenter", function () {
        track.style.animationPlayState = "paused";
    });

    track.addEventListener("mouseleave", function () {
        track.style.animationPlayState = "running";
    });

    // Pause when browser tab is inactive
    document.addEventListener("visibilitychange", function () {

        if (document.hidden) {
            track.style.animationPlayState = "paused";
        } else {
            track.style.animationPlayState = "running";
        }

    });

    console.log("==================================");
    console.log("AL FAARED TRAVEL");
    console.log("Premium Logo Slider Loaded");
    console.log("Version 4");
    console.log("==================================");

});
