"use client";
import React from "react";
import SearchComponent from "./searchfolder/searchcomponent";
import { SiFirefoxbrowser } from "react-icons/si";
import NavHeader from "./NavHeader";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const { push } = useRouter();
  return (
    <>
    <NavHeader />
    <div className="bg-[#3A3A3A] h-[64px]">
      <div className="flex row  items-center h-full px-4 xl:mx-[100px]">
        
        <div onClick={() => push("/novels/genres/all?page=1")} className="text-white ml-0 sm:ml-5 flex items-center justify-center hover:bg-white hover:text-black hover:cursor-pointer p-1 rounded-md"><SiFirefoxbrowser /><div className="ml-1">Browse</div></div>

        <div className="ml-auto">
          <SearchComponent />
        </div>
      </div>
    </div>
    </>
  );
};

export default NavBar;
