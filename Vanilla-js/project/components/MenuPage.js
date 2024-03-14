export class MenuPage extends HTMLElement {
  constructor() {
    super();

    this.root = this.attachShadow({ mode: 'open' });
    const styles = document.createElement('style');
    this.root.appendChild(styles);
    const loadCss = async () => {
      const request = await fetch('/components/MenuPage.css');
      const css = await request.text();
      styles.textContent = css;
    };
    loadCss();
  }

  // when the compoentn added to the dom

  connectedCallback() {
    const template = document.getElementById('menu-page-template');
    const content = template.content.cloneNode(true);
    this.root.appendChild(content);

    window.addEventListener('appmenuchange', () => {
      this.render();
    });
    this.render();
  }

  render() {
    if (app.Store.menu) {
      this.root.querySelector('#menu').innerHTML = '';
      for (let category of app.Store.menu) {
        const liCategory = document.createElement('li');
        liCategory.innerHTML = /*html*/ `
                <h3>${category.name}</h3>
                <ul class="category">


                </ul>
              `;
        this.root.querySelector('#menu').appendChild(liCategory);

        category.products.forEach((element) => {
          const item = document.createElement('product-item');
          item.dataset.product = JSON.stringify(element);
          liCategory.querySelector('ul').appendChild(item);
        });
      }
    } else {
      this.root.querySelector('#menu').innerHTML = '...Loading';
    }
  }
}

customElements.define('menu-page', MenuPage);
