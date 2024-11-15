import ProductCard from "../components/ProductCard";
import { clothes } from "../constants/clothes";
// import { filters } from "../constants/filters";

function AllProducts({ refreshProductsInTooltip, filters }) {
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
      className="bg-accent px-5 py-1 rounded-full w-fit text-center whitespace-nowrap relative font-secondary"
    >
      {filter}
      <button className="bg-slate-50 p-0.5 w-6 rounded-full shadow-md absolute -top-3 -right-2">
        <img
          src="src/assets/icons/accent-cancel-icon.svg"
          alt="cancel-icon"
          onClick={(event) => {
            const button = event.target.parentElement;
            controlFilters(button.parentElement.textContent);
          }}
        />
      </button>
    </div>
  ));

  return (
    <div className="bg-white mt-20 ml-3 mr-72 md:lg:ml-10 lg:ml-20 rounded-md shadow-md w-fit">
      {filters.length > 0 && (
        <div className="ml-5 flex gap-3 p-5">{filtersOfUserElements}</div>
      )}
      <div className="flex flex-grow flex-wrap gap-3">{productElements}</div>
    </div>
  );
}

export default AllProducts;
