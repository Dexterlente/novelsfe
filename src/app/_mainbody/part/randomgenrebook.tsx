import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  data?: any;
}

const RandomGenreBook = ({ data }: Props) => {
  const { push } = useRouter();

  return (
    <div className="flex lg:gap-2 xl:gap-3 mt-3">
      {data &&
        data
          .slice(0, window.innerWidth < 1024 ? 5 : data.length)
          .map((book: any, index: number) => (
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
