import FullScreenAdhoc from "@/app/_adhoc/fullscreenadhoc";
import React from "react";
import Slider from "../part/slider";

const FullScreenBody = () => {
  return (
    <FullScreenAdhoc>
      <div className="min-h-screen mt-4">
        <div className="text-white">
          <p className="text-2xl">First, Random Series </p>
          <p className="mb-4">Let’s read some ramdom stories by genre! </p>
        </div>
        <Slider />
      </div>
    </FullScreenAdhoc>
  );
};

export default FullScreenBody;