import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useResizeData from "@/app/_components/common/useResizeData";

interface Props {
  data?: any;
}

const RandomGenreBook = ({ data }: Props) => {
  const { push } = useRouter();

  const placeholderImage = '/overgeared.jpg'

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

  const [resizedData, imageSize] = useResizeData(data?.novels, breakpoints, size);

  return (
    <div className="flex gap-3 mt-3 mx-1">
      {resizedData &&
        resizedData?.map((book: any) => (
          <div key={book?.novel_id} className="flex flex-col items-center">
          <div

            className="relative hover:cursor-pointer"
            onClick={() => push(`/novels/details/${book.novel_id}`)}
          >
            <Image
              className="rounded-lg "
              src={placeholderImage}
              width={imageSize.W}
              height={imageSize.H}
              alt="Book Images"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-800 opacity-40 rounded-lg"></div>
   
          </div>
          <div className="text-white mt-2 text-sm font-semibold text-center overflow-hidden text-ellipsis" style={{ maxWidth: '200px' }}>
            {book.title}
          </div>
          </div>
        ))}
    </div>
  );
};

export default RandomGenreBook;
