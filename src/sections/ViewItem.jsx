import { useMemo, useState } from "react";
import { clothes } from "../constants/clothes";
import { formatCurrency } from "../utils/money";
import RelatedProducts from "./RelatedProducts";
import { addToCart } from "../constants/cart";

function ViewItem({
  id,
  animatedAddedTooltip,
  animatedRemovedTooltip,
  setRenderTotalQuantity,
}) {
  const chosenItem = clothes.find((item) => item.id === id);
  const [selectedSize, setSelectedSize] = useState(null);
  const [sizeWarning, setSizeWarning] = useState(false);
  const [stockWarning, setStockWarning] = useState(false);
  const [trembleWarning, setTrembleWarning] = useState(false);

  const itemStars = chosenItem.rating.stars;

  const ratingElements = useMemo(() => {
    const elements = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= itemStars) {
        if (itemStars - i > 0 && itemStars - i < 1) {
          elements.push(
            <span key={i}>
              <img src="src/assets/icons/star-half.svg" alt="Half Star Icon" />
            </span>
          );
        } else {
          elements.push(
            <span key={i}>
              <img src="src/assets/icons/star.svg" alt="Star Icon" />
            </span>
          );
        }
      } else {
        elements.push(
          <span key={i}>
            <img src="src/assets/icons/star-empty.svg" alt="Empty Star Icon" />
          </span>
        );
      }
    }
    return elements;
  }, [itemStars]);

  function handlePickingSize(size, quantity) {
    setSelectedSize(size);
    setStockWarning(quantity === 0);
  }

  const sizeElements = Object.entries(chosenItem.stock).map(
    ([size, quantity]) => (
      <div
        key={size}
        className={`bg-gray-300 px-3 py-1 rounded-lg cursor-pointer border-2 ${
          selectedSize === size ? "border-accent" : "border-black"
        } text-slate-50 font-semibold`}
        data-quantity={quantity}
        onClick={() => handlePickingSize(size, quantity)}
      >
        {size}
      </div>
    )
  );

  function handleAddToCart() {
    if (selectedSize) {
      if (!stockWarning) {
        setSizeWarning(false);
        animatedAddedTooltip();
        setRenderTotalQuantity((oldValue) => oldValue + 1);
        addToCart(id, selectedSize);
      } else {
        setTrembleWarning(true);
        setTimeout(() => setTrembleWarning(false), 500);
      }
    } else {
      setSizeWarning(true);
    }
  }

  return (
    <div className="mt-20 bg-white w-full h-fit flex flex-col gap-10 px-3 pt-2 pb-10 lg:pb-2 shadow-xl">
      <div className="flex flex-col lg:flex-row">
        <div>
          <img src={chosenItem.image} alt="Clothe Image" width={800} />
        </div>
        <div className="flex flex-col md:flex-row lg:flex-col ml-10 lg:justify-start lg:gap-10">
          <div className="py-1 lg:mt-10 flex flex-col">
            <h2 className="text-3xl lg:text-[3rem] font-bold font-primary text-gray-900 text-nowrap">
              {chosenItem.name}
            </h2>
            <div className="flex mt-2 items-center text-gray-600">
              {ratingElements}
              <p className="font-secondary">{`(${chosenItem.rating.stars.toFixed(
                1
              )})`}</p>
              <p className="ml-2 text-sm font-secondary tracking-tight">
                {chosenItem.rating.reviews} Reviews
              </p>
            </div>
            <div className="mt-10 flex w-64 lg:w-80 items-center font-secondary">
              <div>
                <p className="text-[2.1rem] lg:text-[3rem] font-semibold text-gray-700">
                  <span className="text-lg">€</span>
                  {formatCurrency(chosenItem.priceCents)}
                </p>
              </div>
            </div>
            <h4 className="mt-4 font-semibold text-xl">Sizes</h4>
            <div className="flex gap-1 mt-2">{sizeElements}</div>
            {sizeWarning && (
              <p className="text-red-600">Please select a size</p>
            )}
            {stockWarning && (
              <p className={`text-red-600 ${trembleWarning && "tremble"}`}>
                Currently out of stock
              </p>
            )}
            <div>
              <div className="text-sm mt-4 block lg:hidden w-full">
                <h3 className="text-gray-700">Description:</h3>
                <p className="text-gray-600 italic">{chosenItem.description}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-sm mt-2 hidden lg:block">
              <h3 className="text-gray-700">Description:</h3>
              <p className="text-gray-600 italic">{chosenItem.description}</p>
            </div>
          </div>
          <div className="flex flex-col md:ml-16 lg:ml-0 w-48 lg:w-56 gap-5 justify-center">
            <button
              className="main-button main-button-hover mt-7 whitespace-nowrap"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            <button className="font-primary font-bold whitespace-nowrap bg-slate-100 py-4 px-10 rounded-full text-accent shadow-lg hover:bg-slate-50 hover:scale-105 hover:shadow-xl transition-transform transform">
              Checkout Now
            </button>
          </div>
        </div>
      </div>
      <div>
        <RelatedProducts
          id={id}
          animatedAddedTooltip={animatedAddedTooltip}
          animatedRemovedTooltip={animatedRemovedTooltip}
          setRenderTotalQuantity={setRenderTotalQuantity}
        />
      </div>
    </div>
  );
}

export default ViewItem;
