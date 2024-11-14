import { useState } from "react";
import AllProducts from "../sections/AllProducts";
import Filter from "../sections/Filter";
import Navbar from "../sections/Navbar";

function OrderPage() {
  const [renderTooltip, setRenderTooltip] = useState(false);

  function refreshProductsInTooltip() {
    setRenderTooltip((oldValue) => !oldValue);
  }

  const [filters, setFilters] = useState([]);

  function addFilter(filter) {
    if (!filters.includes(filter)) {
      setFilters([...filters, filter]);
      console.log(filters);
    }
  }

  function removeFilter(filter) {
    setFilters(filters.filter((f) => f !== filter));
    console.log(filters);
  }

  return (
    <div>
      <Navbar isHomepage={false} />
      <Filter
        addFilter={addFilter}
        removeFilter={removeFilter}
        filters={filters}
        setFilters={setFilters}
      />
      <AllProducts refreshProductsInTooltip={refreshProductsInTooltip} />
    </div>
  );
}

export default OrderPage;
