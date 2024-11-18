import { clothes } from "../constants/clothes";

function ViewItem({ id }) {
  const chosenItem = clothes.find((item) => item.id === id);

  return (
    <div className="mt-20 bg-white w-full h-[100vh] flex flex-col lg:flex-row">
      <div>
        <img src={chosenItem.image} alt="Clothe Image" width={800} />
      </div>
      <div className="px-3 py-1">
        <h2 className="text-xl font-bold font-primary ">{chosenItem.name}</h2>
        <p className="text-xs font-secondary text-gray-500">{`Gender: ${chosenItem.gender}`}</p>
        <p className="text-xs font-secondary text-gray-500">{`Category: ${chosenItem.category}`}</p>
      </div>
    </div>
  );
}

export default ViewItem;
