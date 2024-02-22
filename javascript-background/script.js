const audio1 = new Audio('./audio/hey.wav');
const audio2 = new Audio('./audio/welcome.ogg');
console.log(audio1.duration);
window.addEventListener('visibilitychange', (event) => {
  if (document.visibilityState == 'hidden') {
    audio1.play();
    console.log('hidden');
  } else {
    console.log(document.visibilityState);
    audio2.play();
  }
});
