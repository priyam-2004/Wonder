document.addEventListener("DOMContentLoaded", function () {
    let audio;

    // Check if audio already exists
    if (!window.audioPlayer) {
        audio = document.createElement("audio");
        audio.id = "background-music";
        audio.src = "audio.mp3";  // Make sure this file is in the same folder as index.html
        audio.loop = true;
        audio.volume = 0.5;
        document.body.appendChild(audio);

        // Store it globally so it persists across pages
        window.audioPlayer = audio;

        // Play audio
        audio.play().catch(() => {
            console.log("Autoplay blocked. Waiting for user interaction.");
        });

        // Ensure it plays when user clicks anywhere
        document.addEventListener("click", function () {
            audio.play();
        });
    }
});

