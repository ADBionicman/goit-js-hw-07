const fontSizeControlInput = document.querySelector('input#font-size-control');
const spanText = document.querySelector('span#text');

spanText.style.fontSize = fontSizeControlInput.value + 'px';

fontSizeControlInput.addEventListener('input', onInput);

function onInput(event) {
 
  spanText.style.fontSize = event.currentTarget.value + 'px';
}
