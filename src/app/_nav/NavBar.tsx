"use client";
import React from "react";
import SearchComponent from "./searchfolder/searchcomponent";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const { push } = useRouter();

  return (
    <div className="bg-[#131415] h-[64px]">
      <div className="flex justify-between items-center h-full px-4">
        <div
          className="text-white font-bold text-xl cursor-pointer"
          onClick={() => push("/")}
        >
          Master Novels
        </div>
        <div>
          <SearchComponent />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
