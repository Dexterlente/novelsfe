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


const LatestNovels = () => {
  const { data } = useFetchLatestNovels();
  const { push } = useRouter();
  const ImagePlaceholder = '/overgeared.jpg'


  return (
    <>
      <div className="text-2xl font-bold text-white mb-2">
        Most Recently Updated
      </div>
      <Table>
        <TableBody>
          {data?.chapters?.map((items: any, index: number) => (
            <TableRow
              key={index}
              className="text-white grid grid-cols-[0.5fr,4fr,2fr,1fr,1fr] items-center"
            >
              <TableCell>    
                <Image
                  className="rounded-md"
                  src={ImagePlaceholder}
                  alt="bookImage"
                  width={30}
                  height={40}
                          />
              </TableCell>
              <TableCell
                className="font-medium hover:underline hover:cursor-pointer"
                onClick={() => push(`/novels/details/${items.novel_id}`)}
              >
                {items?.novel_title || "1"}
              </TableCell>
              <TableCell
                className="hover:underline hover:cursor-pointer"
                onClick={() =>
                  push(`/novels/chapter/${items.novel_id}/${items.chapter_id}`)
                }
              >
                Chapter {items?.title}
              </TableCell>
              <TableCell>{items?.author}</TableCell>
              <TableCell>{formatTimestamp(items?.timestamp)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default LatestNovels;
