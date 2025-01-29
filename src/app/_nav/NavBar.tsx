"use client";
import React from "react";
import SearchComponent from "./searchfolder/searchcomponent";
import { useRouter } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const NavBar = () => {
  const { push } = useRouter();

  return (
    <div className="bg-[#131415] h-[64px]">
      <div className="flex row  items-center h-full px-4 xl:mx-[100px]">
        <div
          className="text-white font-bold text-xl cursor-pointer"
          onClick={() => push("/")}
        >
          Master Novels
        </div>
        {/* <div className="ml-3">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-md mt-[2px]">
                  Genre
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink
                    className="border-b mb-2 pb-2 hover:underline hover:cursor-pointer"
                    onClick={() => push("/novels/action")}
                  >
                    Action
                  </NavigationMenuLink>
                  <NavigationMenuLink
                    className="border-b mb-2 pb-2 hover:underline hover:cursor-pointer"
                    onClick={() => push("/novels/comedy")}
                  >
                    Comedy
                  </NavigationMenuLink>
                  <NavigationMenuLink
                    className="border-b mb-2 pb-2 hover:underline hover:cursor-pointer"
                    onClick={() => push("/novels/adventure")}
                  >
                    Adventure
                  </NavigationMenuLink>
                  <NavigationMenuLink
                    className="border-b mb-2 pb-2 hover:underline hover:cursor-pointer"
                    onClick={() => push("/novels/drama")}
                  >
                    Drama
                  </NavigationMenuLink>
                  <NavigationMenuLink
                    className="border-b mb-2 pb-2 hover:underline hover:cursor-pointer"
                    onClick={() => push("/novels/eastern")}
                  >
                    Eastern
                  </NavigationMenuLink>
                  <NavigationMenuLink
                    className="border-b mb-2 pb-2 hover:underline hover:cursor-pointer"
                    onClick={() => push("/novels/fantasy")}
                  >
                    Fantasy
                  </NavigationMenuLink>
                  <NavigationMenuLink
                    className="hover:underline hover:cursor-pointer"
                    onClick={() => push("/novels/harem")}
                  >
                    Harem
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div> */}

        {/* WARDS */}

        <div className="ml-auto">
          <SearchComponent />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
