"use client";
import React from "react";
import SearchComponent from "./searchfolder/searchcomponent";
import { useRouter } from "next/navigation";
import { SiFirefoxbrowser } from "react-icons/si";

const NavBar = () => {
  const { push } = useRouter();

  return (
    <div className="bg-[#131415] h-[64px]">
      <div className="flex row  items-center h-full px-4 xl:mx-[100px]">
        <div
          className="text-white font-bold text-xl cursor-pointer hidden sm:block"
          onClick={() => push("/")}
        >
          Master Novels
        </div>
        <div onClick={() => push("/novels/genres/all?page=1")} className="text-white ml-1 flex items-center justify-center hover:bg-white hover:text-black hover:cursor-pointer p-1 rounded-md"><SiFirefoxbrowser /><div className="ml-1">Browse</div></div>

        <div className="ml-auto">
          <SearchComponent />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
