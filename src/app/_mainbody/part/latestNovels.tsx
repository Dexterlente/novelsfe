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

const LatestNovels = () => {
  const { data } = useFetchLatestNovels();

  const { push } = useRouter();

  return (
    <>
      <div className="text-2xl font-bold text-white mb-2">
        Most Recently Updated
      </div>
      <Table>
        <TableBody>
          {data?.map((items: any, index: number) => (
            <TableRow
              key={index}
              className="text-white grid grid-cols-[4fr,2fr,1fr]"
            >
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
                Chapter {items?.chapter_number}
              </TableCell>
              <TableCell>{formatTimestamp(items?.timestamp)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default LatestNovels;
