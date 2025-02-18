document.addEventListener("DOMContentLoaded", function () {
    let audio;

    // Check if there's an existing audio player stored
    if (sessionStorage.getItem("audioPlayer")) {
        audio = document.getElementById("background-music");
    } else {
        // Create the audio element
        audio = document.createElement("audio");
        audio.id = "background-music";
        audio.src = "audio.mp3"; // Ensure this file exists
        audio.loop = true;
        audio.autoplay = true;
        audio.volume = 0.5; // Adjust as needed

        // Append audio to the document body
        document.body.appendChild(audio);

        // Store player state in sessionStorage so it persists across pages
        sessionStorage.setItem("audioPlayer", "playing");

        // Play audio (handle autoplay restrictions)
        audio.play().catch(() => {
            console.log("Autoplay blocked, waiting for user interaction.");
        });

        // If user clicks anywhere, play audio (for autoplay-restricted browsers)
        document.addEventListener("click", function () {
            audio.play();
        });
    }
});
