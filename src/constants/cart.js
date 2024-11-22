export const cart = [];

export let totalQuantity = 0;

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
}

export function removeFromCart(id, size) {
  cart.forEach((item, index) => {
    if (item.id === id && item.size === size) {
      item.quantity--;
      subtractingToTotalQuantity();
      if (item.quantity === 0) {
        cart.splice(index, 1);
      }
    }
  });
}
