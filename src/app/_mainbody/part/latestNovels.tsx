"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useFetchLatestNovels } from "@/app/_components/hooks/useFetchLatestNovels";
import { formatTimestamp } from "@/app/_components/utils/dateFormatter";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { limitText } from "@/app/_components/utils/limittext";


const LatestNovels = () => {
  const { data } = useFetchLatestNovels();
  const { push } = useRouter();
  const ImagePlaceholder = '/overgeared.jpg'

  return (
    <>
      <div className="text-2xl font-bold text-white mb-2">
        Most Recently Updated
      </div>
      <div className="overflow-x-auto">
        <Table className="min-w-[800px]">
          <TableBody>
            {data?.chapters?.map((items: any, index: number) => (
              <TableRow
                key={index}
                className="text-white grid grid-cols-[0.5fr,1.5fr,2fr,1fr,1fr] md:grid-cols-[0.5fr,4fr,3fr,1fr,1fr] items-center hover:bg-[#464646]"
              >
                <TableCell className="sticky -left-1 z-10 bg-[#464646]">    
                  <Image
                    className="rounded-md min-w-[30px]"
                    src={ImagePlaceholder}
                    alt="bookImage"
                    width={30}
                    height={40}
                            />
                </TableCell>
                <TableCell
                  className="font-medium hover:underline hover:cursor-pointer sticky left-[62px] z-10 bg-[#464646] p-2"
                  onClick={() => push(`/novels/details/${items.novel_id}`)}
                >
                  {items?.novel_title || "1"}
                </TableCell>
            
                <TableCell
                  className="hover:underline hover:cursor-pointer"
                  onClick={() => {
                    const basePath = `/novels/chapter/${items?.novel_id}/${items?.index}`;
                    const subChapterPath = items?.sub_chapter > 0 ? `/${items?.sub_chapter}` : '';
                    push(basePath + subChapterPath);
                    window.scrollTo(0, 0);
                    }}
                >
                  {limitText(items?.title, 65)}
                </TableCell>
                <TableCell>{items?.author}</TableCell>
                <TableCell>{formatTimestamp(items?.timestamp)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default LatestNovels;
