import { useState } from "react";
import CustomerReviews from "./sections/CustomerReviews";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Newsletter from "./sections/Newsletter";
import PopularItems from "./sections/PopularItems";

export default function App() {

  const [renderTooltip,setRenderTooltip] = useState(false)

  function refreshProductsInTooltip() {
    setRenderTooltip(oldValue => !oldValue)
  }

  return (
    <div>
      <Navbar />
      <Hero />
      <PopularItems refreshProductsInTooltip={refreshProductsInTooltip}/>
      <CustomerReviews />
      <Newsletter />
      <Footer />
    </div>
  )
}