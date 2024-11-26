import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { addToCart, cart, removeFromCart } from "../constants/cart";

function OrderSummary({
  animatedAddedTooltip,
  animatedRemovedTooltip,
  setRenderTotalQuantity,
}) {
  const increaseQuantity = (id, size) => {
    animatedAddedTooltip();
    setRenderTotalQuantity((oldValue) => oldValue + 1);
    addToCart(id, size);
  };

  // Handlers for updating quantity
  const decreaseQuantity = (id, size) => {
    animatedRemovedTooltip();
    setRenderTotalQuantity((oldValue) => oldValue - 1);
    removeFromCart(id, size);
  };

  return (
    <div>
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-6 font-primary">
        Your Cart
      </h2>

      {/* Conditional Rendering: Empty Cart */}
      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-20 font-secondary">
          <img
            src="src/assets/icons/empty-cart.svg" // Placeholder for empty cart illustration
            alt="Empty Cart"
            className="w-64 mb-6"
          />
          <p className="text-lg text-gray-600 text-center mb-4">
            Your cart is empty. Start adding items to your cart!
          </p>
          <Link to="/products">
            <button className="main-button main-button-hover">
              Start Shopping
            </button>
          </Link>
        </div>
      ) : (
        // Render cart items
        <div className="font-secondary">
          {cart.map((item, index) => (
            <CartItem
              key={index}
              item={item}
              index={index}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default OrderSummary;
