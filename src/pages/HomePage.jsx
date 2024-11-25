import Navbar from "../sections/Navbar";
import Hero from "../sections/Hero";
import PopularProducts from "../sections/PopularProducts";
import CustomerReviews from "../sections/CustomerReviews";
import Newsletter from "../sections/Newsletter";
import Footer from "../sections/Footer";

function HomePage({
  renderAddedTooltip,
  renderRemovedTooltip,
  renderTotalQuantity,
  renderTotalCostCents,
  animatedAddedTooltip,
  animatedRemovedTooltip,
  setRenderTotalQuantity,
  setRenderTotalCostCents,
}) {
  return (
    <div>
      <Navbar
        isHomepage={true}
        renderAddedTooltip={renderAddedTooltip}
        renderRemovedTooltip={renderRemovedTooltip}
        renderTotalQuantity={renderTotalQuantity}
        renderTotalCostCents={renderTotalCostCents}
      />
      <Hero />
      <PopularProducts
        animatedAddedTooltip={animatedAddedTooltip}
        animatedRemovedTooltip={animatedRemovedTooltip}
        setRenderTotalQuantity={setRenderTotalQuantity}
        setRenderTotalCostCents={setRenderTotalCostCents}
      />
      <CustomerReviews />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default HomePage;
