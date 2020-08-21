import React from "react";

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
  return (
    <div className="m-auto p-2">
      <p className="text-xl text-center p-3 pt-5 text-gray-200">
        {"Enter an image link to detect faces"}
      </p>
      <div className="flex justify-center w-full m-auto sm:w-1/2">
        <input
          className="text-sm p-2 w-3/4 md:text-md lg:text-xl"
          placeholder="Enter an image link to detect faces"
          onChange={onInputChange}
        />
        <button
          className="bg-indigo-300 hover:bg-indigo-400 text-gray-800 font-semibold py-2 px-4 border"
          onClick={onSubmit}
        >
          Detect
        </button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
