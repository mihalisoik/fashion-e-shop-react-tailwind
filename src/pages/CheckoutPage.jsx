import Navbar from "../sections/Navbar";

function CheckoutPage({
  renderAddedTooltip,
  renderRemovedTooltip,
  renderTotalQuantity,
  renderTotalCostCents,
  setRenderTotalCostCents,
}) {
  return (
    <div>
      <Navbar
        isHomepage={false}
        renderAddedTooltip={renderAddedTooltip}
        renderRemovedTooltip={renderRemovedTooltip}
        renderTotalQuantity={renderTotalQuantity}
        renderTotalCostCents={renderTotalCostCents}
      />
    </div>
  );
}

export default CheckoutPage;
