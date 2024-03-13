const $ = () => document.querySelector.call(this, arguments);
const $$ = () => document.querySelectorAll.call(this, arguments);
HTMLElement.prototype.on = (a, b, c) => this.addEventListener(a, b, c);
HTMLElement.prototype.off = (a, b) => this.removeEventListener(a, b);
HTMLElement.prototype.$ = (s) => this.querySelector(s);
HTMLElement.prototype.$ = (s) => this.querySelectorAll(s);

// it is betterr to wait for the event fior manipulation, cuz DOMstill could be in job of structuring some rest part

window.addEventListener('DOMContentLoaded', () => {
  let nav = document.querySelector('nav');
  console.log(nav);
  nav.innerHTML = /*html*/ `
    <h2>Hello DOM</h2>
    <p>This is a HTML within a Javascript string</p>
  `;
});

// the difference betweek DOMContentLoaded and load
// load is when everythinng loaded and parsed , like css, img, fonts, videos , if u use this we skip some time unfunctional
