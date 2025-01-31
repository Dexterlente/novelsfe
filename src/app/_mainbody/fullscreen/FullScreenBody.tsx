import FullScreenAdhoc from "@/app/_adhoc/fullscreenadhoc";
import React, { useState } from "react";
// import Slider from "../part/slider";
import Randomgenre from "../part/randomgenre";
import LatestNovels from "../part/latestNovels";
import Loader from "@/app/_components/common/loader";
import dynamic from 'next/dynamic';
import Indexes from "./indexes";


const Index = dynamic(() => import('./indexes'), {
  ssr: false,
  loading: () => <div className="text-white"><Loader /></div>
});


const FullScreenBody = () => {

  return (
  <FullScreenAdhoc>
      <Index />
  </FullScreenAdhoc>
  );
};

export default FullScreenBody;
