# Am I Saying it Right?
A simple app for testing your pronunciation of words in various langauges.

Only supported in Chrome 33+ browsers (and only Android Chrome/Android Browser on mobile. Sorry iUsers.).

#### Learn how to make this app with [this tutorial](https://medium.com/@clairefroelich/if-web-apps-could-talk-intro-to-the-web-speech-api-c9f7e0e83aff)

#### Try the demo [here](https://clairefro.github.io/am-i-saying-it-right/)!

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
* **[Web Speech API documentation](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)**
* [Browser compatibility and issues](https://caniuse.com/#search=web%20speech%20api)
* [Ancient and difficult to read W3C specification for hard-core nerds](https://wicg.github.io/speech-api/)
* [Using Web Speech API in Firefox](https://hacks.mozilla.org/2016/01/firefox-and-the-web-speech-api/)

#### SpeechSynthesis
* **[SpeechSynthesis documentation](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis)**

*Demos*
* [Cool multilingual text to speech demo](https://codepen.io/matt-west/pen/wGzuJ)
* [Speech synthesizer testing language, pitch, rate](http://mdn.github.io/web-speech-api/speak-easy-synthesis/)

#### SpeechRecognition
* **[SpeechRecognition documentation](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition)** 
* [Simple SpeechRecognition app tutorial](https://www.freecodecamp.org/news/how-to-build-a-simple-speech-recognition-app-a65860da6108/) (for Chrome and Firefox)
* [How to enable in Firefox](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/SpeechRecognition) (scroll to bottom of page)

*Continuous speech recognition*
* [How to implement continuous recognition](https://stackoverflow.com/questions/29996350/speech-recognition-run-continuously)
* [Continuous speech recognition Google demo](https://www.google.com/intl/en/chrome/demos/speech.html)
* [SpeechRecognition.lang property](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/lang)

*Grammars*
* **[Grammars documentation](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/grammars)**
* [JSpeech Grammar Format documentation](https://www.w3.org/TR/jsgf/)
* [Change background color by voice demo](https://mdn.github.io/web-speech-api/speech-color-changer/) (for Chrome and Firefox)
* [Tutorial for 'change background color by voice' demo](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API)


#### Language
* [List of language codes](https://cloud.google.com/speech-to-text/docs/languages) (note: browser only speaks the voices present in `speechSynthesis.getVoices()`, see [doc](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/getVoices))





