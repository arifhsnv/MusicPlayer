const musicContainer = document.querySelector(".container");
const prevButton = document.querySelector(".prev-button");
const playButton = document.querySelector(".play-button");
const forwardButton = document.querySelector(".forward-button");
const audio = document.querySelector(".audio");
const progressContainer = document.querySelector(".progress-container");
const progress = document.querySelector(".progress");
const musicianImage = document.querySelector(".cover");
const title = document.querySelector(".title");
const songs = ["Paster-Yenidən", "Paster-Gang", "Ceyhun-Samedov-Getmə"];
let songIndex = 2;
loadSong(songs[songIndex]);
function loadSong(song) {
  title.innerHTML = song;
  audio.src = `musics/${song}.mp3`;
  musicianImage.src = `img/${song}.jpg`;
}
function playSong() {
  musicContainer.classList.add("play");
  playButton.querySelector(".fa-solid").classList.remove("fa-play");
  playButton.querySelector(".fa-solid").classList.add("fa-pause");
  audio.play();
}
function pauseSong() {
  musicContainer.classList.remove("play");
  playButton.querySelector(".fa-solid").classList.add("fa-play");
  playButton.querySelector(".fa-solid").classList.remove("fa-pause");
  audio.pause();
}
const prevSong = function () {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  playSong();
};
const nextSong = function () {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
};

playButton.addEventListener("click", () => {
  const isPlaying = musicContainer.classList.contains("play");
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});
prevButton.addEventListener("click", prevSong);
forwardButton.addEventListener("click", nextSong);

const uptadeProgress = function (e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
};
audio.addEventListener("timeupdate", uptadeProgress);
const setProgress = function (e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
};
progressContainer.addEventListener("click", setProgress);
