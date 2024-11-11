import { useState } from "react";
import {
  menCategoryArray,
  unisexCategoryArray,
  womenCategoryArray,
} from "../constants/categories";

function CategoryFilter({ gender, controlFilters }) {
  const menCategoryElements = menCategoryArray.map((category, index) => (
    <button
      className="hover:bg-gray-400 p-1 border border-gray-400 text-text-color rounded-full text-center font-semibold"
      onClick={(event) => {
        const button = event.target;
        controlFilters(`Men ${button.textContent}`);
        button.classList.toggle("filters-toggle");
      }}
    >
      {category}
    </button>
  ));

  const womenCategoryElements = womenCategoryArray.map((category) => (
    <button
      className="hover:bg-gray-400 p-1 border border-gray-400 text-text-color rounded-full text-center font-semibold"
      onClick={(event) => {
        controlFilters(`Women ${event.target.textContent}`);
      }}
    >
      {category}
    </button>
  ));

  const unisexCategoryElements = unisexCategoryArray.map((category) => (
    <button
      className="hover:bg-gray-400 p-1 border border-gray-400 text-text-color rounded-full text-center font-semibold"
      onClick={(event) => {
        controlFilters(`Unisex ${event.target.textContent}`);
      }}
    >
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
