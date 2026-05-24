// Keep track of the currently playing audio
let currentAudio = null;

// Function to play audio based on the provided audio element ID
// Function to toggle audio playback based on the provided audio element ID
function playAudio(audioId) {
    const audioElement = document.getElementById(audioId);

    if (audioElement.paused) {
        audioElement.currentTime = 0; // Reset audio to the beginning
        audioElement.play();
    } else {
        audioElement.pause();
    }
}

document.getElementById("boeses-lachen-btn").addEventListener("click", function() {
    playAudio("boeses-lachen");
});


document.getElementById("party-time-btn").addEventListener("click", function() {
    playAudio("party-time");
});

document.getElementById("hallelujah-btn").addEventListener("click", function() {
    playAudio("hallelujah");
});

document.getElementById("lachen-btn").addEventListener("click", function() {
    playAudio("lachen");
});

document.getElementById("applaus-btn").addEventListener("click", function() {
    playAudio("applaus");
});

document.getElementById("auto-hupe-btn").addEventListener("click", function() {
    playAudio("auto-hupe");
});

document.getElementById("scifi-btn").addEventListener("click", function() {
    playAudio("scifi");
});

document.getElementById("explosion-btn").addEventListener("click", function() {
    playAudio("explosion");
});

document.getElementById("squeak-btn").addEventListener("click", function() {
    playAudio("squeak");
});

document.getElementById("baby-btn").addEventListener("click", function() {
    playAudio("baby");
});

document.getElementById("ka-ching-btn").addEventListener("click", function() {
    playAudio("ka-ching");
});

document.getElementById("bark-btn").addEventListener("click", function() {
    playAudio("bark");
});

document.getElementById("meow-btn").addEventListener("click", function() {
    playAudio("meow");
});

document.getElementById("horse-btn").addEventListener("click", function() {
    playAudio("horse");
});

document.getElementById("zombie-btn").addEventListener("click", function() {
    playAudio("zombie");
});

document.getElementById("old-phone-btn").addEventListener("click", function() {
    playAudio("old-phone");
});
