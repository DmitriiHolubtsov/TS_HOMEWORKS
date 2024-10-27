function highlightForbiddenWords(
  text: string,
  forbiddenWords: string[],
): string {
  let updatedText = text;

  forbiddenWords.forEach((word) => {
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    updatedText = updatedText.replace(regex, `<del>${word}</del>`);
  });

  return updatedText;
}

function processInput() {
  const textInput = (document.getElementById('textInput') as HTMLInputElement)
    .value;
  const forbiddenInput = (
    document.getElementById('forbiddenInput') as HTMLInputElement
  ).value;
  const forbiddenWords = forbiddenInput.split(',').map((word) => word.trim());

  const result = highlightForbiddenWords(textInput, forbiddenWords);
  const outputElement = document.getElementById('output');

  if (outputElement) {
    outputElement.innerHTML = result;
  } else {
    console.error('Output element not found');
  }
}
