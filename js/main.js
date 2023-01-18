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

// Récupération de la vidéo HTML
const video = document.querySelector('#bg-video');
video.style.display = 'none';

// Récupération du bouton HTML 
const button = document.querySelector("#beat-box-button");
button.addEventListener("click", beatBox);
button.addEventListener("click", function () {
  video.style.display = 'block';
  video.requestFullscreen();
  video.play();
});

// Fonction beatbox pour une automatisation de touches
function beatBox() {

  function simulateKey(keyCode) {
    let event = new KeyboardEvent("keydown", {
      bubbles: true,
      cancelable: true,
      keyCode: keyCode
    });
    document.dispatchEvent(event);
  }

  function playBoom() {
    return new Promise((resolve) => {
      simulateKey(83); // keycode pour la touche S
      setTimeout(resolve, 150); // délai pour la promesse
    });
  }

  function playTomTink() {
    return new Promise((resolve) => {
      simulateKey(88); // keycode pour la touche X
      simulateKey(67); // keycode pour la touche C
      setTimeout(resolve, 150); // délai pour la promesse
    });
  }
  function playKick() {
    return new Promise((resolve) => {
      simulateKey(69); // keycode pour la touche E
      setTimeout(resolve, 150); // délai pour la promesse
    });
  }
  function playOpenhat() {
    return new Promise((resolve) => {
      simulateKey(81); // keycode pour la touche Q
      setTimeout(resolve, 150); // délai pour la promesse
    });
  }

  // Chaîne de promesses dans une fonction récursive (répété x3)
  function repeatSequence(n) {
    if (n === 0) {
        return Promise.resolve();
    }
    return playBoom()
        .then(() => playBoom())
        .then(() => playBoom())
        .then(() => playBoom())
        .then(() => playBoom())
        .then(() => playBoom())
        .then(() => playTomTink())
        .then(() => playTomTink())
        .then(() => playTomTink())
        .then(() => playTomTink())
        .then(() => playTomTink())
        .then(() => playBoom())
        .then(() => playKick())
        .then(() => playBoom())
        .then(() => playKick())
        .then(() => playBoom())
        .then(() => playKick())
        .then(() => playBoom())
        .then(() => playKick())
        .then(() => playBoom())
        .then(() => playKick())
        .then(() => playBoom())
        .then(() => playKick())
        .then(() => playBoom())
        .then(() => playBoom())
        .then(() => playBoom())
        .then(() => playBoom())
        .then(() => playBoom())
        .then(() => playKick())
        .then(() => playKick())
        .then(() => playKick())
        .then(() => playKick())
        .then(() => playKick())
        .then(() => playKick())
        .then(() => playOpenhat())
        .then(() => repeatSequence(n - 1));
}
repeatSequence(3);
}

