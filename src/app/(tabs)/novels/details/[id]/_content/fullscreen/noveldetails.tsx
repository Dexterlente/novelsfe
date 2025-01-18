import React from "react";
import Image from "next/image";
import CollapsibleText from "@/app/_components/common/collapsibletext";
import NovelChapters from "./novelchapters";
import AllChapters from "./allchapters";

const NovelDetails = ({ data }: any) => {
  const cleanedText = data?.synopsis?.replace(/<\s*p\s*>/gi, "\n")?.replace(/<\s*\/\s*p\s*>/gi, "\n");

  const ImagePlaceholder = '/overgeared.jpg'
  console.log(data)
  return (
    <>
      <div className="grid grid-cols-[1fr,3fr] text-white mt-10">
        <div className="mt-4">
          <Image
            className="rounded-lg"
            src={ImagePlaceholder} 
            alt="bookImage"
            width={200}
            height={200}
          />
        </div>
        <div className="ml-5">
          <div className="text-[28px] font-bold  mb-5">{data?.title}</div>
          <div>
            <CollapsibleText text={cleanedText} maxLength={250}  />
          </div>
        </div>
      </div>
      {/* <NovelChapters id={data?.novel_id} /> */}
      <AllChapters id={data?.novel_id} />
    </>
  );
};

export default NovelDetails;
