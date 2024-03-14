import Store from './services/Store.js';
import { loadData } from './services/Menu.js';
import Router from './services/Router.js';

// link web components
import { MenuPage } from './components/MenuPage.js';
import { DetailsPage } from './components/DetailsPage.js';
import { OrderPage } from './components/OrderPage.js';
import ProductItem from './components/ProductItem.js';
import CartItem from './components/CartItem.js';

window.app = {};
app.Store = Store;
app.router = Router;
// it is betterr to wait for the event fior manipulation, cuz DOMstill could be in job of structuring some rest part

window.addEventListener('DOMContentLoaded', async () => {
  loadData();
  app.router.init();
});

window.addEventListener('appcartchange', (event) => {
  const badge = document.getElementById('badge');
  const qty = app.Store.cart.reduce((v, x) => v + x.quantity, 0);
  badge.textContent = qty;
  badge.hidden = qty == 0;
});
