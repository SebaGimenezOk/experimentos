const audio = document.querySelector(".audio");
const playButton = document.querySelector(".play");
const playButtonIcon = playButton.querySelector("i")
const stopButton = document.querySelector(".stop")


audio.addEventListener("click", playPauseAudio)
playButton.addEventListener("click", playPauseAudio)
stopButton.addEventListener("click", stopAudio)

function playPauseAudio() {

    audio[audio.paused ? "play" : "pause"]()
    playButtonToggleIcon()
}


function playButtonToggleIcon() {
    if (audio.paused) {
        playButtonIcon.classList.remove("fa-pause")
        playButtonIcon.classList.add("fa-play")
    } else {
        playButtonIcon.classList.remove("fa-play")
        playButtonIcon.classList.add("fa-pause")
    }
}

function stopAudio() {
    audio.pause()
    audio.currentTime = 0
    playButtonToggleIcon()

}