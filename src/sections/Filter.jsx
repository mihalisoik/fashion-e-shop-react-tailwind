import PriceFilter from "../components/PriceFilter";
import ColorFilter from "../components/ColorFilter";
import CategoryFilter from "../components/CategoryFilter";
// import { addFilter } from "../constants/filters";

function Filter({ controlFilters, refreshFilters }) {
  return (
    <div className="mt-30 h-[100vh] w-60 fixed top-0 right-0 lg:w-96 border-l-[1px] border-black bg-white flex flex-col pt-24 gap-5 pl-5 overflow-y-auto">
      <h3
        className="text-center font-primary font-bold border border-black rounded-sm hover:bg-gray-400 cursor-pointer"
        onClick={() => {
          controlFilters("Men");
        }}
      >
        Men
      </h3>
      <CategoryFilter gender={"Men"} controlFilters={controlFilters} />

      <h3
        className="text-center font-primary font-bold border border-black rounded-sm hover:bg-gray-400 cursor-pointer"
        onClick={() => {
          controlFilters("Women");
        }}
      >
        Women
      </h3>
      <CategoryFilter gender={"Women"} controlFilters={controlFilters} />

      <h3
        className="text-center font-primary font-bold border border-black rounded-sm hover:bg-gray-400 cursor-pointer"
        onClick={() => {
          controlFilters("Unisex");
        }}
      >
        Unisex
      </h3>
      <CategoryFilter gender={"Unisex"} controlFilters={controlFilters} />

      <PriceFilter />
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
