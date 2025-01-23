import React from "react";
import Image from "next/image";
import CollapsibleText from "@/app/_components/common/collapsibletext";
import NovelChapters from "./novelchapters";
import AllChapters from "./allchapters";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { Button } from "@/components/ui/button";
import NovelTags from "./noveltags";
import { useRouter } from "next/navigation";


const NovelDetails = ({ data }: any) => {
  const { push } = useRouter();

  const cleanedText = data?.synopsis?.replace(/<\/?p>/g, '').replace(/\n/g, '<br />');

  const ImagePlaceholder = '/overgeared.jpg'
  console.log(data)
  return (
    <>
      <div className="grid grid-cols-[1fr,3fr] text-white mt-10">
        <div className="mt-4">
          <Image
            className="rounded-lg w-[360px] h-[400px] object-cover"
            src={ImagePlaceholder} 
            alt="bookImage"
            width={350}
            height={400}
          />
        </div>
        <div className="ml-5 mt-4 grid grid-rows-2">
          <div>
            <div className="text-[28px] font-bold  mb-5">{data?.title}</div>
            <div className="mb-2">Author: {data?.author}</div>
            <div className="mb-2 flex items-center space-x-2">
            <span>Chapters</span> <MdOutlineLibraryBooks />{data?.last_chapter}
            </div>
          </div>
          <div>
              <div className="flex flex-nowrap">
                {data?.genre?.split(',').map((genre: any, index: any) => (
                  <Button className="mr-2 px-[6px] rounded-lg" key={index}>
                    {genre.trim()}
                  </Button>
                ))}
              </div>
              <div className="mt-4">
                <Button className="p-6">READ CHAPTER {data?.first_chapter}</Button>
              </div>
            </div>
          </div>
      </div>

          <div className="mt-10 text-white">
            <div className="font-bold text-[20px] mb-3">Synopsis:</div>
            <div
              dangerouslySetInnerHTML={{
                __html: data?.synopsis
                  ?.replace(/\n/g, '<br />')
                  .trim()
              }}
            ></div>
          </div>
          
      {/* <NovelChapters id={data?.novel_id} /> */}
      {/* <AllChapters id={data?.novel_id} /> */}
      {/* update */}
      <div onClick={() => push(`/novels/chapters/${data?.novel_id}`)}>
        All Chapters
      </div>
      <NovelTags data={data} />
    </>
  );
};

export default NovelDetails;
