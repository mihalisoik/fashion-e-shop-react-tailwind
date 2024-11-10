function PriceFilter() {
  return (
    <div>
      <h3 className="mb-2 font-bold">Price</h3>
      <label className="flex items-center">
        <input
          type="radio"
          name="price"
          value="0-40"
          className="mr-2 text-blue-500"
        />
        Up to €40
      </label>
      <label className="flex items-center">
        <input
          type="radio"
          name="price"
          value="40-80"
          className="mr-2 text-blue-500"
        />
        €40 - €80
      </label>
      <label className="flex items-center">
        <input
          type="radio"
          name="price"
          value="80-150"
          class="mr-2 text-blue-500"
        />
        €80 - €150
      </label>
      <label className="flex items-center">
        <input
          type="radio"
          name="price"
          value="150+"
          className="mr-2 text-blue-500"
        />
        €150 and above
      </label>
    </div>
  );
}

export default PriceFilter;
