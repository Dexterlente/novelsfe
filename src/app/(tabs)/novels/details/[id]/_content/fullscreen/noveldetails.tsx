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
    <div className="block md:hidden">
    <div className="mt-4 min-w-[200px] flex justify-center items-center">
          <Image
            className="rounded-lg object-cover"
            src={ImagePlaceholder} 
            alt="bookImage"
            width={200}
            height={300}
          />
        </div>
        <div className="text-white">
            <div className="text-[24px] font-bold my-3">{data?.title}</div>
            <div className="mb-2">Author: {data?.author}</div>
            <div className="mb-2 flex items-center space-x-2">
            <span>Chapters</span> <MdOutlineLibraryBooks />{data?.last_chapter}
            </div>
            <div className="flex flex-wrap my-3">
                {data?.genre?.split(',').map((genre: any, index: any) => (
                  <Button className="mr-2  mb-1 rounded-lg" size={"sm"} key={index}>
                    {genre.trim()}
                  </Button>
                ))}
              </div>
          </div>
          <div onClick={() => {
                    const basePath = `/novels/chapter/${data?.novel_id}/${data?.first_chapter}`;
                    // BE TODO FOR SUBCHAPTER
                    const subChapterPath = data?.first_sub_chapter > 0 ? `/${data?.first_sub_chapter}` : '';
                    push(basePath + subChapterPath);
                }}
            className="text-center text-white p-5 hover:bg-white hover:text-black hover:cursor-pointer rounded-lg border border-solid">
            READ CHAPTER {data?.first_chapter}.{data?.first_sub_chapter}
          </div>
    </div>
    {/* md above */}
    <div className="hidden md:block ">
      <div className="grid grid-cols-[1fr,3fr] text-white mt-10">
        <div className="mt-4 min-w-[200px] flex items-center">
          <Image
            className="rounded-lg object-cover"
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
              <div className="flex flex-wrap">
                {data?.genre?.split(',').map((genre: any, index: any) => (
                  <Button className="mr-2  mb-1 rounded-lg" size={"sm"} key={index}>
                    {genre.trim()}
                  </Button>
                ))}
              </div>
              <div
              onClick={() => {
                  const basePath = `/novels/chapter/${data?.novel_id}/${data?.first_chapter}`;
                  // BE TODO FOR SUBCHAPTER
                  const subChapterPath = data?.first_sub_chapter > 0 ? `/${data?.first_sub_chapter}` : '';
                  push(basePath + subChapterPath);
              }}    
              className="mt-4">
                <Button className="font-bold p-6">READ CHAPTER {data?.first_chapter}.{data?.first_sub_chapter}</Button>
              </div>
            </div>
          </div>
      </div>
      </div>
{/* md amd higher */}

          <div className="mt-10 text-white mb-3">
            <div className="font-bold text-[20px] mb-3">Synopsis:</div>
            <div
              > {data?.synopsis && (
                <CollapsibleText
                  text={data.synopsis.replace(/\n/g, "<br />").trim()}
                  maxLength={600}
                />
            )}</div>
          </div>
          
      <div className="text-center text-white p-5 hover:bg-white hover:text-black hover:cursor-pointer rounded-lg border border-solid" 
      onClick={() => push(`/novels/chapters/${data?.novel_id}`)}>
          <div className="md:text-2xl font-bold">Novel Chapters</div>
          <div>Chapter {data?.last_chapter}</div>
      </div>
      <NovelTags data={data} />
    </>
  );
};

export default NovelDetails;
