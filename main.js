import { speakText } from './textToSpeech.js';
import { recognizeSpeech } from './speechToText.js';


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

recognizeButton.addEventListener('click', (e) => {
  const lang = langSelector.value;

  // call our method to get transcript from speech
  recognizeSpeech(lang)
     // then display the transcript to the textbox when ready
     .then((result) => {
        sttTextbox.value = result;
     });


});


