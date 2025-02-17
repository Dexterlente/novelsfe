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
import { Skeleton } from "@/components/ui/skeleton"

const LatestNovels = () => {
  const { data, isLoading } = useFetchLatestNovels();
  const { push } = useRouter();
  return (
    <>
    {isLoading ? (
            <div className="space-y-7">
                <Skeleton className="w-[274px] h-[30px]" />
                <Skeleton className="w-full h-[30px]" />
                <Skeleton className="w-full h-[30px]" />
                <Skeleton className="w-full h-[30px]" />
                <Skeleton className="w-full h-[30px]" />
                <Skeleton className="w-full h-[30px]" />
                <Skeleton className="w-full h-[30px]" />
                <Skeleton className="w-full h-[30px]" />
                <Skeleton className="w-full h-[30px]" />
                <Skeleton className="w-full h-[30px]" />
                <Skeleton className="w-full h-[30px]" />
            </div>
            ) : (
    <>
      <div className="text-2xl font-bold text-white mb-2">
        Most Recently Updated
      </div>
      <div className="relative overflow-x-auto">
        <Table className="min-w-[800px]">
          <TableBody>
            {data?.chapters?.map((items: any, index: number) => (
              <TableRow
                key={index}
                // grid-cols-[0.5fr,1.5fr,2fr,1fr,1fr]
                className="text-white sm:grid  sm:grid-cols-[0.5fr,4fr,3fr,1fr,1fr] items-center hover:bg-[#464646]"
              >
                <TableCell className="sticky left-0 z-10 bg-[#464646] items-left pl-[20px]"
                style={{ width: '60px' }}
                >    
                  <Image
                    className="rounded-md min-w-[30px]"
                    src={items?.images && items?.images !== "None" ? items?.images : '/book.jpeg'}
                    alt="bookImage"
                    width={30}
                    height={40}
                            />
                </TableCell>
                <TableCell
                  className="font-medium hover:underline hover:cursor-pointer sticky left-[66px] min-w-[120px] z-20 bg-[#464646] pl-[10px] items-left mr-8"
                  onClick={() => {push(`/novels/details/${items.novel_id}`)
                  window.scrollTo(0, 0);
                }
                }
                  
                >
                  {items?.novel_title || "1"}
                </TableCell>
            
                <TableCell
                  className="hover:underline hover:cursor-pointer"
                  onClick={() => {
                    const basePath = `/novels/chapter/${items?.novel_id}/${items?.index}`;
                    const subChapterPath = items?.subchapter > 0 ? `/${items?.subchapter}` : '';
                    push(basePath + subChapterPath);
                    window.scrollTo(0, 0);
                    }}
                >
                  {limitText(items?.title, 65)}
                </TableCell>
                <TableCell>{limitText(items?.author, 25)}</TableCell>
                <TableCell>{formatTimestamp(items?.timestamp)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      </>
      )}
    </>
  );
};

export default LatestNovels;
