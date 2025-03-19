
function playBackgroundMusic() {
    var music = document.getElementById("music"); 
    music.volume = 0.3;
    music.play().catch(function(error) { 
        console.log("Autoplay was prevented: " + error); 
    });
}

document.addEventListener("DOMContentLoaded", function() {
    document.body.addEventListener("click", function() {
        playBackgroundMusic();
    }, { once: true }); 
});
