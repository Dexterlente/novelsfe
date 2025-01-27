"use client"
import React from "react";
import { formatTimestamp } from "../utils/dateFormatter";
import FormattedText from "./formatterContent";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import ChapterButton from "./ChapterButton";

const Chapter = ({ data }: any) => {

  return (
    <div className="min-h-screen text-white">
      <div className="text-2xl font-bold mt-10">{data?.title}</div>
      <div className="grid grid-cols-2 my-10">
        {data?.index_before && (
          <ChapterButton novel_id={data?.novel_id} direction={data?.index_before?.index} 
          style={"col-start-1"} btnTitle={"Previous"} />
        )}
        {data?.index_after && (
          <ChapterButton novel_id={data?.novel_id} direction={data?.index_after?.index} 
          style={"col-start-2 flex justify-end"} btnTitle={"Next"} />
        )}
      </div>
      <div>{formatTimestamp(data?.timestamp)}</div>
      <div className="mt-5 mb-10">
        <FormattedText text={data?.content} />
      </div>
      <div className="grid grid-cols-2 mb-4">
        {data?.index_before && (
          <ChapterButton novel_id={data?.novel_id} direction={data?.previous_chapter_id} 
          style={"col-start-1"} btnTitle={"Previous"} />
        )}

        {data?.index_after && (
          <ChapterButton novel_id={data?.novel_id} direction={data?.index_after?.index} 
          style={"col-start-2 flex justify-end"} btnTitle={"Next"} />
        )}
      </div>
    </div>
  );
};

export default Chapter;
