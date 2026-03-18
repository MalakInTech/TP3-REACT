import son from './audio.mp3.wav';

function LecteurAudio() {
  return <audio controls src={son}></audio>;
}

export default LecteurAudio;