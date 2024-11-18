import { useEffect, useState } from "react";
import AllProducts from "../sections/AllProducts";
import Filter from "../sections/Filter";
import Navbar from "../sections/Navbar";
import { totalQuantity } from "../constants/cart";
import { useLocation } from "react-router-dom";

function ProductsPage() {
  const [renderAddedTooltip, setRenderAddedTooltip] = useState(false);
  const [renderRemovedTooltip, setRenderRemovedTooltip] = useState(false);

  let timeoutAddedId;

  function animatedAddedTooltip() {
    if (timeoutAddedId) {
      clearTimeout(timeoutAddedId);
    }

    setRenderAddedTooltip(false);

    setTimeout(() => {
      setRenderAddedTooltip(true);
      timeoutAddedId = setTimeout(() => {
        setRenderAddedTooltip(false);
      }, 2100);
    }, 0);
  }

  let timeoutRemovedId;

  function animatedRemovedTooltip() {
    if (timeoutRemovedId) {
      clearTimeout(timeoutRemovedId);
    }

    setRenderRemovedTooltip(false);

    setTimeout(() => {
      setRenderRemovedTooltip(true);
      timeoutRemovedId = setTimeout(() => {
        setRenderRemovedTooltip(false);
      }, 2100);
    }, 0);
  }

  const [renderTotalQuantity, setRenderTotalQuantity] = useState(totalQuantity);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const subcategory = queryParams.get("subcategory");
  const gender = queryParams.get("gender");

  const [filters, setFilters] = useState([]);

  useEffect(() => {
    if (subcategory && gender) {
      setFilters([`${gender} ${subcategory}`]);
    }
  }, [subcategory, gender]);

  function addFilter(filter) {
    if (!filters.includes(filter)) {
      setFilters([...filters, filter]);
    }
  }

  function removeFilter(filter) {
    setFilters(filters.filter((f) => f !== filter));
  }

  const [renderFilterSection, setRenderFilterSection] = useState(false);

  return (
    <div>
      <Navbar
        isHomepage={false}
        renderAddedTooltip={renderAddedTooltip}
        renderRemovedTooltip={renderRemovedTooltip}
        renderTotalQuantity={renderTotalQuantity}
      />
      <Filter
        addFilter={addFilter}
        removeFilter={removeFilter}
        filters={filters}
        setFilters={setFilters}
        renderFilterSection={renderFilterSection}
        setRenderFilterSection={setRenderFilterSection}
      />
      <AllProducts
        animatedAddedTooltip={animatedAddedTooltip}
        animatedRemovedTooltip={animatedRemovedTooltip}
        setRenderTotalQuantity={setRenderTotalQuantity}
        filters={filters}
        removeFilter={removeFilter}
        setRenderFilterSection={setRenderFilterSection}
      />
    </div>
  );
}

export default ProductsPage;
