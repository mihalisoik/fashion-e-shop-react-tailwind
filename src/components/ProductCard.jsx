import { useState } from "react";
import {
  addToCart,
  cart,
  importProductToCart,
  removeFromCart,
} from "../constants/cart";
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
  color,
  setRenderTotalQuantity,
  animatedAddedTooltip,
  animatedRemovedTooltip,
}) {
  const existingItem = cart.some((item) => item.id === id);

  const [cartButton, setCartButton] = useState(existingItem);

  function changeCartButton() {
    setCartButton(cart.some((item) => item.id === id));
  }

  let productQuantity;
  cart.forEach((item) => {
    if (item.id === id) {
      productQuantity = item.quantity;
    }
  });

  const [favorited, setFavorited] = useState(isFavorite);

  function changeIsFavorite() {
    clothes.forEach((clothe) => {
      if (clothe.id === id) {
        clothe.isFavorite = !clothe.isFavorite;
        setFavorited(clothe.isFavorite);
      }
    });
  }

  return (
    <div className="bg-slate-100 p-5 font-secondary flex flex-col gap-1 justify-center items-start rounded-md shadow-lg  flex-shrink-0 w-52 text-sm">
      <button
        className="ml-auto bg-white p-1 rounded-full shadow-md"
        onClick={() => {
          changeIsFavorite();
        }}
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
            {(rating * 10) % 10 === 0 ? (
              <img src="src/assets/icons/star.svg" alt="star-rating" />
            ) : (
              <img
                src="src/assets/icons/star-half.svg"
                alt="half-star-rating"
              />
            )}
            <p>{rating.toFixed(1)}</p>
          </div>
          <div className="flex gap-1">
            <button
              style={{ backgroundColor: color }}
              className="w-4 h-4 rounded-full shadow-lg border border-1 border-accent"
            ></button>
          </div>
        </div>
        <h3 className="font-secondary font-semibold">{name}</h3>
        <div className="font-secondary">
          <span className="text-[0.6rem]">€</span>
          {formatCurrency(priceCents)}
        </div>
      </Link>
      <div className="mt-2">
        {!cartButton ? (
          <button
            className="flex w-40 h-10 gap-2 text-[#666666] text-sm px-3 py-2 bg-slate-50 rounded-3xl justify-center items-center font-semibold shadow-md hover:bg-slate-100 active:scale-95"
            onClick={() => {
              animatedAddedTooltip();
              setRenderTotalQuantity((oldValue) => oldValue + 1);
              importProductToCart(id);
              changeCartButton();
            }}
          >
            Add to Cart
            <img src="src/assets/icons/add-to-cart.svg" alt="Add to Cart" />
          </button>
        ) : (
          <div className="flex w-40 h-10 text-[#666666] text-base px-3 py-2 bg-slate-50 rounded-3xl justify-between items-center shadow-md">
            <button
              className="border border-[#666666] rounded-full hover:bg-slate-100 active:scale-95"
              onClick={() => {
                animatedRemovedTooltip();
                setRenderTotalQuantity((oldValue) => oldValue - 1);
                removeFromCart(id);
                if (productQuantity === 1) {
                  setCartButton(false);
                }
              }}
            >
              <img src="src/assets/icons/minus.svg" alt="minus-icon" />
            </button>
            {`${productQuantity}`}
            <button
              className="border border-[#666666] rounded-full hover:bg-slate-100 active:scale-95"
              onClick={() => {
                animatedAddedTooltip();
                setRenderTotalQuantity((oldValue) => oldValue + 1);
                addToCart(id);
              }}
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
