import FullScreenAdhoc from "@/app/_adhoc/fullscreenadhoc";
import React, { useState } from "react";
import Randomgenre from "../part/randomgenre";
import LatestNovels from "../part/latestNovels";
import Loader from "@/app/_components/common/loader";
import dynamic from 'next/dynamic';
import Slider from "../part/slider";


// const ClientSlider = dynamic(() => import('../part/slider'), {
//   ssr: false,
//   loading: () => <div className="text-white"><Loader /></div>
// });


const Indexes = () => {

  return (
      <div className="min-h-screen mt-4">
        <div className="text-white">
          <p className="text-2xl">First, Random Series</p>
          <p className="mb-4">Let’s read some random stories by genre!</p>
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
  );
};

export default Indexes;
