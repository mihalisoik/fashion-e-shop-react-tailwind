import ProductCard from "../components/ProductCard";
import { clothes } from "../constants/clothes";

function RelatedProducts({
  animatedAddedTooltip,
  animatedRemovedTooltip,
  setRenderTotalQuantity,
}) {
  const relatedProductsElements = clothes.map((clothe, index) => {
    if (index < 10) {
      return (
        <ProductCard
          key={clothe.id}
          id={clothe.id}
          image={clothe.image}
          name={clothe.name}
          rating={clothe.rating}
          isFavorite={clothe.isFavorite}
          priceCents={clothe.priceCents}
          isOneSize={clothe.isOneSize}
          stock={clothe.stock}
          setRenderTotalQuantity={setRenderTotalQuantity}
          animatedAddedTooltip={animatedAddedTooltip}
          animatedRemovedTooltip={animatedRemovedTooltip}
        />
      );
    }
  });

  return (
    <div>
      <h4 className="font-secondary text-xl font-semibold mb-5">
        This item can be cool with this
      </h4>
      <div className="flex gap-5 overflow-x-auto">
        {relatedProductsElements}
      </div>
    </div>
  );
}

export default RelatedProducts;
