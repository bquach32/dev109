// This function will attempt to play the audio when the page loads or on user interaction
        function playAudio() {
            var audio = document.getElementById('bg-music');  // Get the audio element by ID

            // Check if the audio is already playing
            if (audio.paused) {
                // Attempt to play the audio
                audio.play().then(function() {
                    console.log('Audio is playing');
                }).catch(function(error) {
                    // If autoplay was blocked, handle the error
                    console.error('Autoplay blocked: ', error);
                    alert('Autoplay was blocked! Please interact with the page to start the audio.');
                });
            } else {
                console.log('Audio is already playing');
            }
        }

        // Attempt to play the audio when the page is fully loaded
        window.onload = function() {
            playAudio(); // Call the function to start playing the audio when the page loads
        };

        // Add event listener for button click (optional)
        document.getElementById('play-button').addEventListener('click', function() {
            playAudio(); // Start the audio when the user clicks the button
        });
