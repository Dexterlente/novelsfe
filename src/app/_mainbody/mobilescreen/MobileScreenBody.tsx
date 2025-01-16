import MobileScreenAdhoc from "@/app/_adhoc/mobilescreenadhoc";
import React from "react";
import Slider from "../part/slider";
import Randomgenre from "../part/randomgenre";
import LatestNovels from "../part/latestNovels";

const MobileScreenBody = () => {
  return (
    <MobileScreenAdhoc>
      <div className="min-h-screen mt-4">
        <div className="text-white">
          <p className="text-2xl">First, Random Series </p>
          <p className="mb-4">Let’s read some random stories by genre! </p>
        </div>
        {/* <Slider /> */}
        <div className="mt-6">
          <p className="text-2xl text-white mb-3">Popular Genres</p>
          <Randomgenre />
        </div>
        <div className="mt-10 mb-8">
          <LatestNovels />
        </div>
      </div>
    </MobileScreenAdhoc>
  );
};

export default MobileScreenBody;
