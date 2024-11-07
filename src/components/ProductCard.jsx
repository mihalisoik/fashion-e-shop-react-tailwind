import { useState } from 'react'
import { addToCart, cart, importProductToCart, removeFromCart } from '../constants/cart'
import { formatCurrency } from '../utils/money'

function ProductCard({id,image,name,rating,priceCents,refreshProductsInTooltip}) {

  const existingItem = cart.some(item => item.id === id)

  const [cartButton,setCartButton] = useState(existingItem)

  function changeCartButton() {
    setCartButton(cart.some(item => item.id === id))
  }

   let productQuantity; 
   cart.forEach((item,index) => {
    if (item.id === id) {
      productQuantity = item.quantity
    }
  })

  return (
    <div className="bg-slate-100 p-5 font-secondary flex flex-col gap-1 justify-center items-start rounded-md shadow-lg flex-shrink-0">
      <img src={image} alt={name} width={150}/>
      <div className='flex gap-0.5 font-secondary'>
        {(rating * 10) % 10 === 0 
        ? <img src='src/assets/icons/star.svg' alt='star-rating'/>
        : <img src='src/assets/icons/star-half.svg' alt='half-star-rating'/>
        }
        {rating.toFixed(1)}
      </div>
      <h3 className='font-secondary font-semibold'>
        {name}
      </h3>
      <div className='font-secondary'>
        €{formatCurrency(priceCents)}
      </div>
      <div className="mt-2">
        {!cartButton
        ?
        <button className="flex w-36 h-10 gap-2 text-[#666666] text-sm px-3 py-2 bg-slate-50 rounded-3xl justify-center items-center font-semibold shadow-md hover:bg-slate-100 active:scale-95"
        onClick={() => {
          refreshProductsInTooltip()
          importProductToCart(id)
          changeCartButton()
        }}
        >
          Add to Cart
          <img src="src/assets/icons/add-to-cart.svg" alt="add-to-cart" />
        </button>
        :
        <div className="flex w-36 h-10 text-[#666666] text-base px-3 py-2 bg-slate-50 rounded-3xl justify-between items-center shadow-md">
          <button className='border border-[#666666] rounded-full hover:bg-slate-100 active:scale-95'
          onClick={() => {
            refreshProductsInTooltip()
            removeFromCart(id)
            if (productQuantity === 1) {
              setCartButton(false)
            }
          }}
          >
            <img src="src/assets/icons/minus.svg" alt="minus-icon" />
          </button>
          {`${productQuantity}`}
            <button className='border border-[#666666] rounded-full hover:bg-slate-100 active:scale-95'
            onClick={() => {
              refreshProductsInTooltip()
              addToCart(id)}}
            >
              <img src="src/assets/icons/plus.svg" alt="plus-icon" />
            </button>
        </div>}
      </div>
    </div> 
  )
}

export default ProductCard