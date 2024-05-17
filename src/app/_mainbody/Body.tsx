"use client";
import React from "react";
import FullScreenBody from "./fullscreen/FullScreenBody";
import LgScreenBody from "./lgscreen/LgScreenBody";
import MdScreenBody from "./mdscreen/MdScreenBody";
import MobileScreenBody from "./mobilescreen/MobileScreenBody";

const Body = () => {
  return (
    <div>
      <FullScreenBody />
      <LgScreenBody />
      <MdScreenBody />
      <MobileScreenBody />
    </div>
  );
};

export default Body;
