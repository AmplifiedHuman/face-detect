import React from "react";

const FaceRecognition = ({ imageUrl }) => {
  return (
    <div className="mx-auto">
      <div className="mx-auto my-4 p-3 flex justify-center">
        <img src={imageUrl} alt="" width="500px" height="auto" />
      </div>
    </div>
  );
};

export default FaceRecognition;
