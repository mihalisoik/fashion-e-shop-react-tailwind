import React from "react";
import {
  menCategoryArray,
  unisexCategoryArray,
  womenCategoryArray,
} from "../constants/categories";

function CategoryFilter({ gender, addFilter, removeFilter }) {
  const categoryMap = {
    Men: menCategoryArray,
    Women: womenCategoryArray,
    Unisex: unisexCategoryArray,
  };

  const controlFilter = (event) => {
    const button = event.target.closest("button");
    const filterText = `${button.textContent} for ${gender}`;
    if (button.classList.contains("filters-toggle")) {
      removeFilter(filterText);
    } else {
      addFilter(filterText);
    }
    button.classList.toggle("filters-toggle");
  };

  return (
    <div className="font-secondary gap-1 flex flex-col items-start rounded-sm text-sm py-3 px-1">
      {categoryMap[gender].map((category) => (
        <button
          key={category}
          className="hover:bg-gray-300 border border-white text-white font-semibold w-full py-1 text-start"
          onClick={controlFilter}
        >
          <p className="ml-2">{category}</p>
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
