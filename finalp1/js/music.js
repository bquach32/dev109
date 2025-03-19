 $(document).ready(function() {
            // Ensure the audio is ready to play
            var play = document.getElementById("music");
            
            // Play music when the user clicks anywhere on the page
            $("body").one("click", function() {
                play.play().catch(function(error) {
                    console.log("Autoplay prevented: " + error);
                });
            });
        });
