function AddToCartButton() {
  
  return (
      <button className="flex gap-2 text-[#666666] text-sm px-3 py-2 bg-slate-50 rounded-3xl justify-center items-center font-semibold shadow-md hover:bg-slate-100 active:scale-95">
        Add to Cart
        <img src="src/assets/icons/add-to-cart.svg" alt="add-to-cart" />
      </button>
  )
}

export default AddToCartButton