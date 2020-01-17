const toggleListeningAnimation = (verb) => {
  const speakButton = document.getElementById('stt-button');
  speakButton.classList[verb]('listening');
  speakButton.classList[verb]('animated');
  speakButton.classList[verb]('infinite');
  speakButton.classList[verb]('pulse');
}

// get transcript from user speech
const recognizeSpeech = async (lang) => {
  // make a promise, to return text transcript when results processed and ready
  const promise = new Promise((resolve, reject) => {
    // create new instance of SpeechRecognition
    const recognition = new webkitSpeechRecognition(); // Chrome only
    // config language
    recognition.lang = lang;

    // toggle animation of button on start/end
    recognition.onstart = (e) => {
      console.log(e);
      toggleListeningAnimation('add');
    }

    recognition.onend = () => {
      toggleListeningAnimation('remove');
    }

    // turn on mic and start recognizing user speech
    recognition.start();

    // on result of recognition, resolve promise with the transcript, if captured
    recognition.addEventListener('result', (event) => {

      if (event.results.length > 0) {
        resolve(event.results[0][0].transcript);
      }
      else {
        // or print this to console if something went wrong...
        reject('try again');
      }
    });
  });
  // return the result of fulfilled promise
  return await promise;
};

export { recognizeSpeech };
