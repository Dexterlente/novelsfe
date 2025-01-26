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
const placeHolderImage = `/overgeared.jpg`
  return (
    <Card className={`w-[238px] h-[355px] bg-gradient-to-br ${bgGradient}`}>
    <CardTitle className="text-center m-1 text-white text-lg font-bold">
      {title}
    </CardTitle>
    <CardContent className="flex items-center justify-center p-1">
      {data && (
        <Image
          className="rounded-r-lg hover:cursor-pointer"
          src={placeHolderImage}
          width={120}
          height={120}
          alt="Book"
          onClick={() => push(`/novels/details/${data?.novel_id}`)}
        />
      )}
    </CardContent>
    <CardFooter className="grid grid-cols-1">
      <p
        className="text-sm font-bold text-center hover:cursor-pointer"
        onClick={() => push(`/novels/details/${data?.novel_id}`)}
      >
        {data?.title}
      </p>
      <p className="text-sm">{limitText(data?.synopsis, 100)}</p>
    </CardFooter>
  </Card>
  )
}

export default SliderCard