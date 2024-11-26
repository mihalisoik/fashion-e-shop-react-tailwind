import { useState } from "react";
import { cart } from "../constants/cart";
import { formatCurrency } from "../utils/money";

function PaymentSummary() {
  const [deliveryOption, setDeliveryOption] = useState("4"); // Default delivery option

  // Delivery prices for different options
  const deliveryPrices = {
    2: 700,
    4: 300,
    7: 100,
  };

  // Calculate cart subtotal
  const subtotal = cart.reduce(
    (total, item) => total + item.quantity * item.priceCents,
    0
  );

  // Calculate total price (subtotal + delivery fee)
  const totalPrice = subtotal + deliveryPrices[deliveryOption];

  const today = new Date();

  function renderDateAfterDays(daysToAdd) {
    const newDate = new Date(today);
    newDate.setDate(today.getDate() + daysToAdd);
    return newDate.toDateString();
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mt-8 font-secondary">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">
        Payment Summary
      </h3>

      {/* Subtotal */}
      <div className="flex justify-between items-center mb-6 border-b pb-4">
        <p className="text-gray-700 text-lg">Subtotal:</p>
        <p className="font-semibold text-gray-900 text-lg">
          <span className="text-xs">€</span>
          {formatCurrency(subtotal)}
        </p>
      </div>

      {/* Delivery Options */}
      <div className="mb-6">
        <h4 className="text-lg font-medium text-gray-700 mb-4">
          Delivery Options
        </h4>
        <div className="space-y-4">
          {/* Option: 2 Days */}
          <label className="flex items-center gap-3">
            <input
              type="radio"
              name="delivery"
              value="2"
              checked={deliveryOption === "2"}
              onChange={(e) => setDeliveryOption(e.target.value)}
              className="form-radio text-blue-500"
            />
            <div className="flex-1">
              <span className="font-semibold text-gray-800">
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

          {/* Option: 4 Days */}
          <label className="flex items-center gap-3">
            <input
              type="radio"
              name="delivery"
              value="4"
              checked={deliveryOption === "4"}
              onChange={(e) => setDeliveryOption(e.target.value)}
              className="form-radio text-blue-500"
            />
            <div className="flex-1">
              <span className="font-semibold text-gray-800">
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

          {/* Option: 7 Days */}
          <label className="flex items-center gap-3">
            <input
              type="radio"
              name="delivery"
              value="7"
              checked={deliveryOption === "7"}
              onChange={(e) => setDeliveryOption(e.target.value)}
              className="form-radio text-blue-500"
            />
            <div className="flex-1">
              <span className="font-semibold text-gray-800">
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

      {/* Total Price */}
      <div className="flex justify-between items-center font-medium text-lg mt-6 border-t pt-4">
        <span className="text-gray-800">Total:</span>
        <span className="text-gray-900 font-bold">
          <span className="text-xs">€</span>
          {formatCurrency(totalPrice)}
        </span>
      </div>

      {/* Proceed to Payment Button */}
      <button className="w-full mt-20 main-button main-button-hover">
        Proceed to Payment
      </button>
    </div>
  );
}

export default PaymentSummary;
