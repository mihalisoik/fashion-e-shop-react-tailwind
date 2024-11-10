import { useState } from "react";
import AllProducts from "../sections/AllProducts";
import FilterSection from "../sections/Filter";
import Navbar from "../sections/Navbar";

function OrderPage() {
  const [renderTooltip, setRenderTooltip] = useState(false);

  function refreshProductsInTooltip() {
    setRenderTooltip((oldValue) => !oldValue);
  }

  return (
    <div>
      <Navbar isHomepage={false} />
      <FilterSection />
      <AllProducts refreshProductsInTooltip={refreshProductsInTooltip} />
    </div>
  );
}

export default OrderPage;
