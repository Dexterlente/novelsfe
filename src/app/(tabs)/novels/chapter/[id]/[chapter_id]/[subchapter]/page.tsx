"use client";
import FullScreenAdhoc from "@/app/_adhoc/fullscreenadhoc";
import Chapter from "@/app/_components/common/chapter";
import Loader from "@/app/_components/common/loader";
import { useGetChapter } from "@/app/_components/hooks/useGetChapter";
import { useParams } from "next/navigation";
import React from "react";

const Page = () => {
  const params = useParams<{ id: string; chapter_id: string, subchapter?: string }>();
  const { data, isLoading } = useGetChapter(params.id, params.chapter_id, params.subchapter);
  
  return (
    <>
    <FullScreenAdhoc>
          {isLoading ? (<Loader />) 
          :
          (
          <div className="2xl:mx-[100px]">
            <Chapter data={data} />
          </div>
          )}
        </FullScreenAdhoc>
    </>
  );
};

export default Page;
