import { useState } from "react";
import AllProducts from "../sections/AllProducts";
import Filter from "../sections/Filter";
import Navbar from "../sections/Navbar";
import { filters } from "../constants/filters";

function OrderPage() {
  const [renderTooltip, setRenderTooltip] = useState(false);

  function refreshProductsInTooltip() {
    setRenderTooltip((oldValue) => !oldValue);
  }

  const [renderFilters, setRenderFilters] = useState(filters);

  function refreshRenderFilters() {
    setRenderFilters(filters);
  }

  return (
    <div>
      <Navbar isHomepage={false} />
      <Filter />
      <AllProducts refreshProductsInTooltip={refreshProductsInTooltip} />
    </div>
  );
}

export default OrderPage;
