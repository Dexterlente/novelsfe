import React, { useState } from "react";
import Image from "next/image";
import { limitText } from "../utils/limittext";
import { mapGenre } from "../enums/genre";
import { PaginationButton } from "./pagination";

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
        <div className="grid grid-cols-2">
          {data?.novels.map?.((books: any, index: number) => (
            <div key={index}>
              <div className="grid grid-cols-[1fr,2fr] m-3">
                {data && (
                  <Image
                    className="rounded-lg"
                    src={books?.image_url_cover}
                    width={120}
                    height={120}
                    alt="BookImage"
                  />
                )}
                <div className="text-sm">
                  <p className="font-bold">{books.title}</p>
                  <p className="mt-3">{limitText(books.synopsis, 130)}</p>
                  <p className="font-bold mt-2">{mapGenre(books.genre)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -bottom-[100px] text-white inset-x-0 mb-10">
        {data?.novels?.length !== 0 && (
          <PaginationButton
            currentPage={data?.current_page}
            totalPages={data?.total_pages}
            path={path}
          />
        )}
      </div>
    </div>
  );
};

// TODO pagination
export default BookList;
