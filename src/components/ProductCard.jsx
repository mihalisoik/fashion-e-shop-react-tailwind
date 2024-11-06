import { formatCurrency } from '../utils/money'
import AddToCartButton from './Buttons'

function ProductCard({image,name,rating,priceCents}) {
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
        <AddToCartButton />
      </div>
    </div> 
  )
}

export default ProductCard