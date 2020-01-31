// get message container
const resultMessage = document.getElementById('result-message');

////////////////////////
// helper functions
////////////////////////

const changeBackgroundColor = (color) => {
  document.body.style = `background-color: ${color}`;
}

const resetScreen = () => {
  changeBackgroundColor('white');
  resultMessage.innerHTML = "";
}

const displayTimedMessage = (result) => {
  if (result === 'success') {
    // make background green
    changeBackgroundColor('#e0ffe4');
    // display success message
    resultMessage.innerHTML = "<h3 class='correct'>That's right!</h3>";
  } else if (result === 'failure') {
    // make background red
    changeBackgroundColor('#ffe0eb');
    // display failure message
    resultMessage.innerHTML = "<h3 class='incorrect'>Uhhh, try again</h3>";
  }
  // reset screen after 2 seconds
  setTimeout(() => { resetScreen() }, 2000);
};

////////////////////////
// end helper functions
////////////////////////

// compares whether user's attempt matches the original text
const compare = (originalText, userAttempt) => {
  // compare texts: case insensitive, whitespace removed
  if (originalText.toUpperCase().replace(/\s+/g, "") === userAttempt.toUpperCase().replace(/\s+/g, "")) {
    displayTimedMessage('success');
  } else {
    displayTimedMessage('failure');
  }
};

export default compare;
