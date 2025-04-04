document.addEventListener ("DOMContentLoaded", function(){
    const songs = [
        {title: "red velvet - psycho", file: "musicas/psycho.mp3", image: "imagens/psycho.jpeg"},
        {title: "the strokes - hard to explain", file: "musicas/strokes.mp3", image: "imagens/thestrokes.jpg"},
        {title: "notorious b.i.g - party and bullshit", file: "musicas/big.mp3", image : "imagens/bullshit.jpeg"}
    ];

    let currentSongIndex = 0;
    let audioPlayer = document.getElementById("audio-player");
    let audioSource = document.getElementById("audio-source")
    let songTitle = document.getElementById("song-title");
    let songImage = document.getElementById("song-image");
    let playPauseButton = document.getElementById("play-pause");
    let progressBar = document.getElementById("progress-bar");
    let ValueDisplay = document.getElementById("value-display");
    let prevButton = document.getElementById("prev");
    let nextButton = document.getElementById("next");

    function updatePlayer() {
        const currentSong = songs[currentSongIndex];
        songTitle.textContent = currentSong.title;
        audioSource.src = currentSong.file;
        songImage.src = currentSong.image;
        audioPlayer.load();
        audioPlayer.play();
        playPauseButton.textContent = "Pause"
    }

    playPauseButton.addEventListener("click", function() {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseButton.textContent = "Pause";
        } else {
            audioPlayer.pause();
            playPauseButton.textContent = "Play"
        }
    });

    prevButton.addEventListener("click", function() {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        updatePlayer();
    });

    nextButton.addEventListener("click", function() {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        updatePlayer();
    });

    audioPlayer.addEventListener("timeupdate", function () {
        let progress = (audioPlayer.currentTime / audioPlayer.duration) * 100
        progressBar.value = progress || 0;
    });

    audioPlayer.addEventListener("ended", function () {
        nextButton.click();
    });

    songImage.addEventListener("click", function(){
        currentSongIndex = (currentImageIndex + 1) % songs.length;
        updatePlayer();

    });

    updatePlayer();


});