<<<<<<< HEAD
function PriceFilter({ filters, setFilters }) {
  function handlePriceChange(event) {
    const selectedRangePrice = event.target.value;
    const filtersToKeep = filters.filter((f) => !f.includes("€"));
    setFilters([...filtersToKeep, selectedRangePrice]);
  }

  return (
    <div className="flex flex-col ">
      <h3 className="mb-2 font-bold">Price</h3>
      <label className="flex items-center">
        <input
          type="radio"
          name="price"
          value="0-30€"
          className="mr-2"
          onChange={handlePriceChange}
          checked={filters.includes("0-30€")}
        />
        0 - €30
      </label>
      <label className="flex items-center">
        <input
          type="radio"
          name="price"
          value="€30-€60"
          className="mr-2"
          onChange={handlePriceChange}
          checked={filters.includes("€30-€60")}
        />
        €30 - €60
      </label>
      <label className="flex items-center">
        <input
          type="radio"
          name="price"
          value="€60-€100"
          class="mr-2"
          onChange={handlePriceChange}
          checked={filters.includes("€60-€100")}
        />
        €60 - €100
      </label>
      <label className="flex items-center">
        <input
          type="radio"
          name="price"
          value="€100+"
          className="mr-2"
          onChange={handlePriceChange}
          checked={filters.includes("€100+")}
        />
        €100 and above
      </label>
    </div>
  );
}

export default PriceFilter;
=======
function PriceFilter({ filters, setFilters }) {
  function handlePriceChange(event) {
    const selectedRangePrice = event.target.value;
    const filtersToKeep = filters.filter((f) => !f.includes("€"));
    setFilters([...filtersToKeep, selectedRangePrice]);
  }

  return (
    <div className="flex flex-col ">
      <h3 className="mb-2 font-bold">Price</h3>
      <label className="flex items-center">
        <input
          type="radio"
          name="price"
          value="0-30€"
          className="mr-2"
          onChange={handlePriceChange}
          checked={filters.includes("0-30€")}
        />
        0 - €30
      </label>
      <label className="flex items-center">
        <input
          type="radio"
          name="price"
          value="€30-€60"
          className="mr-2"
          onChange={handlePriceChange}
          checked={filters.includes("€30-€60")}
        />
        €30 - €60
      </label>
      <label className="flex items-center">
        <input
          type="radio"
          name="price"
          value="€60-€100"
          class="mr-2"
          onChange={handlePriceChange}
          checked={filters.includes("€60-€100")}
        />
        €60 - €100
      </label>
      <label className="flex items-center">
        <input
          type="radio"
          name="price"
          value="€100+"
          className="mr-2"
          onChange={handlePriceChange}
          checked={filters.includes("€100+")}
        />
        €100 and above
      </label>
    </div>
  );
}

export default PriceFilter;
>>>>>>> a825e4238c2a4c9321a49a838ffbc4a811f5bedb
