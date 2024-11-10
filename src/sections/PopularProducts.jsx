import ProductCard from "../components/ProductCard";
import { clothes } from "../constants/clothes";

function PopularItems({ refreshProductsInTooltip }) {
  const popularClothes = clothes.filter((clothe) => clothe.rating >= 4.7);

  const popularItemsElements = popularClothes.map((clothe) => {
    return (
      <ProductCard
        key={clothe.id}
        id={clothe.id}
        image={clothe.image}
        name={clothe.name}
        gender={clothe.gender}
        rating={clothe.rating}
        isFavorite={clothe.isFavorite}
        priceCents={clothe.priceCents}
        refreshProductsInTooltip={refreshProductsInTooltip}
      />
    );
  });

  return (
    <section
      id="popular-products"
      className="bg-white py-20 mt-10 w-full shadow-lg"
    >
      <div className="max-container mt-10 w-full py-4 px-10 flex flex-1 flex-col justify-center items-start gap-6 font-primary">
        <div className="text-3xl tracking-wide">
          Our{" "}
          <span className="text-accent font-semibold tracking-wider">
            Popular
          </span>{" "}
          Products
        </div>
        <div className="flex gap-7 w-full overflow-x-auto">
          {popularItemsElements}
        </div>
      </div>
    </section>
  );
}

export default PopularItems;
