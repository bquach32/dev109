window.addEventListener("click", function() {
    let audio = document.querySelector("audio"); 
    if (audio) {
        audio.volume = 0.3; 
        audio.play(); 
    }
});
