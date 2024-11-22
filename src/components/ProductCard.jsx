import { useEffect, useState } from "react";
import { addToCart, cart, removeFromCart } from "../constants/cart";
import { formatCurrency } from "../utils/money";
import { clothes } from "../constants/clothes";
import { Link } from "react-router-dom";

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
  const [selectedSize, setSelectedSize] = useState(Object.keys(stock)[0]);
  const [productQuantity, setProductQuantity] = useState(0);
  const isInCart = productQuantity > 0;
  const [favorited, setFavorited] = useState(isFavorite);

  useEffect(() => {
    const currentItem = cart.find(
      (item) => item.id === id && item.size === selectedSize
    );
    setProductQuantity(currentItem ? currentItem.quantity : 0);
  }, [cart, id, selectedSize]);

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleAddToCart = () => {
    animatedAddedTooltip();
    setRenderTotalQuantity((oldValue) => oldValue + 1);
    setProductQuantity((oldValue) => oldValue + 1);
    addToCart(id, selectedSize);
  };

  const handleDecrement = () => {
    animatedRemovedTooltip();
    setRenderTotalQuantity((oldValue) => oldValue - 1);
    setProductQuantity((oldValue) => oldValue - 1);
    removeFromCart(id, selectedSize);
  };

  const handleToggleFavorite = () => {
    clothes.forEach((clothe) => {
      if (clothe.id === id) {
        clothe.isFavorite = !clothe.isFavorite;
        setFavorited(clothe.isFavorite);
      }
    });
  };

  return (
    <div className="bg-slate-100 p-5 font-secondary flex flex-col gap-1 justify-center items-start rounded-md shadow-lg flex-shrink-0 w-52 text-sm">
      <button
        className="ml-auto bg-white p-1 rounded-full shadow-md"
        onClick={handleToggleFavorite}
      >
        {favorited ? (
          <img src="src/assets/icons/favorite.svg" alt="favorite" />
        ) : (
          <img src="src/assets/icons/non-favorite.svg" alt="non-favorite" />
        )}
      </button>
      <Link to={`/item?id=${encodeURIComponent(id)}`} key={id}>
        <img src={image} alt={name} width={150} />
        <div className="flex w-full font-secondary justify-between items-center">
          <div className="flex items-center gap-0.5">
            {(rating.stars * 10) % 10 === 0 ? (
              <img src="src/assets/icons/star.svg" alt="star-rating" />
            ) : (
              <img
                src="src/assets/icons/star-half.svg"
                alt="half-star-rating"
              />
            )}
            <p>{rating.stars.toFixed(1)}</p>
          </div>
          <select
            className="bg-accent border border-1 border-gray-500 text-slate-50 rounded-full px-1 py-0.5"
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
        <h3 className="font-secondary font-semibold">{name}</h3>
        <div className="font-secondary">
          <span className="text-[0.6rem]">€</span>
          {formatCurrency(priceCents)}
        </div>
      </Link>
      <div className="mt-2">
        {!isInCart ? (
          <button
            className="flex w-40 h-10 gap-2 text-[#666666] text-sm px-3 py-2 bg-slate-50 rounded-3xl justify-center items-center font-semibold shadow-md hover:bg-slate-100 active:scale-95"
            onClick={handleAddToCart}
          >
            Add to Cart
            <img src="src/assets/icons/add-to-cart.svg" alt="Add to Cart" />
          </button>
        ) : (
          <div className="flex w-40 h-10 text-[#666666] text-base px-3 py-2 bg-slate-50 rounded-3xl justify-between items-center shadow-md">
            <button
              className="border border-[#666666] rounded-full hover:bg-slate-100 active:scale-95"
              onClick={handleDecrement}
            >
              <img src="src/assets/icons/minus.svg" alt="minus-icon" />
            </button>
            {productQuantity}
            <button
              className="border border-[#666666] rounded-full hover:bg-slate-100 active:scale-95"
              onClick={handleAddToCart}
            >
              <img src="src/assets/icons/plus.svg" alt="plus-icon" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
