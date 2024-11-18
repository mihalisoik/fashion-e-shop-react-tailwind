import ProductCard from "../components/ProductCard";
import { clothes } from "../constants/clothes";

function AllProducts({
  animatedAddedTooltip,
  animatedRemovedTooltip,
  setRenderTotalQuantity,
  filters,
  removeFilter,
  setRenderFilterSection,
}) {
  function removeDuplicates(clothesArray) {
    const seenIds = new Set();
    return clothesArray.filter((item) => {
      if (seenIds.has(item.id)) {
        return false;
      } else {
        seenIds.add(item.id);
        return true;
      }
    });
  }

  let filteredArray = filters.some((filter) => filter.startsWith("Color:"))
    ? []
    : [...clothes];

  if (filters.length > 0) {
    filters.forEach((filter) => {
      if (filter.startsWith("Color:")) {
        const selectedColor = filter.split(":")[1].trim();
        clothes.forEach((clothe) => {
          if (clothe.color.includes(selectedColor)) {
            filteredArray.push(clothe);
          }
        });
      }
    });

    filters.forEach((filter) => {
      if (
        filter.startsWith("Men") ||
        filter.startsWith("Women") ||
        filter.startsWith("Unisex")
      ) {
        const [gender, category] = filter.split(" ");
        filteredArray = filteredArray.filter(
          (clothe) => clothe.gender === gender && clothe.category === category
        );
      }
    });
    filters.forEach((filter) => {
      if (filter.includes("€")) {
        filteredArray = filteredArray.filter((clothe) => {
          if (filter === "0-30€") {
            return clothe.priceCents <= 3000;
          } else if (filter === "€30-€60") {
            return clothe.priceCents > 3000 && clothe.priceCents <= 6000;
          } else if (filter === "€60-€100") {
            return clothe.priceCents > 6000 && clothe.priceCents <= 10000;
          } else if (filter === "€100+") {
            return clothe.priceCents > 10000;
          }
        });
      }
    });

    filteredArray = removeDuplicates(filteredArray);
  }

  const productElements = filteredArray.map((clothe) => {
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
          setRenderTotalQuantity={setRenderTotalQuantity}
          animatedAddedTooltip={animatedAddedTooltip}
          animatedRemovedTooltip={animatedRemovedTooltip}
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
    <div className="bg-white mt-20 ml-3 mr-72 md:lg:ml-10 lg:ml-20 rounded-md shadow-md md:w-[60%] w-full relative overflow-hidden">
      <div className="flex md:hidden mb-14">
        <div className="absolute top-5 right-5">
          <button
            className="bg-accent p-1 rounded-md"
            onClick={() => {
              setRenderFilterSection((oldValue) => !oldValue);
            }}
          >
            <img src="src/assets/icons/open-filter.svg" alt="Open Filter" />
          </button>
        </div>
      </div>
      <p className="text-xs ml-4 mt-4 tracking-tighter text-gray-600 bg-slate-100 py-2 px-4 inline-block rounded-full">
        <span className="font-bold">{filteredArray.length}</span> results
      </p>
      {filters.length > 0 && (
        <div className="ml-5 flex overflow-x-auto md:flex-wrap gap-3 p-5 w-[95%]">
          {filtersOfUserElements}
        </div>
      )}

      {filteredArray.length > 0 ? (
        <div className="flex flex-wrap gap-3 justify-center">
          {productElements}
        </div>
      ) : (
        <p className="text-center text-gray-700">
          Apologies, but no products match your selected filters.
        </p>
      )}
    </div>
  );
}

export default AllProducts;
