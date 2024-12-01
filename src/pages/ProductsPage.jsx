<<<<<<< HEAD
import { useEffect, useState } from "react";
import AllProducts from "../sections/AllProducts";
import Filter from "../sections/Filter";
import Navbar from "../sections/Navbar";
import { useLocation } from "react-router-dom";

function ProductsPage({
  renderAddedTooltip,
  renderRemovedTooltip,
  renderTotalQuantity,

  animatedAddedTooltip,
  animatedRemovedTooltip,
  setRenderTotalQuantity,
}) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const subcategory = queryParams.get("subcategory");
  const gender = queryParams.get("gender");

  const [filters, setFilters] = useState([]);

  useEffect(() => {
    if (subcategory && gender) {
      setFilters([`${gender} ${subcategory}`]);
    }
  }, [subcategory, gender]);

  function addFilter(filter) {
    if (!filters.includes(filter)) {
      setFilters([...filters, filter]);
    }
  }

  function removeFilter(filter) {
    setFilters(filters.filter((f) => f !== filter));
  }

  const [renderFilterSection, setRenderFilterSection] = useState(false);

  return (
    <div>
      <Navbar
        isHomepage={false}
        renderAddedTooltip={renderAddedTooltip}
        renderRemovedTooltip={renderRemovedTooltip}
        renderTotalQuantity={renderTotalQuantity}
      />
      <Filter
        addFilter={addFilter}
        removeFilter={removeFilter}
        filters={filters}
        setFilters={setFilters}
        renderFilterSection={renderFilterSection}
        setRenderFilterSection={setRenderFilterSection}
      />
      <div className="max-container">
        <AllProducts
          animatedAddedTooltip={animatedAddedTooltip}
          animatedRemovedTooltip={animatedRemovedTooltip}
          setRenderTotalQuantity={setRenderTotalQuantity}
          filters={filters}
          removeFilter={removeFilter}
          setRenderFilterSection={setRenderFilterSection}
        />
      </div>
    </div>
  );
}

export default ProductsPage;
=======
import { useEffect, useState } from "react";
import AllProducts from "../sections/AllProducts";
import Filter from "../sections/Filter";
import Navbar from "../sections/Navbar";
import { useLocation } from "react-router-dom";

function ProductsPage({
  renderAddedTooltip,
  renderRemovedTooltip,
  renderTotalQuantity,

  animatedAddedTooltip,
  animatedRemovedTooltip,
  setRenderTotalQuantity,
}) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const subcategory = queryParams.get("subcategory");
  const gender = queryParams.get("gender");

  const [filters, setFilters] = useState([]);

  useEffect(() => {
    if (subcategory && gender) {
      setFilters([`${gender} ${subcategory}`]);
    }
  }, [subcategory, gender]);

  function addFilter(filter) {
    if (!filters.includes(filter)) {
      setFilters([...filters, filter]);
    }
  }

  function removeFilter(filter) {
    setFilters(filters.filter((f) => f !== filter));
  }

  const [renderFilterSection, setRenderFilterSection] = useState(false);

  return (
    <div>
      <Navbar
        isHomepage={false}
        renderAddedTooltip={renderAddedTooltip}
        renderRemovedTooltip={renderRemovedTooltip}
        renderTotalQuantity={renderTotalQuantity}
      />
      <Filter
        addFilter={addFilter}
        removeFilter={removeFilter}
        filters={filters}
        setFilters={setFilters}
        renderFilterSection={renderFilterSection}
        setRenderFilterSection={setRenderFilterSection}
      />
      <div className="max-container">
        <AllProducts
          animatedAddedTooltip={animatedAddedTooltip}
          animatedRemovedTooltip={animatedRemovedTooltip}
          setRenderTotalQuantity={setRenderTotalQuantity}
          filters={filters}
          removeFilter={removeFilter}
          setRenderFilterSection={setRenderFilterSection}
        />
      </div>
    </div>
  );
}

export default ProductsPage;
>>>>>>> a825e4238c2a4c9321a49a838ffbc4a811f5bedb
