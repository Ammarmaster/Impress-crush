const audioPlayer = document.getElementById('audio-player');
const playBtn = document.getElementById('play-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const albumArt = document.getElementById('album-art');
const songTitle = document.getElementById('song-title');
const artist = document.getElementById('artist');
const progressBar = document.getElementById('progress-bar');

// Your music data
const songs = [
  {
    title: 'Song 1',
    artist: 'Artist 1',
    file: 'song1.mp3',
    artwork: 'artwork1.jpg'
  },
  {
    title: 'Song 2',
    artist: 'Artist 2',
    file: 'song2.mp3',
    artwork: 'artwork2.jpg'
  },
  {
    title: 'Song 3',
    artist: 'Artist 3',
    file: 'song3.mp3',
    artwork: 'artwork3.jpg'
  }
];

let currentSongIndex = 0;

// Load song
function loadSong(songIndex) {
  const song = songs[songIndex];
  audioPlayer.src = song.file;
  albumArt.src = song.artwork;
  songTitle.textContent = song.title;
  artist.textContent = song.artist;
}

// Play song
function playSong() {
  audioPlayer.play();
  playBtn.innerHTML = '&#10074;&#10074;'; // Pause icon
}

// Pause song
function pauseSong() {
  audioPlayer.pause();
  playBtn.innerHTML = '&#9658;'; // Play icon
}

// Previous song
function prevSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(currentSongIndex);
  playSong();
}

// Next song
function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex);
  playSong();
}

// Update progress bar
function updateProgressBar() {
  const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
  progressBar.style.width = `${progress}%`;
}

// Event listeners
playBtn.addEventListener('click', () => {
  if (audioPlayer.paused) {
    playSong();
  } else {
    pauseSong();
  }
});

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
audioPlayer.addEventListener('timeupdate', updateProgressBar);

// Initial load
loadSong(currentSongIndex);