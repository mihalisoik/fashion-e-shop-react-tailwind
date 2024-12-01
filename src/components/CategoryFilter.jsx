<<<<<<< HEAD
import {
  menCategoryArray,
  unisexCategoryArray,
  womenCategoryArray,
} from "../constants/categories";

function CategoryFilter({ gender, filters, setFilters, removeFilter }) {
  const categoryMap = {
    Men: menCategoryArray,
    Women: womenCategoryArray,
    Unisex: unisexCategoryArray,
  };

  function keepOnlyOneCategoryFilter(filterText) {
    const filtersToKeep = filters.filter(
      (filter) =>
        !(
          filter.startsWith("Men") ||
          filter.startsWith("Women") ||
          filter.startsWith("Unisex")
        )
    );

    setFilters([...filtersToKeep, filterText]);
  }

  function controlFilter(event) {
    const button = event.target;
    const filterText = `${gender} ${button.textContent}`;
    if (filters.includes(filterText)) {
      removeFilter(filterText);
    } else {
      keepOnlyOneCategoryFilter(filterText);
    }
  }

  return (
    <div className="font-secondary gap-1 flex flex-col items-start rounded-sm text-sm py-3 px-1">
      {categoryMap[gender].map((category) => {
        const isSelected = filters.includes(`${gender} ${category}`);

        return (
          <button
            key={category}
            className={`hover:bg-gray-300 border border-white text-slate-50 font-semibold w-full py-1 text-start ${
              isSelected && "scale-105 hover:bg-gray-500 bg-gray-500"
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
=======
import {
  menCategoryArray,
  unisexCategoryArray,
  womenCategoryArray,
} from "../constants/categories";

function CategoryFilter({ gender, filters, setFilters, removeFilter }) {
  const categoryMap = {
    Men: menCategoryArray,
    Women: womenCategoryArray,
    Unisex: unisexCategoryArray,
  };

  function keepOnlyOneCategoryFilter(filterText) {
    const filtersToKeep = filters.filter(
      (filter) =>
        !(
          filter.startsWith("Men") ||
          filter.startsWith("Women") ||
          filter.startsWith("Unisex")
        )
    );

    setFilters([...filtersToKeep, filterText]);
  }

  function controlFilter(event) {
    const button = event.target;
    const filterText = `${gender} ${button.textContent}`;
    if (filters.includes(filterText)) {
      removeFilter(filterText);
    } else {
      keepOnlyOneCategoryFilter(filterText);
    }
  }

  return (
    <div className="font-secondary gap-1 flex flex-col items-start rounded-sm text-sm py-3 px-1">
      {categoryMap[gender].map((category) => {
        const isSelected = filters.includes(`${gender} ${category}`);

        return (
          <button
            key={category}
            className={`hover:bg-gray-300 border border-white text-slate-50 font-semibold w-full py-1 text-start ${
              isSelected && "scale-105 hover:bg-gray-500 bg-gray-500"
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
>>>>>>> a825e4238c2a4c9321a49a838ffbc4a811f5bedb
