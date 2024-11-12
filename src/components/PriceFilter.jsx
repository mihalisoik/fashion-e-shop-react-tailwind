import { useState } from "react";

function PriceFilter({ controlFilters, filters, setFilters }) {
  const [selectedPrice, setSelectedPrice] = useState("");

  function handlePriceChange(event) {
    const value = event.target.value;
    setFilters((prevFilters) => {
      if (prevFilters.includes(value)) {
        return prevFilters.filter((f) => !value);
      } else {
        return [...prevFilters, value];
      }
    });
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
        />
        Up to €40
      </label>
      <label className="flex items-center">
        <input
          type="radio"
          name="price"
          value="€40-80€"
          className="mr-2"
          onChange={handlePriceChange}
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
        />
        €150 and above
      </label>
    </div>
  );
}

export default PriceFilter;
