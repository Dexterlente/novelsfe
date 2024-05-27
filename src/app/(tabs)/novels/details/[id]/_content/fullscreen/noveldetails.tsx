import React from "react";
import Image from "next/image";
import CollapsibleText from "@/app/_components/common/collapsibletext";
import NovelChapters from "./novelchapters";

const NovelDetails = ({ data }: any) => {
  const cleanedText = data?.synopsis?.replace(/Synopsis\s*/i, "");

  return (
    <>
      <div className="grid grid-cols-[1fr,3fr] text-white mt-10">
        <div className="mt-4">
          <Image
            className="rounded-lg"
            src={data?.image_url_cover}
            alt="bookImage"
            width={200}
            height={200}
          />
        </div>
        <div className="ml-5">
          <div className="text-[28px] font-bold  mb-5">{data?.title}</div>
          <div>
            <CollapsibleText text={cleanedText} maxLength={250} />
          </div>
        </div>
      </div>
      <NovelChapters id={data?.novel_id} />
    </>
  );
};

export default NovelDetails;
