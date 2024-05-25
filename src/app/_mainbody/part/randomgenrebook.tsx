import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  data?: any;
}

const RandomGenreBook = ({ data }: Props) => {
  const { push } = useRouter();

  return (
    <div className="flex gap-3 mt-3">
      {data &&
        data.map((book: any, index: number) => (
          <div
            key={index}
            className="relative hover:cursor-pointer"
            onClick={() => push(`/novels/details/${book.novel_id}`)}
          >
            <Image
              className="rounded-lg "
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
