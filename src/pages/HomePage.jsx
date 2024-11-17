import Navbar from "../sections/Navbar";
import Hero from "../sections/Hero";
import PopularProducts from "../sections/PopularProducts";
import CustomerReviews from "../sections/CustomerReviews";
import Newsletter from "../sections/Newsletter";
import Footer from "../sections/Footer";
import { useState } from "react";
import { totalQuantity } from "../constants/cart";

function HomePage({ setFilters }) {
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

  return (
    <div>
      <Navbar
        isHomepage={true}
        renderAddedTooltip={renderAddedTooltip}
        renderRemovedTooltip={renderRemovedTooltip}
        renderTotalQuantity={renderTotalQuantity}
      />
      <Hero />
      <PopularProducts
        animatedAddedTooltip={animatedAddedTooltip}
        animatedRemovedTooltip={animatedRemovedTooltip}
        setRenderTotalQuantity={setRenderTotalQuantity}
      />
      <CustomerReviews />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default HomePage;
