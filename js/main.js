const songList = [
    {
        title: "feel no pain",
        file: "Sade- Feel No Pain - Sade.mp3",
        cover: "muestra-para-favi.png"
    },

    {
        title: "Profugos nada personal",
        file: "Soda Stereo - Profugos nadapersonal.mp3",
        cover: "muestra-para-favi.png"
    },

    {
        title: "Maybe Tomorrow",
        file: "stereophonics - Maybe Tomorrow.mp3",
        cover: "muestra-para-favi.png"
    },
]

// capturar del DOM 
const songs = document.getElementById("songs");
const audio = document.getElementById("audio");
const cover = document.getElementById("cover");




//  accion cargar canciones mostrar lista 
function loadSongs() {
    songList.forEach((song, index) => {
        // crear li
        const li = document.createElement("li")
        //crear a 
        const link = document.createElement("a")
        //hidrata a
        link.textContent = song.title
        link.href = "#"
        link.addEventListener("click", () => loadSong(index))

        li.appendChild(link)
        //añadir li a ul

        songs.appendChild("li")

    })
}


function loadSong(songIndex) {
    audio.src = "./audio/" + songList[songIndex].file
    audio.play()

    changeCover(songIndex)

}

function changeCover(songIndex) {
    cover.src= "./imagenes/" + songList[songIndex].cover
}


// accion GO-- 
loadSongs()