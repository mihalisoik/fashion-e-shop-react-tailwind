import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { cart } from "../constants/cart";

function OrderSummary() {
  // Handlers for updating quantity
  const decreaseQuantity = (index) => {
    console.log(`Decrease quantity for item at index ${index}`);
    // Implement functionality to decrease item quantity
  };

  const increaseQuantity = (index) => {
    console.log(`Increase quantity for item at index ${index}`);
    // Implement functionality to increase item quantity
  };

  return (
    <div className="container mx-auto w-full min-h-screen bg-white py-10 px-4 shadow-xl mt-20">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-6 font-primary">
        Your Cart
      </h2>

      {/* Conditional Rendering: Empty Cart */}
      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-20">
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
              onDecreaseQuantity={decreaseQuantity}
              onIncreaseQuantity={increaseQuantity}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default OrderSummary;
