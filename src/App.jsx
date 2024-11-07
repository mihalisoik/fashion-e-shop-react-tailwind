import CustomerReviews from "./sections/CustomerReviews";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Nav from "./sections/Nav";
import Newsletter from "./sections/Newsletter";
import PopularItems from "./sections/PopularItems";

export default function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <PopularItems />
      <CustomerReviews />
      <Newsletter />
      <Footer />
    </div>
  )
}