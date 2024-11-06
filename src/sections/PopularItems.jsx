import { clothes } from "../clothes"
import AddToCartButton from "../components/Buttons"
import ProductCard from "../components/ProductCard"
import { formatCurrency } from "../utils/money"

function PopularItems() {
  const popularClothes = clothes.filter(clothe => clothe.rating >= 4.3)

  const popularItemsElements = popularClothes.map(clothe=>(
    <ProductCard 
      key={clothe.id}
      image={clothe.image}
      name={clothe.name}
      rating={clothe.rating}
      priceCents={clothe.priceCents}
    />
  ))

  return (
    <section className='max-container'>
      <div className='mt-10 w-full bg-white py-4 px-10 rounded-lg shadow-xl flex flex-1 flex-col justify-center items-start gap-6'>
        <div className='text-3xl tracking-wide'>Our <span className="text-accent font-semibold tracking-wider">Popular</span> Products</div>
        <div className="flex gap-7 w-full overflow-x-auto">
           {popularItemsElements}
        </div>
      </div>
    </section>
  )
}

export default PopularItems