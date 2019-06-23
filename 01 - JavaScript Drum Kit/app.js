console.log('Aloha');

function addAudio(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  console.log('key pressed', e.keyCode);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) return;

  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
  console.log(key.classList);
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  console.log('e', e);
  console.log('this', this);
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', addAudio);
