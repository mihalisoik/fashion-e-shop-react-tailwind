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

export function addToCart(id) {
  cart.forEach(item => {
    if (item.id === id) {
      item.quantity++
    }
  })
}

export function removeFromCart(id) {
  cart.forEach(item => {
    if (item.id === id) {
      item.quantity--
    }
  })
}