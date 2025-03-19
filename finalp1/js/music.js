 $(document).ready(function() {
            var play = document.getElementById("music");
  
            $("body").one("click", function() {
                play.play().catch(function(error) {
                    console.log("Autoplay prevented: " + error);
                });
            });
        });
