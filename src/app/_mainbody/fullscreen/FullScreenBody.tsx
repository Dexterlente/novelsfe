import FullScreenAdhoc from "@/app/_adhoc/fullscreenadhoc";
import React from "react";
import Slider from "../part/slider";
import Randomgenre from "../part/randomgenre";
import LatestNovels from "../part/latestNovels";

const FullScreenBody = () => {
  return (
    <FullScreenAdhoc>
      <div className="min-h-screen mt-4">
        <div className="text-white">
          <p className="text-2xl">First, Random Series </p>
          <p className="mb-4">Let’s read some random stories by genre! </p>
        </div>
        <div className="flex justify-center">
          <Slider />
        </div>
        <div className="mt-6">
          <p className="text-2xl text-white mb-3">Popular Genres</p>
          <Randomgenre />
        </div>
        <div className="mt-10 mb-8">
          <LatestNovels />
        </div>
      </div>
    </FullScreenAdhoc>
  );
};

export default FullScreenBody;
