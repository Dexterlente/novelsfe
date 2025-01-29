"use client"
import React from "react";
import { formatTimestamp } from "../utils/dateFormatter";
import FormattedText from "./formatterContent";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import ChapterButton from "./ChapterButton";
import { FaHome } from "react-icons/fa";

const Chapter = ({ data }: any) => {
const { push } = useRouter();
  

console.log(data)
  return (
    <div className="min-h-screen text-white">
      <div className="text-2xl font-bold mt-10">{data?.title}</div>
      <div className="grid grid-cols-3 items-center my-10">
      <div className="flex justify-start">
        {data?.index_before && (
          <ChapterButton novel_id={data?.novel_id} direction={data?.index_before?.index} 
          style={"col-start-1"} btnTitle={"Previous"} subchapter={data?.index_before?.subchapter}/>
        )}
      </div>
        <div className="flex justify-center">
          <div onClick={() => push(`/novels/details/${data?.novel_id}`)} className="bg-[#131415] cursor-pointer p-3 rounded-lg hover:bg-[#0F1729E6]">
            <FaHome className="text-xl" />
          </div>
        </div>

        <div className="flex justify-end">
        {data?.index_after && (
          <ChapterButton novel_id={data?.novel_id} direction={data?.index_after?.index} 
          style={"col-start-2 flex justify-end"} btnTitle={"Next"} subchapter={data?.index_after?.subchapter}/>
        )}
      </div>
      </div>
      <div>{formatTimestamp(data?.timestamp)}</div>
      <div className="mt-5 mb-10">
        <FormattedText text={data?.content} />
      </div>
      <div className="grid grid-cols-3 items-center mb-10">
      <div className="flex justify-start">

        {data?.index_before && (
          <ChapterButton novel_id={data?.novel_id} direction={data?.index_before?.index} 
          style={"col-start-1"} btnTitle={"Previous"} subchapter={data?.index_before?.subchapter} />
        )}
        </div>
        <div className="flex justify-center">
          <div onClick={() => push(`/novels/details/${data?.novel_id}`)} className="bg-[#131415] cursor-pointer p-3 rounded-lg hover:bg-[#0F1729E6]">
            <FaHome className="text-xl" />
          </div>
        </div>
    <div className="flex justify-end">
        {data?.index_after && (
          <ChapterButton novel_id={data?.novel_id} direction={data?.index_after?.index} 
          style={"col-start-2 flex justify-end"} btnTitle={"Next"} subchapter={data?.index_after?.subchapter} />
        )}
      </div>
      </div>
    </div>
  );
};

export default Chapter;
