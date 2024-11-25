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
    </div>
  );
}

export default CheckoutPage;
