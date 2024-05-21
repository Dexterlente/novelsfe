import FullScreenAdhoc from "@/app/_adhoc/fullscreenadhoc";
import React from "react";
import Slider from "../part/slider";

const FullScreenBody = () => {
  return (
    <FullScreenAdhoc>
      <div className="min-h-screen">
        <Slider />
      </div>
    </FullScreenAdhoc>
  );
};

export default FullScreenBody;
