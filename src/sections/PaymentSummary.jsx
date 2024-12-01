import { useState } from "react";
import { cart } from "../constants/cart";
import { formatCurrency } from "../utils/money";
import { saveCartToStorage } from "../utils/saveToStorage";
import { Link } from "react-router-dom";

function PaymentSummary({ setRenderTotalQuantity }) {
  const [deliveryOption, setDeliveryOption] = useState("4");
  const [showModal, setShowModal] = useState(false);

  const deliveryPrices = {
    2: 700,
    4: 300,
    7: 100,
  };

  const subtotal = cart.reduce(
    (total, item) => total + item.quantity * item.priceCents,
    0
  );

  const totalPrice = subtotal + deliveryPrices[deliveryOption];

  const today = new Date();

  function renderDateAfterDays(daysToAdd) {
    const newDate = new Date(today);
    newDate.setDate(today.getDate() + daysToAdd);
    return newDate.toDateString();
  }

  function handleShopAgainButton() {
    cart.length = 0;
    setRenderTotalQuantity(0);
    saveCartToStorage(cart);
  }

  return (
    <div className="relative bg-white shadow-lg rounded-lg p-8 mt-8 font-secondary">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6 font-primary">
        Payment Summary
      </h3>
      <div className="flex justify-between items-center mb-6 border-b pb-4">
        <p className="text-gray-700 text-lg">Subtotal:</p>
        <p className="font-semibold text-gray-900 text-lg">
          <span className="text-xs">€</span>
          {formatCurrency(subtotal)}
        </p>
      </div>
      <div className="mb-6">
        <h4 className="text-lg font-medium text-gray-700 mb-4">
          Delivery Options
        </h4>
        <div className="space-y-4">
          <label className="flex items-center gap-3">
            <input
              type="radio"
              name="delivery"
              value="2"
              checked={deliveryOption === "2"}
              onChange={(event) => setDeliveryOption(event.target.value)}
              className="form-radio text-blue-500"
            />
            <div className="flex-1">
              <span className="font-semibold text-gray-800 font-primary">
                Express (2 days)
              </span>
              <div className="text-gray-600 text-sm">
                Delivery by: {renderDateAfterDays(2)}
              </div>
              <div className="mt-2 text-gray-900">
                +{formatCurrency(deliveryPrices[2])}€
              </div>
            </div>
          </label>
          <label className="flex items-center gap-3">
            <input
              type="radio"
              name="delivery"
              value="4"
              checked={deliveryOption === "4"}
              onChange={(event) => setDeliveryOption(event.target.value)}
              className="form-radio text-blue-500"
            />
            <div className="flex-1">
              <span className="font-semibold text-gray-800 font-primary">
                Standard (4 days)
              </span>
              <div className="text-gray-600 text-sm">
                Delivery by: {renderDateAfterDays(4)}
              </div>
              <div className="mt-2 text-gray-900">
                +{formatCurrency(deliveryPrices[4])}€
              </div>
            </div>
          </label>
          <label className="flex items-center gap-3">
            <input
              type="radio"
              name="delivery"
              value="7"
              checked={deliveryOption === "7"}
              onChange={(event) => setDeliveryOption(event.target.value)}
              className="form-radio text-blue-500"
            />
            <div className="flex-1">
              <span className="font-semibold text-gray-800 font-primary">
                Economy (7 days)
              </span>
              <div className="text-gray-600 text-sm">
                Delivery by: {renderDateAfterDays(7)}
              </div>
              <div className="mt-2 text-gray-900">
                +{formatCurrency(deliveryPrices[7])}€
              </div>
            </div>
          </label>
        </div>
      </div>
      <div className="flex justify-between items-center font-medium text-lg mt-6 border-t pt-4">
        <span className="text-gray-800">Total:</span>
        <span className="text-gray-900 font-bold">
          <span className="text-xs">€</span>
          {formatCurrency(totalPrice)}
        </span>
      </div>
      <button
        className="w-full mt-20 main-button main-button-hover"
        onClick={() => {
          setShowModal(true);
        }}
      >
        Proceed to Payment
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 flex justify-center items-center backdrop-blur-sm">
          <div className="bg-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-gray-800">Thank You!</h2>
            <p className="mt-4 text-gray-600 w-80 md:w-96">
              Your payment has been successfully processed. If you’re happy with
              your experience, we’d love for you to leave us a review. Your
              feedback helps us improve and helps others make informed
              decisions. We hope to see you again soon!
            </p>
            <Link to="/">
              <button
                className="main-button main-button-hover mt-10 text-slate-50 rounded-full"
                onClick={handleShopAgainButton}
              >
                Shop Again
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default PaymentSummary;
