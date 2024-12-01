import { useEffect, useState } from "react";
import { addToCart, cart, removeFromCart } from "../constants/cart";
import { formatCurrency } from "../utils/money";
import { clothes } from "../constants/clothes";
import { Link } from "react-router-dom";
import { saveClothesToStorage } from "../utils/saveToStorage";

function ProductCard({
  id,
  image,
  name,
  rating,
  isFavorite,
  priceCents,
  stock,
  setRenderTotalQuantity,
  animatedAddedTooltip,
  animatedRemovedTooltip,
}) {
  console.log(image);
  const [productQuantity, setProductQuantity] = useState(0);
  const [favorited, setFavorited] = useState(isFavorite);
  const [selectedSize, setSelectedSize] = useState(Object.keys(stock)[0]);
  const [stockQuantity, setStockQuantity] = useState(Object.values(stock)[0]);
  const [isTrembling, setIsTrembling] = useState(false);

  const isInCart = productQuantity > 0;

  useEffect(() => {
    const currentItem = cart.find(
      (item) => item.id === id && item.size === selectedSize
    );
    setProductQuantity(currentItem ? currentItem.quantity : 0);
  }, [selectedSize]);

  function handleSizeChange(event) {
    const selectedOption = event.target.options[event.target.selectedIndex];
    setStockQuantity(Number(selectedOption.dataset.quantity));
    setSelectedSize(event.target.value);
  }

  function handleAddToCart() {
    animatedAddedTooltip();
    setRenderTotalQuantity((oldValue) => oldValue + 1);
    setProductQuantity((oldValue) => oldValue + 1);
    addToCart(id, selectedSize);
  }

  function handleDecrement() {
    animatedRemovedTooltip();
    setRenderTotalQuantity((oldValue) => oldValue - 1);
    setProductQuantity((oldValue) => oldValue - 1);
    removeFromCart(id, selectedSize);
  }

  function handleToggleFavorite() {
    clothes.forEach((clothe) => {
      if (clothe.id === id) {
        clothe.isFavorite = !clothe.isFavorite;
        setFavorited(clothe.isFavorite);
      }
    });
    saveClothesToStorage(clothes);
  }

  function handleTrembleClick() {
    setIsTrembling(true);

    setTimeout(() => {
      setIsTrembling(false);
    }, 500);
  }

  return (
    <div className="bg-background p-6 font-secondary flex flex-col gap-1 justify-center items-start rounded-md shadow-lg flex-shrink-0 w-56 text-sm">
      <button
        className="ml-auto bg-white p-1 rounded-full shadow-md"
        onClick={handleToggleFavorite}
      >
        {favorited ? (
          <img src="/icons/favorite.svg" alt="Favorite" />
        ) : (
          <img src="/icons/non-favorite.svg" alt="Not Favorite" />
        )}
      </button>
      <Link to={`/item?id=${encodeURIComponent(id)}`} key={id}>
        <img
          src={image}
          alt={name}
          className="mt-2 mb-2 rounded-xl shadow-2xl"
        />
      </Link>
      <div className="flex w-full font-secondary justify-between items-center">
        <div className="flex items-center gap-0.5">
          {(rating.stars * 10) % 10 === 0 ? (
            <img src="/icons/star.svg" alt="Star Rating" />
          ) : (
            <img src="/icons/star-half.svg" alt="Half Star Rating" />
          )}
          <p>{rating.stars.toFixed(1)}</p>
        </div>
        <select
          className="bg-primary hover:bg-lightprimary border border-1 border-gray-500 text-slate-50 rounded-full px-1 py-0.5 cursor-pointer"
          onChange={handleSizeChange}
          value={selectedSize}
        >
          {Object.entries(stock).map(([size, quantity]) => (
            <option key={size} value={size} data-quantity={quantity}>
              {size}
            </option>
          ))}
        </select>
      </div>
      <Link to={`/item?id=${encodeURIComponent(id)}`} key={id}>
        <h3 className="font-secondary font-semibold">{name}</h3>
        <div className="font-secondary">
          <span className="text-[0.6rem]">€</span>
          {formatCurrency(priceCents)}
        </div>
      </Link>
      <div className="mt-2">
        {!isInCart ? (
          <button className="group w-40 h-10 text-[#666666] text-sm px-3 py-2 bg-slate-50 rounded-3xl font-semibold shadow-md hover:bg-slate-100">
            {stockQuantity > 0 ? (
              <div
                className="flex justify-center items-center gap-2 active:scale-95"
                onClick={handleAddToCart}
              >
                <p>Add To Cart</p>
                <img src="/icons/add-to-cart.svg" alt="Add to Cart" />
              </div>
            ) : (
              <div
                className={`text-red-600 cursor-not-allowed ${
                  isTrembling ? "tremble" : ""
                }`}
                onClick={handleTrembleClick}
              >
                <p>Out Of Stock</p>
              </div>
            )}
          </button>
        ) : (
          <div className="flex w-40 h-10 text-[#666666] text-base px-3 py-2 bg-slate-50 rounded-3xl justify-between items-center shadow-md">
            <button
              className="border border-[#666666] rounded-full hover:bg-slate-100 active:scale-95"
              onClick={handleDecrement}
            >
              <img src="/icons/minus.svg" alt="Decrease Cart" />
            </button>
            {productQuantity}
            <button
              className="border border-[#666666] rounded-full hover:bg-slate-100 active:scale-95"
              onClick={handleAddToCart}
            >
              <img src="/icons/plus.svg" alt="Add To Cart" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
