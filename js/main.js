const pads = document.querySelectorAll('.key');
const sound = document.querySelectorAll('audio');

pads.forEach(pad => {
  pad.addEventListener('transitionend', removeTransition);
});

pads.forEach(pad => {
  pad.addEventListener('click', playSound);
});

document.addEventListener('keydown', playSound);

// Fonction pour jouer le son
function playSound(e) {
  let keyCode;
  if (e.type === 'keydown') {
    keyCode = e.keyCode;
  } else {
    keyCode = this.getAttribute('data-key');
  }

  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);

  const pad = document.querySelector(`div[data-key="${keyCode}"]`);

  if (!audio) return;

  pad.classList.add('playing');

  audio.currentTime = 0;

  // Lecture de l'audio
  audio.play();
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}