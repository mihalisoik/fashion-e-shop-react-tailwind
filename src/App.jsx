import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ItemPage from "./pages/ItemPage";
import { useState } from "react";
import { totalQuantity } from "./constants/cart";
import CheckoutPage from "./pages/CheckoutPage";

export default function App() {
  const [renderTotalQuantity, setRenderTotalQuantity] = useState(totalQuantity);
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

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              renderAddedTooltip={renderAddedTooltip}
              renderRemovedTooltip={renderRemovedTooltip}
              renderTotalQuantity={renderTotalQuantity}
              animatedAddedTooltip={animatedAddedTooltip}
              animatedRemovedTooltip={animatedRemovedTooltip}
              setRenderTotalQuantity={setRenderTotalQuantity}
            />
          }
        />
        <Route
          path="/products"
          element={
            <ProductsPage
              renderAddedTooltip={renderAddedTooltip}
              renderRemovedTooltip={renderRemovedTooltip}
              renderTotalQuantity={renderTotalQuantity}
              animatedAddedTooltip={animatedAddedTooltip}
              animatedRemovedTooltip={animatedRemovedTooltip}
              setRenderTotalQuantity={setRenderTotalQuantity}
            />
          }
        />
        <Route
          path="/item"
          element={
            <ItemPage
              renderAddedTooltip={renderAddedTooltip}
              renderRemovedTooltip={renderRemovedTooltip}
              renderTotalQuantity={renderTotalQuantity}
              animatedAddedTooltip={animatedAddedTooltip}
              animatedRemovedTooltip={animatedRemovedTooltip}
              setRenderTotalQuantity={setRenderTotalQuantity}
            />
          }
        />
        <Route
          path="/checkout"
          element={
            <CheckoutPage
              renderAddedTooltip={renderAddedTooltip}
              renderRemovedTooltip={renderRemovedTooltip}
              renderTotalQuantity={renderTotalQuantity}
              animatedAddedTooltip={animatedAddedTooltip}
              animatedRemovedTooltip={animatedRemovedTooltip}
              setRenderTotalQuantity={setRenderTotalQuantity}
            />
          }
        />
      </Routes>
    </Router>
  );
}
