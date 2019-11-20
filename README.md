# Am I Saying it Right?

> This app is intended as a demo of the Web Speech API (SpeechSynthesis & webkitSpeechRecognition).\
> See [slides](https://docs.google.com/presentation/d/1CF1F808u_uDI6tPnjoaYRFJR9n44Htu0hdT7WRMeB9A/edit?usp=sharing) for reference

A simple app for testing your pronunciation of words in various langauges.
Only supported in Chrome 33+ browsers.

## ⇒ Test the app live [here](https://clairefro.github.io/am-i-saying-it-right/)!

### SpeechSynthesis basic syntax
The speechSynthesis interface only "speaks" SpeechSysnthesisUtterance instances.
```javascript
const utterance = new SpeechSynthesisUtterance();

utterance.text = 'Hello world';

speechSynthesis.speak(utterance); //=> speaks 'Hello World'
```

### SpeechRecognition basic syntax
This code prints the final results of a webkitSpeechRecognition instance to the console (for Chrome)
```javascript
const recognition = new webkitSpeechRecognition();
recognition.lang = 'en-US';
recognition.start();

recognition.addEventListener('result', (event) => {
    if (event.results.length > 0) {
      console.log(event.results[0][0].transcript);
    }
});
```
## Further reading
#### Web Speech API
* [Web Speech API documentation](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
* [Browser compatibility and issues](https://caniuse.com/#search=web%20speech%20api)
* [Ancient and difficult to read W3C specification for hard-core nerds](https://wicg.github.io/speech-api/)

#### SpeechSynthesis
* [SpeechSynthesis documentation](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis)

*Demos*
* [Cool multilingual text to speech demo](https://codepen.io/matt-west/pen/wGzuJ)
* [Google Cloud Text to Speech demo](https://cloud.google.com/text-to-speech/) (test out the wavenet voice! don't get too excited - you have to pay for it)

#### SpeechRecognition
* [SpeechRecognition documentation](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition)

*Continuous speech recognition*
* [How to implement continuous recognition](https://stackoverflow.com/questions/29996350/speech-recognition-run-continuously)
* [Continuous speech recognition Google demo](https://www.google.com/intl/en/chrome/demos/speech.html)
* [SpeechRecognition.lang](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/lang)

*Grammars*
* [Grammars documentation](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/grammars)
* [Change background color by voice demo](https://mdn.github.io/web-speech-api/speech-color-changer/)
* [Tutorial for 'change background color by voice' demo](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API)
* [JSpeech Grammar Format documentation](https://www.w3.org/TR/jsgf/)

#### Language
* [List of language codes](https://cloud.google.com/speech-to-text/docs/languages) (note: browser only speaks the voices present in `speechSynthesis.getVoices()`, see [doc](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/getVoices))





