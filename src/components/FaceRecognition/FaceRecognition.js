import React from "react";

const FaceRecognition = ({ imageUrl, boxes }) => {
  const displayBoxes = boxes.map((box, i) => {
    return (
      <div
        className="bounding-box"
        style={{
          top: box.topRow,
          right: box.rightCol,
          left: box.leftCol,
          bottom: box.bottomRow,
        }}
        key={i}
      />
    );
  });

  return (
    <div className="flex justify-center">
      <div className="mx-auto my-4 absolute">
        <img
          src={imageUrl}
          alt=""
          width="500px"
          height="auto"
          id="inputimage"
        />
        {displayBoxes}
      </div>
    </div>
  );
};

export default FaceRecognition;
