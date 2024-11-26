import { useState } from "react";
import { clothes } from "../constants/clothes";
import { formatCurrency } from "../utils/money";
import { saveClothesToStorage } from "../utils/saveToStorage";
import { Link } from "react-router-dom";

function FavoriteProducts() {
  const [favoriteClothesArray, setFavoriteClothesArray] = useState(
    clothes.filter((item) => item.isFavorite)
  );

  function handleBucketClick(item) {
    item.isFavorite = false;
    saveClothesToStorage(clothes);
    setFavoriteClothesArray(clothes.filter((item) => item.isFavorite));
  }

  const favoriteItemElements = favoriteClothesArray.map((item) => {
    return (
      <div>
        <div className="flex py-2 px-5 bg-white rounded-sm border border-black text-sm gap-3">
          <Link to={`/item?id=${encodeURIComponent(item.id)}`} key={item.id}>
            <img src={item.image} alt="Favorite Product" width={100} />
          </Link>
          <div className="flex items-center gap-3 text-gray-800">
            <Link to={`/item?id=${encodeURIComponent(item.id)}`} key={item.id}>
              <div className="flex flex-col gap-4 items-start w-28 md:w-32">
                <p className="font-semibold text-left">{item.name}</p>
                <p>
                  <span className="text-[0.6rem]">€</span>
                  {formatCurrency(item.priceCents)}
                </p>
              </div>
            </Link>
            <button
              className="p-1 border border-gray-800 rounded-sm hover:bg-gray-200 shadow-lg active:scale-95"
              onClick={(event) => {
                event.stopPropagation();
                handleBucketClick(item);
              }}
            >
              <img
                src="src/assets/icons/bucket.svg"
                alt="Remove From Favorites"
              />
            </button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="bg-gray-200/90 rounded-md flex flex-col gap-3 max-h-96 overflow-y-auto p-4 w-80 md:w-96 shadow-2xl">
      {favoriteItemElements}
      {favoriteClothesArray.length === 0 && (
        <p className="text-gray-800 text-xs">No Favorite Items</p>
      )}
    </div>
  );
}

export default FavoriteProducts;
