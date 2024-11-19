import { clothes } from "../constants/clothes";
import { formatCurrency } from "../utils/money";
import RelatedProducts from "./RelatedProducts";

function ViewItem({
  id,
  animatedAddedTooltip,
  animatedRemovedTooltip,
  setRenderTotalQuantity,
}) {
  console.log(typeof id);
  const chosenItem = clothes.find((item) => item.id === id);

  const itemStars = chosenItem.rating.stars;
  console.log(itemStars);

  const ratingElements = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= itemStars) {
      if (itemStars - i > 0 && itemStars - i < 1) {
        ratingElements.push(
          <span key={i}>
            <img src="src/assets/icons/star-half.svg" alt="Half Star Icon" />
          </span>
        );
      } else {
        ratingElements.push(
          <span key={i}>
            <img src="src/assets/icons/star.svg" alt="Star Icon" />
          </span>
        );
      }
    } else {
      ratingElements.push(
        <span key={i}>
          <img src="src/assets/icons/star-empty.svg" alt="Empty Star Icon" />
        </span>
      );
    }
  }

  return (
    <div className="mt-20 bg-white w-full h-fit flex flex-col gap-10 px-3 pt-2 pb-10 lg:pb-2">
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
            <div>
              <div className="text-sm mt-4 block lg:hidden w-full">
                <h3 className="text-gray-700">Description:</h3>
                <p className="text-gray-600 italic">{chosenItem.description}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div
              style={{ backgroundColor: chosenItem.color }}
              className="w-6 h-6 rounded-lg outline outline-1 outline-black mt-5 lg:mt-0 mr-auto"
            ></div>
            <div className="text-sm mt-4 hidden lg:block">
              <h3 className="text-gray-700">Description:</h3>
              <p className="text-gray-600 italic">{chosenItem.description}</p>
            </div>
            <div className="flex flex-col md:ml-16 lg:ml-0  w-48 lg:w-56 gap-5 justify-between">
              <button
                className="main-button main-button-hover mt-7"
                onClick={() => {
                  animatedAddedTooltip();
                  setRenderTotalQuantity((oldValue) => oldValue + 1);
                }}
              >
                Add to Cart
              </button>
              <button className="font-primary font-bold bg-slate-100 py-4 px-10 rounded-full text-accent shadow-lg hover:bg-slate-50 hover:scale-105 hover:shadow-xl transition-transform transform">
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <RelatedProducts
          animatedAddedTooltip={animatedAddedTooltip}
          animatedRemovedTooltip={animatedRemovedTooltip}
          setRenderTotalQuantity={setRenderTotalQuantity}
        />
      </div>
    </div>
  );
}

export default ViewItem;
