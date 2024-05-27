import { useFetchAllChapters } from "@/app/_components/hooks/useFetchAllChapters";
import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useRouter } from "next/navigation";

const AllChapters = ({ id }: any) => {
  const { data: allData } = useFetchAllChapters(id);
  const { push } = useRouter();

  console.log(allData); // Log the entire array allData

  // Function to split array into chunks of 50 items
  const chunkArray = (arr: any, size: any) => {
    const chunkedArr = [];
    let index = 0;
    while (index < arr?.length) {
      const chunk = arr?.slice(index, index + size);
      const highestChapterNumber = Math.max(
        ...chunk.map((item: any) => item?.chapter_number)
      );
      const lowestChapterNumber = Math.min(
        ...chunk.map((item: any) => item?.chapter_number)
      );
      chunkedArr.push({ chunk, highestChapterNumber, lowestChapterNumber });
      index += size;
    }
    return chunkedArr;
  };

  const allDataChunks = chunkArray(allData?.all_chapters, 50);
  console.log(allDataChunks);

  return (
    <div className="text-white mt-10">
      <div className="text-[32px] font-bold mt-2">Novel Chapters</div>
      {allDataChunks.map((chunkObj, index) => (
        <Collapsible
          key={index}
          className="text-white border-2 my-2 rounded-lg"
        >
          <CollapsibleTrigger className="m-3 p-3 rounded-full font-bold">
            Chapter {chunkObj.highestChapterNumber} - Chapter{" "}
            {chunkObj.lowestChapterNumber}
          </CollapsibleTrigger>
          <CollapsibleContent className="grid grid-cols-2 mb-2">
            {chunkObj?.chunk?.map((item: any, i: number) => (
              <div key={i} className="text-center my-2">
                <div
                  className="hover:cursor-pointer grid hover:bg-black rounded-lg py-2"
                  onClick={() =>
                    push(`/novels/chapter/${item.novel_id}/${item.chapter_id}`)
                  }
                >
                  Chapter Number: {item?.chapter_number}
                </div>
              </div>
            ))}
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  );
};

export default AllChapters;
