'use strict';
function highlightForbiddenWords(text, forbiddenWords) {
  let updatedText = text;
  forbiddenWords.forEach((word) => {
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    updatedText = updatedText.replace(regex, `<del>${word}</del>`);
  });
  return updatedText;
}
function processInput() {
  const textInput = document.getElementById('textInput').value;
  const forbiddenInput = document.getElementById('forbiddenInput').value;
  const forbiddenWords = forbiddenInput.split(',').map((word) => word.trim());
  const result = highlightForbiddenWords(textInput, forbiddenWords);
  const outputElement = document.getElementById('output');
  if (outputElement) {
    outputElement.innerHTML = result;
  } else {
    console.error('Output element not found');
  }
}
