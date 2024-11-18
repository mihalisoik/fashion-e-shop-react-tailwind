import { clothes } from "../constants/clothes";
import { formatCurrency } from "../utils/money";

function ViewItem({ id }) {
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
    <div className="mt-20 bg-white w-full h-fit flex flex-col lg:flex-row px-3 pt-2 pb-10 lg:pb-2">
      <div>
        <img src={chosenItem.image} alt="Clothe Image" width={800} />
      </div>
      <div className="py-1 ml-10 lg:mt-10 flex flex-col">
        <h2 className="text-3xl lg:text-[3rem] font-bold font-primary text-gray-900">
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
      </div>
    </div>
  );
}

export default ViewItem;
