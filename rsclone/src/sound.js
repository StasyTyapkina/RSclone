export const buttonSound = document.querySelector('.sound_bttn');

buttonSound.sound = false;
buttonSound.classList.add('sound_bttn--activatable');
buttonSound.classList.toggle('sound_bttn--active', buttonSound.sound);

export function toggleSound() {
  buttonSound.sound = !buttonSound.sound;
}

export const audio = document.createElement('audio');
audio.id = 'audio';
audio.src = './src/sounds/main.mp3';
audio.loop = true

document.body.appendChild(audio);

buttonSound.addEventListener('click', () => {
  toggleSound();
  buttonSound.classList.toggle('sound_bttn--active', buttonSound.sound);

  if (buttonSound.sound) {
    audio.play();
    buttonSound.innerHTML = '<i class="fas fa-volume-up"></i>';
  } else {
    audio.pause();
    buttonSound.innerHTML = '<i class="fas fa-volume-off">';
  }
});
