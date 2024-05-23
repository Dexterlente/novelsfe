"use client";
import React from "react";
import { Input, InputProps } from "@/components/ui/input";
import { FaMagnifyingGlass } from "react-icons/fa6";

const SearchInput = (
  props: React.JSX.IntrinsicAttributes &
    InputProps &
    React.RefAttributes<HTMLInputElement>
) => {
  return (
    <div className="relative">
      <Input {...props} className="pl-10 pr-3 rounded-full" />
      <FaMagnifyingGlass className="absolute inset-y-0 left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
    </div>
  );
};

const NavBar = () => {
  return (
    <div className="bg-[#131415] h-[64px]">
      <div className="flex justify-between items-center h-full px-4">
        <div className="text-white font-bold text-xl">Master Novels</div>
        <div className="pr-3 w-[200px]">
          <SearchInput placeholder="Search..." />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
