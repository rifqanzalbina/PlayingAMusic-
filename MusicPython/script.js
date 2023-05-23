var audioPlayer = new Audio();
var playlist = document.getElementById("playlist");
var tracks = ["audio1.mp3", "audio2.mp3", "audio3.mp3"]; // Example track list

// Populate the playlist
for (var i = 0; i < tracks.length; i++) {
  var trackItem = document.createElement("li");
  trackItem.textContent = tracks[i];
  trackItem.addEventListener("click", function() {
    playMusic(this.textContent);
  });
  playlist.appendChild(trackItem);
}

function playMusic(track) {
  if (track) {
    audioPlayer.src = track;
  } else {
    audioPlayer.src = tracks[0];
  }
  audioPlayer.play();
}

function pauseMusic() {
  audioPlayer.pause();
}

function stopMusic() {
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
}

function nextMusic() {
  var currentIndex = tracks.indexOf(audioPlayer.src);
  var nextIndex = (currentIndex + 1) % tracks.length;
  audioPlayer.src = tracks[nextIndex];
  audioPlayer.play();
}

function prevMusic() {
  var currentIndex = tracks.indexOf(audioPlayer.src);
  var prevIndex = (currentIndex - 1 + tracks.length) % tracks.length;
  audioPlayer.src = tracks[prevIndex];
  audioPlayer.play();
}
