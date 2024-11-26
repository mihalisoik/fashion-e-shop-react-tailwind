import Navbar from "../sections/Navbar";
import OrderSummary from "../sections/OrderSummary";

function CheckoutPage({
  renderAddedTooltip,
  renderRemovedTooltip,
  renderTotalQuantity,
}) {
  return (
    <div>
      <Navbar
        isHomepage={false}
        renderAddedTooltip={renderAddedTooltip}
        renderRemovedTooltip={renderRemovedTooltip}
        renderTotalQuantity={renderTotalQuantity}
      />
      <div className="px-20">
        <OrderSummary />
      </div>
    </div>
  );
}

export default CheckoutPage;
