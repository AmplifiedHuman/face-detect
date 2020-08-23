import React from "react";

const Signin = ({ onRouteChange }) => {
  return (
    <div className="w-full max-w-sm mx-auto px-2">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="mb-8 text-3xl text-center">Sign In</h1>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-md font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="block border border-grey-light w-full p-2 rounded mb-4 focus:outline-none focus:shadow-outline shadow"
            id="email"
            type="text"
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-md font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="block border border-grey-light w-full p-2 rounded mb-6 focus:outline-none focus:shadow-outline shadow"
            id="password"
            type="password"
            placeholder="******************"
          />
        </div>
        <div className="flex items-center justify-between mb-4">
          <button
            className="bg-pink-500 hover:bg-pink-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => onRouteChange("home")}
          >
            Sign In
          </button>
        </div>
        <p
          className="text-pink-500 text-xs cursor-pointer text-center hover:text-pink-300"
          onClick={() => onRouteChange("register")}
        >
          Don't have an account? Register
        </p>
      </form>
    </div>
  );
};
export default Signin;
