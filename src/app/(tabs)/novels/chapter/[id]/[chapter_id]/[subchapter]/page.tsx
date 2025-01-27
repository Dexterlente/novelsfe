"use client";
import FullScreenAdhoc from "@/app/_adhoc/fullscreenadhoc";
import Chapter from "@/app/_components/common/chapter";
import { useGetChapter } from "@/app/_components/hooks/useGetChapter";
import { useParams } from "next/navigation";
import React from "react";

const Page = () => {
  const params = useParams<{ id: string; chapter_id: string, subchapter?: string }>();
  const { data } = useGetChapter(params.id, params.chapter_id, params.subchapter);
  
  return (
    <>
    {/* FYCK NOT RENDERING */}
      <FullScreenAdhoc>
        <Chapter data={data} />
      </FullScreenAdhoc>
    </>
  );
};

export default Page;
