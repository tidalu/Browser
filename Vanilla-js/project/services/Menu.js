import API from './API.js';

export async function loadData() {
  app.Store.menu = await API.fetchMenu();
}
