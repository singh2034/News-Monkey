import React from "react";
import loadingspinner from "../utils/loadingspinner.gif"

const Spinner = () => {
  return (
    <div className="text-center">
      <img src={loadingspinner} alt="loading" />
    </div>
  );
};

export default Spinner;
