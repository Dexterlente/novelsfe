import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useResizeData from "@/app/_components/common/useResizeData";

interface Props {
  data?: any;
}

const RandomGenreBook = ({ data }: Props) => {
  const { push } = useRouter();

  const breakpoints = [
    { width: 640, count: 4 },
    { width: 768, count: 6 },
    { width: 1024, count: 6 },
    { width: 1280, count: 7 },
  ];

  const size = [
    { width: 640, W: 250, H: 200 },
    { width: 768, W: 300, H: 500 },
    { width: 1024, W: 350, H: 600 },
    { width: 1280, W: 400, H: 700 },
  ];

  const [resizedData, imageSize] = useResizeData(data, breakpoints, size);

  return (
    <div className="flex gap-3 mt-3 mx-1">
      {resizedData &&
        resizedData.map((book: any, index: number) => (
          <div
            key={index}
            className="relative hover:cursor-pointer"
            onClick={() => push(`/novels/details/${book.novel_id}`)}
          >
            <Image
              className="rounded-lg "
              src={book?.image_url_cover}
              width={imageSize.W}
              height={imageSize.H}
              alt="Book Images"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-800 opacity-40 rounded-lg"></div>
          </div>
        ))}
    </div>
  );
};

export default RandomGenreBook;
