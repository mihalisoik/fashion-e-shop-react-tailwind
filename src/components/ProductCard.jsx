import { formatCurrency } from '../utils/money'

function ProductCard({image,name,rating,priceCents,animatedTooltip}) {
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
        <button className="flex gap-2 text-[#666666] text-sm px-3 py-2 bg-slate-50 rounded-3xl justify-center items-center font-semibold shadow-md hover:bg-slate-100 active:scale-95"
        onClick={animatedTooltip}>
          Add to Cart
          <img src="src/assets/icons/add-to-cart.svg" alt="add-to-cart" />
        </button>
      </div>
    </div> 
  )
}

export default ProductCard