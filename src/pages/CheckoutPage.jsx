import Navbar from "../sections/Navbar";
import OrderSummary from "../sections/OrderSummary";
import PaymentSummary from "../sections/PaymentSummary";
import { cart } from "../constants/cart";

function CheckoutPage({
  renderAddedTooltip,
  renderRemovedTooltip,
  renderTotalQuantity,
  animatedAddedTooltip,
  animatedRemovedTooltip,
  setRenderTotalQuantity,
}) {
  return (
    <div>
      <Navbar
        isHomepage={false}
        renderAddedTooltip={renderAddedTooltip}
        renderRemovedTooltip={renderRemovedTooltip}
        renderTotalQuantity={renderTotalQuantity}
      />
      <div className="max-container mx-auto w-full min-h-screen bg-white py-10 shadow-xl mt-20 px-10">
        <OrderSummary
          animatedAddedTooltip={animatedAddedTooltip}
          animatedRemovedTooltip={animatedRemovedTooltip}
          setRenderTotalQuantity={setRenderTotalQuantity}
        />
        {cart.length > 0 && <PaymentSummary />}
      </div>
    </div>
  );
}

export default CheckoutPage;
