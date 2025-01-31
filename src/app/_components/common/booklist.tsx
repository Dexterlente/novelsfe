import React, { useState } from "react";
import Image from "next/image";
import { limitText } from "../utils/limittext";
import { mapGenre } from "../enums/genre";
import { PaginationButton } from "./pagination";
import { useRouter, usePathname } from "next/navigation";
import List from "./List";

interface Props {
  data: any;
  searched?: string;
  path: string;
}

const BookList = ({ data, searched, path }: Props) => {

  return (
    <div className="min-h-screen relative mb-20">
      <div className="text-white my-5">
        {searched && (
          <div className="my-10 text-3xl">Searching for {searched}</div>
        )}
        {data?.novels?.length === 0 && (
          <div className="text-lg">Novels not found....</div>
        )}
      </div>
      <List data={data} path={path} />
    </div>
  );
};

// TODO pagination
export default BookList;
