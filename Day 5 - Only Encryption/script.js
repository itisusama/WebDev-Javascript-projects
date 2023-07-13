let btn = document.getElementById("btn");
let txt = document.getElementById("txt-box");
let ecMsg = document.getElementById("ec-msg");

const key = 22944;

function encodeMessage(message, key) {
    let encodedMessage = '';
    for (let i = 0; i < message.length; i++) {
      let charCode = message.charCodeAt(i);
  
      // Check if the character is a letter
      if (charCode >= 65 && charCode <= 90) {
        // Uppercase letters
        charCode = ((charCode - 65 + key) % 26) + 65;
      } else if (charCode >= 97 && charCode <= 122) {
        // Lowercase letters
        charCode = ((charCode - 97 + key) % 26) + 97;
      }
  
      const encodedChar = String.fromCharCode(charCode);
      encodedMessage += encodedChar;
    }
    return encodedMessage;
  }

btn.addEventListener('click', () => {
    const inputValue = txt.value;
    const encodedValue = encodeMessage(inputValue, key);
    // console.log(encodedValue);
    ecMsg.innerHTML = encodedValue;
});
