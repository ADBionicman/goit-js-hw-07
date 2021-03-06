const refs = {
    formRef: document.querySelector('input#validation-input')
};

const onFocus = function (event) {
  const textLength = this.value.length;
  const minTextLength = Number(this.dataset.length);
 
  if (textLength === minTextLength) {
    this.classList.add('valid');
    this.classList.remove('invalid');
  } else {
    this.classList.add('invalid');
    this.classList.remove('valid');
    } 
};

refs.formRef.addEventListener('blur', onFocus);