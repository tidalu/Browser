import API from './API.js';

export async function loadData() {
  app.Store.menu = await API.fetchMenu();
}

export async function getProductById(id) {
  if (app.Store.menu == null) {
    await loadData();
  }

  for (let c of app.Store.menu) {
    for (let p of c.products) {
      if (p.id == id) {
        return p;
      }
    }
  }

  return null;
}
