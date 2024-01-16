import React, { useContext, useEffect, useRef, useState } from "react";
import Layout from "../../components/Layout";
import cartContext from "../../Context/CartContext";
import { ConnectWallet } from "@thirdweb-dev/react";

const Checkout = () => {
  const cart = useContext(cartContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const formSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <Layout>
      <div>
        <h1 className="text-white font-semibold text-3xl text-center">
          Checkout
        </h1>
      </div>
      <div>
        <main className="relative grid grid-cols-1 gap-x-16 max-w-7xl mx-auto lg:px-8 lg:grid-cols-2 xl:gap-x-48">
          <section
            aria-labelledby="summary-heading"
            className="bg-gray-50 pt-16 pb-10 px-4 sm:px-6 lg:px-0 lg:pb-16 lg:bg-transparent lg:row-start-1 lg:col-start-2"
          >
            <div className="max-w-lg mx-auto lg:max-w-none">
              <h2
                id="summary-heading"
                className="text-lg font-medium text-heading"
              >
                Order summary
              </h2>

              <ul
                role="list"
                className="text-sm font-medium text-heading divide-y divide-gray-200"
              >
                {cart.items.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center justify-between py-6"
                  >
                    <div className="flex  gap-2">
                      <img
                        src={item.image}
                        alt=""
                        className="w-[4.5rem] h-[4.5rem] rounded-xl object-cover"
                      />

                      <div className="flex flex-col gap-4 ">
                        <h1 className="text-white text-md font-semibold tracking-wider">
                          {item.title}
                        </h1>
                        <h1 className="text-gray-300">
                          Quantity: {item.amount}
                        </h1>
                      </div>
                    </div>

                    <div>
                      <h1 className="text-white text-md font-semibold">
                        {item.amount * item.price} USDC
                      </h1>
                    </div>
                  </li>
                ))}
              </ul>

              <dl className="hidden text-sm font-medium text-heading space-y-6 border-t border-gray-200 pt-6 lg:block">
                <div className="flex items-center justify-between">
                  <dt className="text-white">Subtotal</dt>
                  <dd>{cart.totalAmount} USDC</dd>
                </div>

                <div className="flex items-center justify-between">
                  <dt className="text-white">Shipping</dt>
                  <dd>Free</dd>
                </div>

                <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                  <dt className="text-base">Total</dt>
                  <dd className="text-base">{cart.totalAmount} USDC</dd>
                </div>
              </dl>
            </div>
          </section>

          <form
            onSubmit={formSubmitHandler}
            className="pt-16 pb-36 px-4 sm:px-6 lg:pb-16 lg:px-0 lg:row-start-1 lg:col-start-1"
          >
            <div className="max-w-lg mx-auto lg:max-w-none">
              <section aria-labelledby="contact-info-heading">
                <h2
                  id="contact-info-heading"
                  className="text-lg font-medium text-heading"
                >
                  Contact information
                </h2>

                <div className="mt-6">
                  <label
                    htmlFor="email-address"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      id="email-address"
                      name="email-address"
                      className="block w-full border-gray-300 p-2  rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </section>

              <section aria-labelledby="payment-heading" className="mt-10">
                <h2
                  id="payment-heading"
                  className="text-lg font-medium text-heading"
                >
                  Payment details
                </h2>

                <div className="mt-6 grid grid-cols-3 sm:grid-cols-4 gap-y-6 gap-x-4">
                  <div className="col-span-3 sm:col-span-4">
                    <label
                      htmlFor="name-on-card"
                      className="block text-sm font-medium text-gray-300"
                    >
                      Name on card
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="name-on-card"
                        name="name-on-card"
                        className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="col-span-3 sm:col-span-4">
                    <label
                      htmlFor="card-number"
                      className="block text-sm font-medium text-gray-300"
                    >
                      Card number
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="card-number"
                        name="card-number"
                        className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="col-span-2 sm:col-span-3">
                    <label
                      htmlFor="expiration-date"
                      className="block text-sm font-medium text-gray-300"
                    >
                      Expiration date (MM/YY)
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="expiration-date"
                        id="expiration-date"
                        className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="cvc"
                      className="block text-sm font-medium text-gray-300"
                    >
                      CVC
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="cvc"
                        id="cvc"
                        className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
              </section>

              <section aria-labelledby="shipping-heading" className="mt-10">
                <h2
                  id="shipping-heading"
                  className="text-lg font-medium text-heading"
                >
                  Shipping address
                </h2>

                <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-3">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-300"
                    >
                      Company
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-gray-300"
                    >
                      Address
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="address"
                        name="address"
                        className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="apartment"
                      className="block text-sm font-medium text-gray-300"
                    >
                      Apartment, suite, etc.
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="apartment"
                        name="apartment"
                        className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-300"
                    >
                      City
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="city"
                        name="city"
                        className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="region"
                      className="block text-sm font-medium text-gray-300"
                    >
                      State / Province
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="region"
                        name="region"
                        className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="postal-code"
                      className="block text-sm font-medium text-gray-300"
                    >
                      Postal code
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="postal-code"
                        name="postal-code"
                        className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
              </section>

              <div className="mt-10 pt-6 border-t border-gray-200 sm:flex sm:items-center sm:justify-between">
                {/* <button className="w-full bg-secondary border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:opacity-90 sm:ml-6 sm:order-last sm:w-auto">
                  Confirm
                </button> */}
                <p className="mt-4 text-center text-sm text-gray-500 sm:mt-0 sm:text-left">
                  Check your details before continuing.
                </p>
                <ConnectWallet style={{backgroundColor:"#2077CE",color:"white"}}  btnTitle="Confirm" className="w-full bg-secondary border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:opacity-90 sm:ml-6 sm:order-last sm:w-auto" />
              </div>
            </div>
          </form>
        </main>
      </div>
    </Layout>
  );
};

export default Checkout;
