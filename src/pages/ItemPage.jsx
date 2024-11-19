import Navbar from "../sections/Navbar";
import ViewItem from "../sections/ViewItem";
import { useLocation } from "react-router-dom";

function ItemPage({
  renderAddedTooltip,
  renderRemovedTooltip,
  renderTotalQuantity,
  setRenderTotalQuantity,
  animatedAddedTooltip,
  animatedRemovedTooltip,
}) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");

  return (
    <div>
      <Navbar
        isHomepage={false}
        renderAddedTooltip={renderAddedTooltip}
        renderRemovedTooltip={renderRemovedTooltip}
        renderTotalQuantity={renderTotalQuantity}
      />
      <div className="max-container p-3">
        <ViewItem
          id={id}
          setRenderTotalQuantity={setRenderTotalQuantity}
          animatedAddedTooltip={animatedAddedTooltip}
          animatedRemovedTooltip={animatedRemovedTooltip}
        />
      </div>
    </div>
  );
}

export default ItemPage;
