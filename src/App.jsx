import CustomerReviews from "./sections/CustomerReviews";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Newsletter from "./sections/Newsletter";
import PopularItems from "./sections/PopularItems";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <PopularItems />
      <CustomerReviews />
      <Newsletter />
      <Footer />
    </div>
  )
}