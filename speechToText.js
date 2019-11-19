// get transcript from user speech
const recognizeSpeech = async (lang) => {
  // make a promise, to return text transcript when results ready
  const promise = new Promise((resolve, reject) => {
    // create new instance of SpeechRecognition
    const recognition = new webkitSpeechRecognition(); // Chrome only
    // config language
    recognition.lang = lang;

    // turn on mic and start recognizing user speech
    recognition.start();
    console.log('speech rec init');

    // on result of recognition, resolve promise with the transcript, if captured
    recognition.addEventListener('result', (event) => {

      if (event.results.length > 0) {
        console.log(event);
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
