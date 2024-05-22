import React from "react";
import Image from "next/image";

interface Props {
  data?: any;
}

const RandomGenreBook = ({ data }: Props) => {
  return (
    <div className="flex gap-3 mt-3">
      {data &&
        data.map((book: any, index: number) => (
          <div key={index} className="relative">
            <Image
              className="rounded-lg"
              src={book?.image_url_cover}
              width={400}
              height={700}
              alt="Book Images"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-800 opacity-40 rounded-lg"></div>
          </div>
        ))}
    </div>
  );
};

export default RandomGenreBook;
