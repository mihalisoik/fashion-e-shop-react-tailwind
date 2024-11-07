export const cart = []

export let totalQuantity = 0

export function importProductToCart(id) {
  const existingItem = cart.find(item => item.id === id)
  if (existingItem) {
    existingItem.quantity++
  } else {
    cart.push({
      id: id,
      quantity: 1
    })
  }
  totalQuantity++
  console.log(totalQuantity)
} 