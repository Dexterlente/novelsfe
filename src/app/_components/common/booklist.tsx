import React from "react";
import Image from "next/image";
import { limitText } from "../utils/limittext";
import { mapGenre } from "../enums/genre";

interface Props {
  data: any;
  searched?: string;
}

const BookList = ({ data, searched }: Props) => {
  console.log(data);
  console.log(data?.novels.image_url_cover);
  return (
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
            <div className="grid grid-cols-2 m-3">
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
                <p className="mt-3">{limitText(books.synopsis, 80)}</p>
                <p className="font-bold mt-2">{mapGenre(books.genre)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
