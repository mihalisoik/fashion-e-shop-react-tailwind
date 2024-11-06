import { formatCurrency } from '../utils/money'
import AddToCartButton from './Buttons'

function ProductCard({image,name,priceCents}) {
  return (
    <div className="bg-slate-200 p-5 font-opensans flex flex-col gap-1 justify-center items-center rounded-md shadow-lg flex-shrink-0">
      <img src={image} alt={name} width={150}/>
      <div>
        {name}
      </div>
      <div>
        €{formatCurrency(priceCents)}
      </div>
      <div className="mt-2">
        <AddToCartButton />
      </div>
    </div> 
  )
}

export default ProductCard