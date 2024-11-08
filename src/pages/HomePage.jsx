import Navbar from "../sections/Navbar";
import Hero from "../sections/Hero";
import PopularItems from "../sections/PopularProducts";
import CustomerReviews from "../sections/CustomerReviews";
import Newsletter from "../sections/Newsletter";
import Footer from "../sections/Footer";
import { useState } from "react";

function HomePage() {
  const [renderTooltip, setRenderTooltip] = useState(false);

  function refreshProductsInTooltip() {
    setRenderTooltip((oldValue) => !oldValue);
  }

  return (
    <div>
      <Navbar isHomepage={true} />
      <Hero />
      <PopularItems refreshProductsInTooltip={refreshProductsInTooltip} />
      <CustomerReviews />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default HomePage;
