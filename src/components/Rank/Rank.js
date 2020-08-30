import React from "react";

const Rank = ({name, entries}) => {
  return (
    <div className="m-auto">
      <div className="text-white text-2xl bold text-center">{`${name}, your current rank is...`}</div>
      <div className="text-white text-5xl font-bold text-center">{entries}</div>
    </div>
  );
};

export default Rank;
