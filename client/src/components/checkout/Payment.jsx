import React from "react";
import american from "../../assets/american.png";
import Paypal from "../../assets/Paypal.png";
import phonepay from "../../assets/phonepay.png";
import laptop from "../../assets/laptop.png";
import visa from "../../assets/visa.png";

const Payment = () => {
  return (
    <div className=" flex items-center justify-center mt-20  ">
      <div className="flex flex-col lg:flex-row  overflow-hidden w-full max-w-6xl">
        {/* Checkout Form */}
        <div className="w-full lg:w-2/3 p-10">
          <h2 className="text-3xl font-bold mb-2 text-gray-800"> Checkout</h2>
          <p className="mb-4 font-medium text-gray-700">Payment Method</p>
          <div className="flex gap-4 mb-8">
            <div className="payment-option group">
              <img src={Paypal} alt="PayPal" className="w-16 h-12 border rounded-lg p-2 hover:border-teal-500 cursor-pointer transition-all duration-200 hover:shadow-md" />
            </div>
            <div className="payment-option group">
              <img src={american} alt="American Express" className="w-16 h-12 border rounded-lg p-2 hover:border-teal-500 cursor-pointer transition-all duration-200 hover:shadow-md" />
            </div>
            <div className="payment-option group">
              <img src={phonepay} alt="PhonePay" className="w-16 h-12 border rounded-lg p-2 hover:border-teal-500 cursor-pointer transition-all duration-200 hover:shadow-md" />
            </div>
            <div className="payment-option group">
              <img src={laptop} alt="Other" className="w-16 h-12 border rounded-lg p-2 hover:border-teal-500 cursor-pointer transition-all duration-200 hover:shadow-md" />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">Name on Card</label>
              <input
                type="text"
                placeholder="Enter name on card"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">Card Number</label>
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition"
              />
            </div>

            <div className="flex gap-6">
              <div className="w-1/2">
                <label className="block text-sm font-medium mb-2 text-gray-700">Expiration Date</label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium mb-2 text-gray-700">CVC</label>
                <input
                  type="text"
                  placeholder="CVC"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition"
                />
              </div>
            </div>

            <div className="flex items-center mt-4">
              <input type="checkbox" className="w-5 h-5 text-teal-500 border-gray-300 rounded focus:ring-teal-500" id="save-info" />
              <label htmlFor="save-info" className="ml-2 text-sm text-gray-700 cursor-pointer">Save my information for faster checkout</label>
            </div>
          </div>

          <button className="mt-8 w-full bg-teal-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-teal-600 transition duration-300 shadow-md hover:shadow-lg">
            Complete Payment
          </button>
          
          <p className="text-center mt-4 text-sm text-gray-500">Your information is secure and encrypted</p>
        </div>

        {/* Summary */}
        <div className="w-full lg:w-1/3 bg-gradient-to-br from-teal-50 to-blue-50 p-4 sm:p-6 lg:p-8 mt-6 lg:mt-14 rounded-3xl mb-10 lg:mb-20">
          <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-gray-800 border-b pb-3 sm:pb-4">Order Summary</h3>

          <div className="space-y-4 sm:space-y-6">
            <div className="flex gap-2 sm:gap-4 items-center bg-white p-2 sm:p-3 rounded-lg shadow-sm">
              <img src={laptop} alt="Product" className="w-12 h-12 sm:w-16 sm:h-16 rounded-md object-cover" />
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm font-bold text-gray-800 truncate">Premium Course Access</p>
                <p className="text-xs text-gray-500 hidden sm:block">Lifetime access to all premium content</p>
                <p className="text-xs text-gray-500 sm:hidden">Lifetime access</p>
              </div>
              <span className="font-bold text-gray-800 text-xs sm:text-base whitespace-nowrap">$24.69</span>
            </div>
            
            <div className="flex gap-2 sm:gap-4 items-center bg-white p-2 sm:p-3 rounded-lg shadow-sm">
              <img src={laptop} alt="Product" className="w-12 h-12 sm:w-16 sm:h-16 rounded-md object-cover" />
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm font-bold text-gray-800 truncate">Advanced Tutorials</p>
                <p className="text-xs text-gray-500 hidden sm:block">Special bundle with premium support</p>
                <p className="text-xs text-gray-500 sm:hidden">Premium bundle</p>
              </div>
              <span className="font-bold text-gray-800 text-xs sm:text-base whitespace-nowrap">$24.69</span>
            </div>

            <div className="bg-white rounded-lg p-3 sm:p-4 mt-4 sm:mt-6 shadow-sm">
              <div className="space-y-2 sm:space-y-3">
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium text-gray-800">$49.38</span>
                </div>
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-gray-600">Coupon Discount</span>
                  <span className="font-medium text-green-600">-$0.00</span>
                </div>
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium text-gray-800">$7.00</span>
                </div>
                <div className="border-t mt-2 sm:mt-3 pt-2 sm:pt-3 flex justify-between font-bold">
                  <span className="text-gray-800">Total</span>
                  <span className="text-base sm:text-xl text-teal-600">$56.38</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
