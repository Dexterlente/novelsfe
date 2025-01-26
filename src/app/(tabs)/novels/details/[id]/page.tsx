"use client";
import FullScreenAdhoc from "@/app/_adhoc/fullscreenadhoc";
import LgScreenAdhoc from "@/app/_adhoc/lgscreenadhoc";
import MdScreenAdhoc from "@/app/_adhoc/mdscreenadhoc";
import MobileScreenAdhoc from "@/app/_adhoc/mobilescreenadhoc";
import { useFetchNovelDetails } from "@/app/_components/hooks/useFetchNovelDetails";
import React from "react";
import NovelDetails from "./_content/fullscreen/noveldetails";

const Page = ({ params }: { params: { id: string } }) => {
  const { data, isLoading } = useFetchNovelDetails(params.id);
  return (
    <div className="min-h-screen">
      <FullScreenAdhoc>
        <NovelDetails data={data} />
      </FullScreenAdhoc>
    </div>
  );
};

export default Page;
