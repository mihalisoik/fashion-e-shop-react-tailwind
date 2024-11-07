import { useState } from "react";
import CustomerReviews from "./sections/CustomerReviews";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Newsletter from "./sections/Newsletter";
import PopularItems from "./sections/PopularItems";

export default function App() {

  const [renderTooltip,setRenderTooltip] = useState(false)

  function animatedTooltip() {
    setRenderTooltip(true)
    setTimeout(()=>{
      setRenderTooltip(false)
    },2500)
  }

  return (
    <div>
      <Navbar renderTooltip={renderTooltip}/>
      <Hero />
      <PopularItems />
      <CustomerReviews />
      <Newsletter />
      <Footer />
    </div>
  )
}