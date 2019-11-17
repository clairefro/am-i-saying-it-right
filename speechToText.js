// get transcript from user speech
const recognizeSpeech = async (lang) => {
  // make a promise, to return text transcript when results ready
  const promise = new Promise((resolve, reject) => {
    // create new instance of SpeechRecognition
    const recognition = new webkitSpeechRecognition(); // Chrome only
    // config
    recognition.lang = lang;

    // start recognizing user speech
    recognition.start();
    console.log('speech rec init');

    // on result of recognition, resolve promise with transcript
    recognition.addEventListener('result', (event) => {
      if (event.results.length > 0) {
        resolve(event.results[0][0].transcript);
      }
      else {
        // if something went wrong...
        reject('try again');
      }
    });
  });
  // return the text resulting from fulfilled promise
  return await promise;
};


export { recognizeSpeech };
