// Import stylesheets
import './style.css';

function encryptString(str) {
  let encryptedStr = '';
  for (let i = 0; i <= str.length; i++) {
    encryptedStr += String.fromCharCode(str.charCodeAt(i) + 2);
  }
  return encryptedStr;
}

function decryptString(str) {
  let decryptedStr = '';
  for (let i = 0; i < str.length; i++) {
    decryptedStr += String.fromCharCode(
      str.charCodeAt(i) - 2 // <-- TODO: The bug is here, can you find it?
    );
  }
  return decryptedStr;
}

let encryptedUrl = 'jvvru<11yyy0eqoowfng0eqo1hknn/hqto1398:';
let decryptedUrl = decryptString(encryptedUrl);
console.log(decryptedUrl);

// Showing the output to the browser document as well
let formLinkElement = document.getElementById('decryptedUrl');

formLinkElement.href = decryptedUrl;
formLinkElement.innerText = decryptedUrl;
