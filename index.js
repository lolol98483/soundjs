const body = document.getElementById('clickableArea');
const audio = document.getElementById('audio');

audio.volume = 1.0;

body.addEventListener('click', () => {
    audio.currentTime = 55;
    audio.play();
});