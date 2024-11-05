import { clothes } from "../clothes"
import AddToCartButton from "../components/Buttons"
import { formatCurrency } from "../utils/money"

function PopularItems() {
  const popularClothes = clothes.filter(clothe => clothe.rating > 8)

  const popularItemsElements = popularClothes.map(clothe=>(
    <div className="bg-slate-200 p-5 font-opensans flex flex-col gap-1 justify-center items-center rounded-md shadow-lg flex-shrink-0">
      <img src={clothe.image} alt="popular clothe image" width={150}/>
      <div>
        {clothe.name}
      </div>
      <div>
        €{formatCurrency(clothe.priceCents)}
      </div>
      <div className="mt-2">
        <AddToCartButton key={clothe.id}/>
      </div>
    </div>
  ))

  return (
    <section className='max-container mb-4'>
      <div className='mt-10 w-full bg-white py-4 px-10 rounded-lg shadow-xl flex flex-1 flex-col justify-center items-center gap-6'>
        <div className='text-2xl'>Popular Items</div>
        <div className="flex gap-7 w-full overflow-x-auto">
           {popularItemsElements}
        </div>
      </div>
    </section>
  )
}

export default PopularItems