document.addEventListener("DOMContentLoaded", function () {
    // Check if the audio is already playing
    if (!window.audioPlayer) {
        const audio = document.createElement("audio");
        audio.src = "audio.mp3"; // Ensure this is the correct file path
        audio.loop = true;
        audio.autoplay = true;
        audio.volume = 0.5; // Adjust if needed
        
        document.body.appendChild(audio);
        window.audioPlayer = audio; // Store the audio globally to persist across pages

        // Attempt to play (some browsers block autoplay)
        audio.play().catch(() => {
            console.log("Autoplay blocked. Waiting for user interaction.");
        });

        // Allow playback on user interaction
        document.addEventListener("click", function () {
            audio.play();
        });
    }
});
