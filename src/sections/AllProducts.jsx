import ProductCard from "../components/ProductCard";
import { clothes } from "../constants/clothes";
// import { filters } from "../constants/filters";

function AllProducts({
  refreshProductsInTooltip,
  filters,
  removeFilter,
  setFilters,
}) {
  const productElements = clothes.map((clothe) => {
    return (
      <div className="p-5">
        <ProductCard
          key={clothe.id}
          id={clothe.id}
          image={clothe.image}
          name={clothe.name}
          rating={clothe.rating}
          isFavorite={clothe.isFavorite}
          priceCents={clothe.priceCents}
          refreshProductsInTooltip={refreshProductsInTooltip}
        />
      </div>
    );
  });

  const filtersOfUserElements = filters.map((filter) => (
    <div
      key={filter}
      className="bg-accent px-5 py-1 rounded-full w-fit text-center whitespace-nowrap relative font-secondary text-white"
    >
      {filter}
      <button className="bg-slate-50 p-0.5 w-6 rounded-full shadow-md absolute -top-3 -right-2">
        <img
          src="src/assets/icons/accent-cancel-icon.svg"
          alt="cancel-icon"
          onClick={(event) => {
            const button = event.target.parentElement;
            removeFilter(button.parentElement.textContent);
          }}
        />
      </button>
    </div>
  ));

  return (
    <div className="bg-white mt-20 ml-3 mr-72 md:lg:ml-10 lg:ml-20 rounded-md shadow-md w-[60%]">
      {filters.length > 0 && (
        <div className="ml-5 flex overflow-x-auto md:flex-wrap gap-3 p-5 w-[95%]">
          {filtersOfUserElements}
          {filters.length >= 2 && (
            <button
              className="bg-accent py-1 px-4 rounded-full w-fit text-center whitespace-nowrap relative font-secondary text-white flex flex-between max-md:pr-10"
              onClick={() => {
                setFilters([]);
              }}
            >
              <img
                src="src/assets/icons/delete.svg"
                alt="Delete Icon"
                className=""
              />
              Clear all
            </button>
          )}
        </div>
      )}

      <div className="flex flex-wrap gap-3 justify-center">
        {productElements}
      </div>
    </div>
  );
}

export default AllProducts;
