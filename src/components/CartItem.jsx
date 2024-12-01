<<<<<<< HEAD
import { Link } from "react-router-dom";
import { formatCurrency } from "../utils/money";

function CartItem({ item, increaseQuantity, decreaseQuantity }) {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6 bg-white border-b border-gray-300">
      <Link to={`/item?id=${encodeURIComponent(item.id)}`} key={item.id}>
        <div className="flex-shrink-0">
          <img
            src={item.image}
            alt={`${item.name} Image`}
            className="w-full max-w-40 md:max-w-52 rounded-md object-cover"
          />
        </div>
      </Link>
      <div className="flex flex-col w-full">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {item.name}
        </h3>
        <div className="text-sm text-gray-600 mb-4">Size: {item.size}</div>
        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <span className="font-medium">Quantity:</span>
          <div className="flex items-center gap-2">
            <button
              className="p-1 w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300 active:bg-gray-400 transition"
              onClick={() => decreaseQuantity(item.id, item.size)}
            >
              –
            </button>
            <span className="w-10 text-center font-medium text-gray-800">
              {item.quantity}
            </span>
            <button
              className="p-1 w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300 active:bg-gray-400 transition"
              onClick={() => increaseQuantity(item.id, item.size)}
            >
              +
            </button>
          </div>
        </div>
        <div className="text-base font-medium text-gray-900">
          Total: {formatCurrency(item.quantity * item.priceCents)}
        </div>
      </div>
    </div>
  );
}

export default CartItem;
=======
import { Link } from "react-router-dom";
import { formatCurrency } from "../utils/money";

function CartItem({ item, increaseQuantity, decreaseQuantity }) {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6 bg-white border-b border-gray-300">
      <Link to={`/item?id=${encodeURIComponent(item.id)}`} key={item.id}>
        <div className="flex-shrink-0">
          <img
            src={item.image}
            alt={`${item.name} Image`}
            className="w-full max-w-40 md:max-w-52 rounded-md object-cover"
          />
        </div>
      </Link>
      <div className="flex flex-col w-full">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {item.name}
        </h3>
        <div className="text-sm text-gray-600 mb-4">Size: {item.size}</div>
        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <span className="font-medium">Quantity:</span>
          <div className="flex items-center gap-2">
            <button
              className="p-1 w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300 active:bg-gray-400 transition"
              onClick={() => decreaseQuantity(item.id, item.size)}
            >
              –
            </button>
            <span className="w-10 text-center font-medium text-gray-800">
              {item.quantity}
            </span>
            <button
              className="p-1 w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300 active:bg-gray-400 transition"
              onClick={() => increaseQuantity(item.id, item.size)}
            >
              +
            </button>
          </div>
        </div>
        <div className="text-base font-medium text-gray-900">
          Total: {formatCurrency(item.quantity * item.priceCents)}
        </div>
      </div>
    </div>
  );
}

export default CartItem;
>>>>>>> a825e4238c2a4c9321a49a838ffbc4a811f5bedb
