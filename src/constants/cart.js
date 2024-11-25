import { saveCartToStorage } from "../utils/saveToStorage";

export const cart = JSON.parse(localStorage.getItem("cart")) || [];

export let totalQuantity = 0;
cart.forEach((item) => {
  totalQuantity += item.quantity;
});

function addingToTotalQuantity() {
  totalQuantity++;
}

function subtractingToTotalQuantity() {
  totalQuantity--;
}

export function addToCart(id, size) {
  const existingItem = cart.find(
    (item) => item.id === id && item.size === size
  );
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({
      id: id,
      size: size,
      quantity: 1,
    });
  }
  addingToTotalQuantity();
  saveCartToStorage(cart);
}

export function removeFromCart(id, size) {
  cart.forEach((item, index) => {
    if (item.id === id && item.size === size) {
      item.quantity--;
      if (item.quantity === 0) {
        cart.splice(index, 1);
      }
    }
  });
  subtractingToTotalQuantity();
  saveCartToStorage(cart);
}
