import React from "react";
const Register = ({ onRouteChange }) => {
  return (
    <div className="flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Register</h1>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="fullname"
            placeholder="Full Name"
          />

          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
          />

          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
          />

          <button
            className="bg-pink-500 hover:bg-pink-400 text-white font-bold py-3 rounded focus:outline-none focus:shadow-outline w-full"
            type="button"
            onClick={() => {
              onRouteChange("home");
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
