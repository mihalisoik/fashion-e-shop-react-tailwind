import ProductCard from "../components/ProductCard";
import { clothes } from "../constants/clothes";

function RelatedProducts({
  id,
  animatedAddedTooltip,
  animatedRemovedTooltip,
  setRenderTotalQuantity,
}) {
  function filterTheGender(clothe) {
    return clothes.filter((item) => {
      if (clothe.gender === "Men") {
        return item.gender === "Men" || item.gender === "Unisex";
      } else if (clothe.gender === "Women") {
        return item.gender === "Women" || item.gender === "Unisex";
      } else if (clothe.gender === "Unisex") {
        return item.gender === "Unisex";
      }
      return false;
    });
  }

  function filterTheFitsWith(clothe) {
    return clothes.filter((item) => clothe.fitsWith.includes(item.category));
  }

  function filterTheColor(clothe) {
    return clothes.filter((item) =>
      item.matchesWithColors.includes(clothe.color)
    );
  }

  function getThreeRandomClothes(array) {
    const randomArray = [];
    while (randomArray.length < 3 && array.length > 0) {
      const randomIndex = Math.floor(Math.random() * array.length);
      const selectedItem = array[randomIndex];
      if (!randomArray.includes(selectedItem)) {
        randomArray.push(selectedItem);
      }
    }
    return randomArray;
  }

  const selectedItem = clothes.find((item) => item.id === id);

  const relatedClothesArray = filterTheGender(selectedItem).filter((item) => {
    return (
      filterTheFitsWith(selectedItem).includes(item) &&
      filterTheColor(selectedItem).includes(item)
    );
  });

  const randomArrayOfRelatedClothes =
    getThreeRandomClothes(relatedClothesArray);

  const relatedProductsElements = randomArrayOfRelatedClothes.map((clothe) => {
    return (
      <ProductCard
        key={clothe.id}
        id={clothe.id}
        image={clothe.image}
        name={clothe.name}
        rating={clothe.rating}
        isFavorite={clothe.isFavorite}
        priceCents={clothe.priceCents}
        stock={clothe.stock}
        setRenderTotalQuantity={setRenderTotalQuantity}
        animatedAddedTooltip={animatedAddedTooltip}
        animatedRemovedTooltip={animatedRemovedTooltip}
      />
    );
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
