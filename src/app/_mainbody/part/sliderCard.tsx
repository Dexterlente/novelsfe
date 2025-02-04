import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import {
Carousel,
CarouselContent,
CarouselItem,
} from "@/components/ui/carousel";
import { limitText } from "@/app/_components/utils/limittext";
import Image from "next/image";
import { useRouter } from "next/navigation";

  

const SliderCard = ({data, title, bgGradient}: any) => {
const { push } = useRouter();

  return (
    <Card className={`w-[180px] h-[280px] md:w-[238px] md:h-[355px] bg-gradient-to-br ${bgGradient}`}>
    <CardTitle className="text-center mt-1 md:m-1 text-white text-md md:text-lg font-bold">
      {title}
    </CardTitle>
    <CardContent className="flex items-center justify-center p-1">
      {data && (
        <Image
          className="rounded-r-lg hover:cursor-pointer h-[130px] sm:h-[170px] w-[90px] md:w-[120px] object-cover border border-white shadow-lg"
          src={data?.images && data?.images !== "None" ? data?.images : '/book.jpeg'}
          width={120}
          height={120}
          alt="Book"
          onClick={() => push(`/novels/details/${data?.novel_id}`)}
        />
      )}
    </CardContent>
    <CardFooter className="grid grid-cols-1">
      <p
        className="text-[13px] md:text-sm font-bold text-center hover:cursor-pointer"
        onClick={() => push(`/novels/details/${data?.novel_id}`)}
      >
        {limitText(data?.title, 40)}
      </p>
      <p className="text-[9px] font-light md:text-sm">{limitText(data?.synopsis, 100)}</p>
    </CardFooter>
  </Card>
  )
}

export default SliderCard