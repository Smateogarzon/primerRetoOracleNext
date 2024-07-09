const encripterCode = {
  a: 'ai',
  e: 'enter',
  i: 'imes',
  o: 'ober',
  u: 'ufat',
};
const desencripterCode = {
  ai: 'a',
  enter: 'e',
  imes: 'i',
  ober: 'o',
  ufat: 'u',
};
let stringEncripter = '';
function validationInput(input) {
  const capitalLetters = /[A-Z]/g.test(input);
  const specialCharacters = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/g.test(input);

  if (capitalLetters || specialCharacters) {
    return false;
  }

  return true;
}

function encripter(string) {
  if (!validationInput(string)) {
    document.getElementById('inputString').value = '';
    alert('Por favor, solo letras minusculas y sin acentos');
  }
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    if (encripterCode[string[i]]) {
      newString += encripterCode[string[i]];
    } else {
      newString += string[i];
    }
  }
  return newString;
}

function desencripter(string) {
  if (!validationInput(string)) {
    document.getElementById('inputString').value = '';
    alert('Por favor, solo letras minusculas y sin acentos');
  }
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    let momentString = string[i];
    if (/[^aeiou]/.test(momentString)) {
      newString += momentString;
    } else {
      for (let j = i + 1; j < string.length; j++) {
        momentString += string[j];
        if (desencripterCode[momentString]) {
          newString += desencripterCode[momentString];
          i = j;
          break;
        }
      }
    }
  }
  return newString;
}
function encryptText() {
  const textArea = document.getElementById('outputString');
  const TextOut = document.getElementById('outputString');
  const cmuneco = document.getElementById('Cmuneco');
  cmuneco.style.display = 'none';
  TextOut.style.display = 'block';
  textArea.style.color = 'var(--color-gray-400)';
  const Text = document.getElementById('inputString');
  const inputText = Text.value;
  stringEncripter = encripter(inputText);
  if (validationInput(stringEncripter)) {
    TextOut.innerText = stringEncripter;
    Text.value = '';
  }
}

function decryptText() {
  const textArea = document.getElementById('outputString');
  const TextOut = document.getElementById('outputString');
  const cmuneco = document.getElementById('Cmuneco');
  cmuneco.style.display = 'none';
  TextOut.style.display = 'block';
  textArea.style.color = 'var(--color-gray-400)';
  const Text = document.getElementById('inputString');
  const inputText = Text.value;
  stringEncripter = desencripter(inputText);
  if (validationInput(stringEncripter)) {
    TextOut.innerText = stringEncripter;
    Text.value = '';
  }
}

function copyText() {
  const textArea = document.getElementById('outputString');
  const textToCopy = textArea.value;
  textArea.style.color = 'red';

  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        const textareaRect = textArea.getBoundingClientRect();
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = '¡Texto copiado!';

        tooltip.style.position = 'absolute';
        tooltip.style.top = `${textareaRect.top + window.scrollY - 30}px`;
        tooltip.style.left = `${textareaRect.left + window.scrollX}px`;

        document.body.appendChild(tooltip);
        setTimeout(() => {
          tooltip.remove();
        }, 1000); // 2000 milisegundos = 2 segundos
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  } else {
    console.error('Clipboard API is not supported');
  }
}
function toggleCmunecoVisibility() {
  const textArea = document.getElementById('outputString');

  if (textArea.value.trim() === '') {
    cmuneco.style.display = 'block';
  } else {
  }
}
