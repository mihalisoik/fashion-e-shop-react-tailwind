import PriceFilter from "../components/PriceFilter";
import ColorFilter from "../components/ColorFilter";

function FilterSection() {
  return (
    <div className="mt-30 fixed top-0 bottom-0 right-0 w-60 lg:w-80 border-l-[1px] border-black bg-white flex flex-col pt-24 gap-5 pl-5 overflow-y-auto">
      <PriceFilter />
      <ColorFilter />
      <div className="flex flex-col lg:flex-row max-md:mr-4 gap-3 mt-4">
        <button className="main-button main-button-hover">Apply</button>
        <button className="main-button text-accent bg-slate-50 hover:scale-105 hover:shadow-xl hover:bg-white">
          Reset
        </button>
      </div>
    </div>
  );
}

export default FilterSection;
