import { speakText } from './textToSpeech.js';


// get html elements
const speakButton = document.getElementById('tts-button');
const ttsTextbox = document.getElementById('tts-textbox');

const recognizeButton = document.getElementById('stt-button');
const sttTextbox = document.getElementById('stt-textbox');

const langSelector = document.getElementById('lang-select');

// add listeners for buttons
speakButton.addEventListener('click', (e) => {
  const text = ttsTextbox.value;
  const lang = langSelector.value;

  // call our method
  speakText(text, lang);
});


