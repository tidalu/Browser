import { getProductById } from './Menu.js';

export async function AddToCart(id) {
  const product = await getProductById(id);
  const result = app.Store.cart.filter((prod) => prod.product.id == id);
  if (result.length == 1) {
    // the product is already in the cart
    // update
    app.Store.cart = app.Store.cart.map((p) =>
      p.product.id == id ? { ...p, quantity: p.quantity + 1 } : p
    );
  } else {
    app.Store.cart = [...app.Store.cart, { product, quantity: 1 }];
  }
}

export function removeFromCart(id) {
  app.Store.cart = app.Store.cart.filter((x) => x.product.id !== id);
}
