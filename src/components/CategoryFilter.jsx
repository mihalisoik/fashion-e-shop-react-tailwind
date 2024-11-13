import { useState } from "react";
import {
  menCategoryArray,
  unisexCategoryArray,
  womenCategoryArray,
} from "../constants/categories";

function CategoryFilter({ gender, addFilter, removeFilter, filters }) {
  const categoryMap = {
    Men: menCategoryArray,
    Women: womenCategoryArray,
    Unisex: unisexCategoryArray,
  };

  function deleteAllOtherCategoryFilters() {
    const filtersToDelete = filters.filter(
      (filter) =>
        filter.endsWith("Men") ||
        filter.endsWith("Women") ||
        filter.endsWith("Unisex")
    );

    filtersToDelete.forEach((filter) => {
      removeFilter(filter);
    });
  }

  function controlFilter(event) {
    const button = event.target.closest("button");
    const filterText = `${button.textContent} for ${gender}`;
    if (filters.includes(filterText)) {
      removeFilter(filterText);
    } else {
      deleteAllOtherCategoryFilters(); //na ftiaksw auto
      addFilter(filterText);
    }
  }

  return (
    <div className="font-secondary gap-1 flex flex-col items-start rounded-sm text-sm py-3 px-1">
      {categoryMap[gender].map((category) => {
        const isSelected = filters.includes(`${category} for ${gender}`);

        return (
          <button
            key={category}
            className={`hover:bg-gray-300 border border-white text-white font-semibold w-full py-1 text-start ${
              isSelected && "bg-gray-500"
            }`}
            onClick={(event) => {
              controlFilter(event);
            }}
          >
            <p className="ml-2">{category}</p>
          </button>
        );
      })}
    </div>
  );
}

export default CategoryFilter;
