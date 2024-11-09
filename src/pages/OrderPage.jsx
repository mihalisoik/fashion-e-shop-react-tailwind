import AllProducts from "../sections/AllProducts";
import FilterSection from "../sections/Filter";
import Navbar from "../sections/Navbar";

function OrderPage() {
  return (
    <div>
      <Navbar isHomepage={false} />
      <FilterSection />
      <AllProducts />
    </div>
  );
}

export default OrderPage;
