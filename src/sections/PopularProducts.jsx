import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { clothes } from "../constants/clothes";

function PopularProducts({
  animatedAddedTooltip,
  setRenderTotalQuantity,
  animatedRemovedTooltip,
  setRenderTotalCostCents,
}) {
  const popularClothes = clothes.filter((clothe) => clothe.rating.stars >= 4);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  const totalPages = Math.ceil(popularClothes.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToDisplay = popularClothes.slice(startIndex, endIndex);

  const popularItemsElements = itemsToDisplay.map((clothe) => (
    <ProductCard
      key={clothe.id}
      id={clothe.id}
      image={clothe.image}
      name={clothe.name}
      rating={clothe.rating}
      isFavorite={clothe.isFavorite}
      priceCents={clothe.priceCents}
      stock={clothe.stock}
      setRenderTotalQuantity={setRenderTotalQuantity}
      animatedAddedTooltip={animatedAddedTooltip}
      animatedRemovedTooltip={animatedRemovedTooltip}
      setRenderTotalCostCents={setRenderTotalCostCents}
    />
  ));

  useEffect(() => {
    function updateItemsPerPage() {
      const width = window.innerWidth;

      if (width < 550) {
        setItemsPerPage(1);
      } else if (width < 800) {
        setItemsPerPage(2);
      } else if (width < 1050) {
        setItemsPerPage(3);
      } else if (width < 1250) {
        setItemsPerPage(4);
      } else {
        setItemsPerPage(5);
      }
    }

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, []);

  function handleDotClick(page) {
    setCurrentPage(page);
  }

  return (
    <section
      id="popular-products"
      className="bg-white py-20 mt-10 w-full shadow-lg"
    >
      <div className="max-container mt-10 w-full py-4 px-10 flex flex-1 flex-col justify-center items-start gap-6 font-primary">
        <div className="text-3xl tracking-wide">
          Our{" "}
          <span className="text-accent font-semibold tracking-wider">
            Popular
          </span>{" "}
          Products
        </div>
        <div className="flex gap-7 justify-center w-full overflow-x-auto">
          {popularItemsElements}
        </div>
        <div className="flex justify-center items-center w-full mt-6 gap-2">
          {[...Array(totalPages)].map((_, index) => (
            <img
              key={index}
              src={
                index + 1 === currentPage
                  ? "src/assets/icons/dot-filled.svg"
                  : "src/assets/icons/dot-empty.svg"
              }
              alt={`Page ${index + 1}`}
              className={`cursor-pointer w-4 h-4 ${
                index + 1 === currentPage ? "opacity-100" : "opacity-50"
              }`}
              onClick={() => handleDotClick(index + 1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularProducts;
