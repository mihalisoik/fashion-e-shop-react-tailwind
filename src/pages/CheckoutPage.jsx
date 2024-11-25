import CheckoutList from "../sections/CheckoutList";
import Navbar from "../sections/Navbar";

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
        <CheckoutList />
      </div>
    </div>
  );
}

export default CheckoutPage;
