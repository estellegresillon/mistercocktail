import Typed from 'typed.js';

function loadDynamicTitleText() {
  new Typed('#title-typed-text', {
    strings: ["We make great cocktails."],
    typeSpeed: 100,
    loop: true
  });
}

export { loadDynamicTitleText };
