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
      <div
        key={item.id}
        className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden mb-4"
      >
        <div className="relative">
          <Link to={`/item?id=${encodeURIComponent(item.id)}`}>
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-64 object-cover rounded-t-lg"
            />
          </Link>
          <button
            className="absolute top-2 right-2 bg-white border-2 border-gray-400 p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
            onClick={(event) => {
              event.stopPropagation();
              handleBucketClick(item);
            }}
            aria-label="Remove from favorites"
          >
            <img
              src="src/assets/icons/bucket.svg"
              alt="Remove from favorites"
              className="w-6 h-6"
            />
          </button>
        </div>
        <div className="p-4 flex flex-col gap-2">
          <Link to={`/item?id=${encodeURIComponent(item.id)}`}>
            <h4 className="text-lg font-semibold text-gray-800 hover:text-primary transition-colors">
              {item.name}
            </h4>
          </Link>
          <p className="text-sm text-gray-600">
            <span className="text-xs">€</span>
            {formatCurrency(item.priceCents)}
          </p>
        </div>
      </div>
    );
  });

  return (
    <div className="bg-gray-200/90 rounded-md flex flex-col gap-3 p-4 w-80 md:w-96 shadow-2xl max-h-96 overflow-y-auto">
      {favoriteItemElements}
      {favoriteClothesArray.length === 0 && (
        <p className="text-gray-800 text-xs text-center">No Favorite Items</p>
      )}
    </div>
  );
}

export default FavoriteProducts;
