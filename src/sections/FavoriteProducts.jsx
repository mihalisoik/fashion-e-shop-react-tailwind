<<<<<<< HEAD
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

  return (
    <div
      className={`bg-gray-50/80 rounded-xl shadow-lg p-6 w-80 md:w-96 mx-auto overflow-y-auto ${
        favoriteClothesArray.length > 0 ? "h-96" : "h-fit"
      }`}
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Your Favorite Products
      </h2>
      <div className="grid grid-cols-1 gap-6">
        {favoriteClothesArray.length > 0 ? (
          favoriteClothesArray.map((item) => (
            <div
              key={item.id}
              className="relative bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200"
            >
              <Link to={`/item?id=${encodeURIComponent(item.id)}`}>
                <img
                  src={item.image}
                  alt={`Preview of ${item.name}`}
                  className="h-60 object-cover w-full hover:scale-105 transition-transform duration-200"
                />
              </Link>
              <div className="p-4">
                <Link
                  to={`/item?id=${encodeURIComponent(item.id)}`}
                  className="text-lg font-semibold text-gray-800 hover:underline"
                >
                  {item.name}
                </Link>
                <p className="text-gray-600 mt-2">
                  <span className="text-xs align-top">€</span>
                  {formatCurrency(item.priceCents)}
                </p>
              </div>
              <button
                className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-150"
                onClick={() => {
                  handleBucketClick(item);
                }}
              >
                <img src="/icons/bucket.svg" alt="" className="w-4 h-4" />
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center col-span-2">
            No favorite items to display.
          </p>
        )}
      </div>
    </div>
  );
}

export default FavoriteProducts;
=======
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

  return (
    <div
      className={`bg-gray-50/80 rounded-xl shadow-lg p-6 w-80 md:w-96 mx-auto overflow-y-auto ${
        favoriteClothesArray.length > 0 ? "h-96" : "h-fit"
      }`}
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Your Favorite Products
      </h2>
      <div className="grid grid-cols-1 gap-6">
        {favoriteClothesArray.length > 0 ? (
          favoriteClothesArray.map((item) => (
            <div
              key={item.id}
              className="relative bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200"
            >
              <Link to={`/item?id=${encodeURIComponent(item.id)}`}>
                <img
                  src={item.image}
                  alt={`Preview of ${item.name}`}
                  className="h-60 object-cover w-full hover:scale-105 transition-transform duration-200"
                />
              </Link>
              <div className="p-4">
                <Link
                  to={`/item?id=${encodeURIComponent(item.id)}`}
                  className="text-lg font-semibold text-gray-800 hover:underline"
                >
                  {item.name}
                </Link>
                <p className="text-gray-600 mt-2">
                  <span className="text-xs align-top">€</span>
                  {formatCurrency(item.priceCents)}
                </p>
              </div>
              <button
                className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-150"
                onClick={() => {
                  handleBucketClick(item);
                }}
              >
                <img src="/icons/bucket.svg" alt="" className="w-4 h-4" />
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center col-span-2">
            No favorite items to display.
          </p>
        )}
      </div>
    </div>
  );
}

export default FavoriteProducts;
>>>>>>> a825e4238c2a4c9321a49a838ffbc4a811f5bedb
