        // Function to play the background music with volume control
        function playBackgroundMusic() {
            var music = document.getElementById("music"); 
            music.volume = 0.3; 
            music.play().catch(function(error) { 
                console.log("Autoplay was prevented: " + error); 
            });
        }

        $(document).ready(function() {
            $("body").one("click", function() {
                playBackgroundMusic();
            });
        });
