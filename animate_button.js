const toggleListeningAnimation = (verb) => {
  const speakButton = document.getElementById('stt-button');
  speakButton.classList[verb]('listening');
  speakButton.classList[verb]('animated');
  speakButton.classList[verb]('infinite');
  speakButton.classList[verb]('pulse');
}

export default toggleListeningAnimation;
