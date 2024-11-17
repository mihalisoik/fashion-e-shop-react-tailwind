import { useState } from "react";
import AllProducts from "../sections/AllProducts";
import Filter from "../sections/Filter";
import Navbar from "../sections/Navbar";
import { totalQuantity } from "../constants/cart";

function OrderPage() {
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

  const [filters, setFilters] = useState([]);

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

export default OrderPage;
