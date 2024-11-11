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

  function controlFilters(filter) {
    if (!filters.includes(filter)) {
      setFilters([...filters, filter]);
    } else {
      setFilters(filters.filter((f) => f !== filter));
    }
    console.log(filters);
  }

  function refreshFilters() {
    setFilters([]);
  }

  return (
    <div>
      <Navbar isHomepage={false} />
      <Filter controlFilters={controlFilters} refreshFilters={refreshFilters} />
      <AllProducts
        refreshProductsInTooltip={refreshProductsInTooltip}
        filters={filters}
        controlFilters={controlFilters}
      />
    </div>
  );
}

export default OrderPage;
