import FilterSection from "../sections/FilterSection";
import Navbar from "../sections/Navbar";

function OrderPage() {
  return (
    <div>
      <Navbar isHomepage={false} />
      <FilterSection />
    </div>
  );
}

export default OrderPage;
