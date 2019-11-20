# Am I Saying it Right?

> This app is intended as a demo of Web Speech API (SpeechSynthesis & webkitSpeechRecognition).\
> See [slides](https://docs.google.com/presentation/d/1CF1F808u_uDI6tPnjoaYRFJR9n44Htu0hdT7WRMeB9A/edit?usp=sharing) for reference

A simple app for testing your pronunciation of words in various langauges.
Only supported in Chrome 33+ browsers.

## Test the app live [here](https://clairefro.github.io/am-i-saying-it-right/)

### SpeechSynthesis basic syntax

```javascript
const utterance = new SpeechSynthesisUtterance();

utterance.text = 'Hello world';

speechSynthesis.speak(utterance); //=> speaks 'Hello World'
```

### SpeechRecognition basic syntax

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




