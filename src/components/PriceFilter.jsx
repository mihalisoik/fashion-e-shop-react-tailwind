function PriceFilter() {
  return (
    <div>
      <h3 className="mb-2 font-bold">Price</h3>
      <label className="flex items-center">
        <input
          type="radio"
          name="price"
          value="0-20"
          className="mr-2 text-blue-500"
        />
        Up to €20
      </label>
      <label className="flex items-center">
        <input
          type="radio"
          name="price"
          value="20-50"
          className="mr-2 text-blue-500"
        />
        €20 - €50
      </label>
      <label className="flex items-center">
        <input
          type="radio"
          name="price"
          value="50-100"
          class="mr-2 text-blue-500"
        />
        €50 - €100
      </label>
      <label className="flex items-center">
        <input
          type="radio"
          name="price"
          value="100+"
          className="mr-2 text-blue-500"
        />
        €100 and above
      </label>
    </div>
  );
}

export default PriceFilter;
