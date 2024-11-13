import PriceFilter from "../components/PriceFilter";
import ColorFilter from "../components/ColorFilter";
import CategoryFilter from "../components/CategoryFilter";
import { useState } from "react";
// import { addFilter } from "../constants/filters";

function Filter({ addFilter, removeFilter, refreshFilters, filters }) {
  const [hoveredGender, setHoveredGender] = useState("");

  function handleMouseEnter(gender) {
    setHoveredGender(gender);
  }

  function handleMouseLeave() {
    setHoveredGender("");
  }

  function isTooltipVisible(gender) {
    return hoveredGender === gender;
  }

  return (
    <div className="mt-30 h-[100vh] w-60 fixed top-0 right-0 lg:w-96 border-l-[1px] border-gray-400 bg-slate-50 flex flex-col pt-24 gap-5 pl-5 overflow-visible">
      {["Men", "Women", "Unisex"].map((gender) => (
        <div className="flex flex-col items-center">
          <div
            key={gender}
            className="group text-center font-primary font-bold border border-gray-100 rounded-lg cursor-pointer shadow-md text-white bg-slate-900 relative w-48 py-1"
            onMouseEnter={() => handleMouseEnter(gender)}
            onMouseLeave={handleMouseLeave}
          >
            <h3 className="text-lg">{gender}</h3>
            {isTooltipVisible(gender) && (
              <div className="transition-opacity duration-200 absolute top-0 -left-80 bg-gray-400/80 rounded-sm shadow-md z-10 w-80 px-5 py-1">
                <CategoryFilter
                  gender={gender}
                  addFilter={addFilter}
                  removeFilter={removeFilter}
                  filters={filters}
                />
              </div>
            )}
          </div>
        </div>
      ))}

      <PriceFilter addFilter={addFilter} removeFilter={removeFilter} />
      <ColorFilter />
      <div className="flex flex-col lg:flex-row max-md:mr-4 gap-3 mt-4 justify-evenly mb-5">
        <button className="main-button main-button-hover">Apply</button>
        <button className="main-button text-accent bg-slate-50 hover:scale-105 hover:shadow-xl hover:bg-white">
          Reset
        </button>
      </div>
    </div>
  );
}

export default Filter;
