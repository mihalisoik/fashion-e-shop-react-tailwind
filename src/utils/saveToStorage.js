export function saveClothesToStorage(clothes) {
  localStorage.setItem("clothes", JSON.stringify(clothes));
}

export function saveCartToStorage(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}
