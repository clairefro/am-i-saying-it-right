// define a method to speak text in specified language
const speakText = (text, lang) => {
  // speechSynthesis only "speaks" SpeechSynthesisUtterance's. Let's make one.
  const u = new SpeechSynthesisUtterance();

  // configure our new utterance
  u.text = text;
  u.lang = lang;
  // u.rate = 1;  // optional: change speaking speed (0.1 [slow] - 1 [normal])

  // finally, call speechSynthesis.speak(utterance) to make the browser speak!
  speechSynthesis.speak(u);
}

export { speakText };

