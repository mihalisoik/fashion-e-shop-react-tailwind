import ProductCard from "../components/ProductCard";
import { clothes } from "../constants/clothes";

function RelatedProducts({
  id,
  animatedAddedTooltip,
  animatedRemovedTooltip,
  setRenderTotalQuantity,
}) {
  function filterTheGender(clothe) {
    const array = [];
    if (clothe.gender === "Men") {
      clothes.forEach((item) => {
        if (item.gender === "Men" || item.gender === "Unisex") {
          array.push(item);
        }
      });
    } else if (clothe.gender === "Women") {
      clothes.forEach((item) => {
        if (item.gender === "Women" || item.gender === "Unisex") {
          array.push(item);
        }
      });
    } else if (clothe.gender === "Unisex") {
      clothes.forEach((item) => {
        if (item.gender === "Unisex") {
          array.push(item);
        }
      });
    }

    return array;
  }

  function filterTheFitsWith(clothe) {
    const array = [];
    clothes.forEach((item) => {
      if (clothe.fitsWith.includes(item.category)) {
        array.push(item);
      }
    });
    return array;
  }

  function filterTheStyle(clothe) {
    const array = [];
    clothe.style.forEach((style) => {
      clothes.forEach((item) => {
        if (item.style.includes(style)) {
          array.push(item);
        }
      });
    });
    return array;
  }

  function filterTheColor(clothe) {
    const array = [];
    clothes.forEach((item) => {
      if (item.matchesWithColors.includes(clothe.color)) {
        array.push(item);
      }
    });
    return array;
  }

  function getThreeRandomClothes(array) {
    if (array.length <= 3) {
      return array;
    }
    const randomArray = [];
    while (randomArray.length < 3) {
      const randomIndex = Math.floor(Math.random() * array.length);
      if (!randomArray.includes(array[randomIndex])) {
        randomArray.push(array[randomIndex]);
      }
    }
  }

  const selectedItem = clothes.find((item) => item.id === id);

  const relatedClothesArray = filterTheGender(selectedItem).filter((item) =>
    [
      filterTheFitsWith(selectedItem),
      filterTheStyle(selectedItem),
      filterTheColor(selectedItem),
    ].every((array) => array.includes(item))
  );

  console.log(relatedClothesArray);

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
