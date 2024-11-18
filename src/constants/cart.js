export const cart = [];

export let totalQuantity = 0;

export function importProductToCart(id) {
  const existingItem = cart.find((item) => item.id === id);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({
      id: id,
      quantity: 1,
    });
  }
  addingToTotalQuantity();
}

function addingToTotalQuantity() {
  totalQuantity++;
}

function subtractingToTotalQuantity() {
  totalQuantity--;
}

export function addToCart(id) {
  cart.forEach((item) => {
    if (item.id === id) {
      item.quantity++;
      addingToTotalQuantity();
    }
  });
}

export function removeFromCart(id) {
  cart.forEach((item, index) => {
    if (item.id === id) {
      item.quantity--;
      subtractingToTotalQuantity();
      if (item.quantity === 0) {
        cart.splice(index, 1);
      }
    }
  });
}
