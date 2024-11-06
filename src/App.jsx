import CustomerReviews from "./sections/CustomerReviews";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Nav from "./sections/Nav";
import PopularItems from "./sections/PopularItems";

export default function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <PopularItems />
      <CustomerReviews />
      <Footer />
    </div>
  )
}