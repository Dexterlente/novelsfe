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

const LatestNovels = () => {
  const { data } = useFetchLatestNovels();

  return (
    <>
      <div className="text-2xl font-bold text-white mb-2">
        Most Recently Updated
      </div>
      <Table>
        <TableBody>
          {data?.map((items: any, index: number) => (
            <TableRow key={index} className="text-white">
              <TableCell className="font-medium">
                {items?.novel_title || "1"}
              </TableCell>
              <TableCell>Chapter {items?.chapter_number}</TableCell>
              <TableCell>{formatTimestamp(items?.timestamp)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default LatestNovels;
