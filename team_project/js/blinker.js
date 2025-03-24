// Make the link blink (Duy)
document.querySelectorAll("a").forEach(link => {
    let hoverTimer;

    link.addEventListener("mouseenter", () => {
        hoverTimer = setTimeout(() => {
            link.classList.add("delay-blink");
        }, 2000);
    });

    link.addEventListener("mouseleave", () => {
        clearTimeout(hoverTimer);
        link.classList.remove("delay-blink"); 
    });
});
