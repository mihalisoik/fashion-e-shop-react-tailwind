function PriceFilter({ filters, setFilters }) {
  function handlePriceChange(event) {
    const selectedRangePrice = event.target.value;
    const filtersToKeep = filters.filter((f) => !f.includes("€"));
    setFilters([...filtersToKeep, selectedRangePrice]);
  }

  return (
    <div>
      <h3 className="mb-2 font-bold">Price</h3>
      <label className="flex items-center">
        <input
          type="radio"
          name="price"
          value="0-40€"
          className="mr-2"
          onChange={handlePriceChange}
          checked={filters.includes("0-40€")}
        />
        €0 - €40
      </label>
      <label className="flex items-center">
        <input
          type="radio"
          name="price"
          value="€40-80€"
          className="mr-2"
          onChange={handlePriceChange}
          checked={filters.includes("€40-80€")}
        />
        €40 - €80
      </label>
      <label className="flex items-center">
        <input
          type="radio"
          name="price"
          value="€80-€150"
          class="mr-2"
          onChange={handlePriceChange}
          checked={filters.includes("€80-€150")}
        />
        €80 - €150
      </label>
      <label className="flex items-center">
        <input
          type="radio"
          name="price"
          value="€150+"
          className="mr-2"
          onChange={handlePriceChange}
          checked={filters.includes("€150+")}
        />
        €150 and above
      </label>
    </div>
  );
}

export default PriceFilter;
