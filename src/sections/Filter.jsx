import PriceFilter from "../components/PriceFilter";
import ColorFilter from "../components/ColorFilter";
import CategoryFilter from "../components/CategoryFilter";
import { useState } from "react";

function Filter({
  addFilter,
  removeFilter,
  filters,
  setFilters,
  renderFilterSection,
  setRenderFilterSection,
}) {
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
    <div
      className={`mt-30 h-[100vh] fixed top-0 right-0 md:w-80 border-l-[1px] border-gray-400 bg-slate-50 md:flex flex-col pt-24 gap-5 pl-5 md:overflow-visible overflow-y-auto w-full z-20 ${
        renderFilterSection ? "" : "hidden"
      }`}
    >
      <button className="flex text-xs text-text-color ml-auto mr-2 items-center bg-gray-200 w-fit shadow-lg px-1 py-1 rounded-full -mt-5 mb-5 md:hidden">
        <img
          src="src/assets/icons/grey-cancel-icon.svg"
          alt="Close Filters"
          width={22}
          onClick={() => {
            setRenderFilterSection((oldValue) => !oldValue);
            setFilters([]);
          }}
        />
      </button>
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
              <div className="transition-opacity duration-200 absolute md:top-0 md:-left-80 top-9 -left-16 bg-gray-400/80 rounded-sm shadow-md z-10 w-80 px-5 py-1">
                <CategoryFilter
                  gender={gender}
                  filters={filters}
                  setFilters={setFilters}
                  removeFilter={removeFilter}
                />
              </div>
            )}
          </div>
        </div>
      ))}

      <PriceFilter filters={filters} setFilters={setFilters} />
      <ColorFilter
        filters={filters}
        addFilter={addFilter}
        removeFilter={removeFilter}
      />
      <div className="flex flex-col items-center max-md:mr-4 gap-3 mt-4 justify-evenly mb-5">
        <button
          className="main-button main-button-hover w-fit px-20 md:hidden"
          onClick={() => {
            setRenderFilterSection((oldValue) => !oldValue);
          }}
        >
          Apply
        </button>
        <button
          className="main-button text-accent bg-slate-50 hover:scale-105 hover:shadow-xl hover:bg-white w-fit px-20"
          onClick={() => {
            setFilters([]);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Filter;
