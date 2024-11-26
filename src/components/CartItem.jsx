import { Link } from "react-router-dom";
import { formatCurrency } from "../utils/money";

function CartItem({ item, index, increaseQuantity, decreaseQuantity }) {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6 bg-white border-b border-gray-300">
      {/* Product Image */}
      <Link to={`/item?id=${encodeURIComponent(item.id)}`} key={item.id}>
        <div className="flex-shrink-0">
          <img
            src={item.image}
            alt={`${item.name} Image`}
            className="w-full max-w-[150px] md:max-w-[200px] rounded-md object-cover"
          />
        </div>
      </Link>

      {/* Product Details */}
      <div className="flex flex-col w-full">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {item.name}
        </h3>

        <div className="text-sm text-gray-600 mb-4">Size: {item.size}</div>

        {/* Quantity Section */}
        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <span className="font-medium">Quantity:</span>
          <div className="flex items-center gap-2">
            <button
              className="p-1 w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300 active:bg-gray-400 transition"
              onClick={() => decreaseQuantity(item.id, item.size)}
              aria-label="Decrease quantity"
            >
              –
            </button>
            <span className="w-10 text-center font-medium text-gray-800">
              {item.quantity}
            </span>
            <button
              className="p-1 w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300 active:bg-gray-400 transition"
              onClick={() => increaseQuantity(item.id, item.size)}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
        </div>

        {/* Total Cost */}
        <div className="text-base font-medium text-gray-900">
          Total: {formatCurrency(item.quantity * item.priceCents)}
        </div>
      </div>
    </div>
  );
}

export default CartItem;
