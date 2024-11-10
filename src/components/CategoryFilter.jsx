import {
  menCategoryArray,
  unisexCategoryArray,
  womenCategoryArray,
} from "../constants/categories";

function CategoryFilter({ gender }) {
  const menCategoryElements = menCategoryArray.map((category) => (
    <button className="hover:bg-gray-400 p-1 border border-black rounded-full text-center">
      {category}
    </button>
  ));

  const womenCategoryElements = womenCategoryArray.map((category) => (
    <button className="hover:bg-gray-400 p-1 border border-black rounded-full text-center">
      {category}
    </button>
  ));

  const unisexCategoryElements = unisexCategoryArray.map((category) => (
    <button className="hover:bg-gray-400 p-1 border border-black rounded-full text-center">
      {category}
    </button>
  ));

  return (
    <div>
      {gender === "Men" && (
        <div className="font-secondary grid grid-cols-2 gap-1 text-sm lg:grid-cols-3">
          {menCategoryElements}
        </div>
      )}
      {gender === "Women" && (
        <div className="font-secondary grid grid-cols-2 gap-1 text-sm lg:grid-cols-3">
          {womenCategoryElements}
        </div>
      )}
      {gender === "Unisex" && (
        <div className="font-secondary grid grid-cols-2 gap-1 text-sm lg:grid-cols-3">
          {unisexCategoryElements}
        </div>
      )}
    </div>
  );
}

export default CategoryFilter;
