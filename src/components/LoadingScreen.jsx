import React from "react";
import FadeLoader from "react-spinners/FadeLoader";

const LoadingScreen = () => {
  return (
    <div id="loading-screen">
      <div className="loader cursor-progress h-screen flex justify-center items-center">
        <FadeLoader className=" mx-auto my-auto" color="#AA7EEE" />
      </div>
    </div>
  );
};

export default LoadingScreen;
