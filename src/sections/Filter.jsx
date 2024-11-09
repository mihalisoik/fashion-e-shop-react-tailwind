import PriceFilter from "../components/PriceFilter";
import ColorFilter from "../components/ColorFilter";
import CategoryFilter from "../components/CategoryFilter";

function FilterSection() {
  return (
    <div className="mt-30 h-[100vh] w-60 fixed right-0 lg:w-96 border-l-[1px] border-black bg-white flex flex-col pt-24 gap-5 pl-5 overflow-y-auto">
      <h3 className="text-center font-primary font-bold underline">Men</h3>
      <CategoryFilter gender={"male"} />
      <h3 className="text-center font-primary font-bold underline">Women</h3>
      <CategoryFilter gender={"female"} />
      <h3 className="text-center font-primary font-bold underline">Unisex</h3>
      <CategoryFilter gender={"unisex"} />
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

export default FilterSection;
