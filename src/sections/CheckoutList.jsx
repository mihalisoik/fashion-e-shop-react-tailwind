import React, { useState } from "react";

function CheckoutList() {
  const [selectedDate, setSelectedDate] = useState("");

  // Generate delivery dates based on the current date
  const today = new Date();
  const options = { weekday: "long", month: "long", day: "numeric" };
  const deliveryDates = [
    new Date(today.getTime() + 1 * 24 * 60 * 60 * 1000).toLocaleDateString(
      undefined,
      options
    ),
    new Date(today.getTime() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString(
      undefined,
      options
    ),
    new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString(
      undefined,
      options
    ),
  ];

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div className="max-container w-full min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Checkout</h1>

        {/* Checkout Steps */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex justify-center items-center font-bold">
              1
            </div>
            <span className="ml-3 text-gray-700">Delivery Options</span>
          </div>
          <div className="h-px flex-grow bg-gray-300 mx-4"></div>
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gray-300 text-gray-600 flex justify-center items-center font-bold">
              2
            </div>
            <span className="ml-3 text-gray-400">Payment</span>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Delivery Options */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Choose Your Delivery Date
            </h2>
            <div className="space-y-4">
              {deliveryDates.map((date, index) => (
                <label
                  key={index}
                  className={`flex items-center border p-4 rounded-lg cursor-pointer ${
                    selectedDate === date
                      ? "border-blue-600 bg-blue-50"
                      : "border-gray-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="delivery-date"
                    value={date}
                    checked={selectedDate === date}
                    onChange={handleDateChange}
                    className="h-5 w-5 accent-blue-600 mr-4"
                  />
                  <span className="text-gray-700">{date}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Order Summary
            </h2>
            <div className="space-y-2">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal:</span>
                <span>$50.00</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping:</span>
                <span>$5.00</span>
              </div>
              <div className="border-t border-gray-300 my-4"></div>
              <div className="flex justify-between text-gray-800 font-bold">
                <span>Total:</span>
                <span>$55.00</span>
              </div>
            </div>
            <button className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg font-medium text-lg hover:bg-blue-700 transition">
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutList;
