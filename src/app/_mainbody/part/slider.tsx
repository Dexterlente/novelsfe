import React from "react";
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
import { useFetchSingleRandom } from "@/app/_components/hooks/useFetchSingleRandom";
import Image from "next/image";
import { limitText } from "@/app/_components/utils/limittext";
import { mapGenre } from "@/app/_components/enums/genre";
import { useRouter } from "next/navigation";

const Slider = () => {
  const { data: firstData } = useFetchSingleRandom(1);
  const { data: secondData } = useFetchSingleRandom(2);
  const { data: thirdData } = useFetchSingleRandom(3);
  const { data: fourthData } = useFetchSingleRandom(4);
  const { data: fifthData } = useFetchSingleRandom(5);
  const { data: sixData } = useFetchSingleRandom(6);
  const { data: sevenData } = useFetchSingleRandom(7);

  const { push } = useRouter();

  return (
    <Carousel className="max-w-5xl">
      <CarouselContent>
        <CarouselItem className="flex gap-10">
          <Card className="w-[238px] h-[350px] bg-gradient-to-br from-blue-500 to-purple-500">
            <CardTitle className="text-center m-1 text-white text-lg font-bold">
              {mapGenre(firstData?.genre)}
            </CardTitle>
            <CardContent className="flex items-center justify-center p-1">
              {firstData && (
                <Image
                  className="rounded-r-lg hover:cursor-pointer"
                  src={firstData?.image_url_cover}
                  width={120}
                  height={120}
                  alt="Action"
                  onClick={() => push(`/novels/details/${firstData.novel_id}`)}
                />
              )}
            </CardContent>
            <CardFooter className="grid grid-cols-1">
              <p
                className="text-sm font-bold text-center hover:cursor-pointer"
                onClick={() => push(`/novels/details/${firstData.novel_id}`)}
              >
                {firstData?.title}
              </p>
              <p className="text-sm">{limitText(firstData?.synopsis, 70)}</p>
            </CardFooter>
          </Card>
          <Card className="w-[238px] h-[350px] bg-gradient-to-br from-yellow-600 to-pink-500">
            <CardTitle className="text-center m-1 text-white text-lg font-bold">
              {mapGenre(secondData?.genre)}
            </CardTitle>
            <CardContent className="flex items-center justify-center p-1 hover:cursor-pointer">
              {secondData && (
                <Image
                  className="rounded-r-lg"
                  src={secondData?.image_url_cover}
                  width={120}
                  height={120}
                  alt="Action"
                  onClick={() => push(`/novels/details/${secondData.novel_id}`)}
                />
              )}
            </CardContent>
            <CardFooter className="grid grid-cols-1">
              <p
                className="text-sm font-bold text-center hover:cursor-pointer"
                onClick={() => push(`/novels/details/${secondData.novel_id}`)}
              >
                {secondData?.title}
              </p>
              <p className="text-sm">{limitText(secondData?.synopsis, 70)}</p>
            </CardFooter>
          </Card>

          <Card className="w-[238px] h-[350px] bg-gradient-to-br from-teal-900 to-blue-500">
            <CardTitle className="text-center m-1 text-white text-lg font-bold">
              {mapGenre(thirdData?.genre)}
            </CardTitle>
            <CardContent className="flex items-center justify-center p-1">
              {thirdData && (
                <Image
                  className="rounded-r-lg hover:cursor-pointer"
                  src={thirdData?.image_url_cover}
                  width={120}
                  height={120}
                  alt="Action"
                  onClick={() => push(`/novels/details/${thirdData.novel_id}`)}
                />
              )}
            </CardContent>
            <CardFooter className="grid grid-cols-1">
              <p
                className="text-sm font-bold text-center hover:cursor-pointer"
                onClick={() => push(`/novels/details/${thirdData.novel_id}`)}
              >
                {thirdData?.title}
              </p>
              <p className="text-sm">{limitText(thirdData?.synopsis, 70)}</p>
            </CardFooter>
          </Card>

          <Card className="w-[238px] h-[350px] bg-gradient-to-br from-purple-900 to-white">
            <CardTitle className="text-center m-1 text-white text-lg font-bold">
              {mapGenre(fourthData?.genre)}
            </CardTitle>
            <CardContent className="flex items-center justify-center p-1">
              {fourthData && (
                <Image
                  className="rounded-r-lg hover:cursor-pointer"
                  src={fourthData?.image_url_cover}
                  width={120}
                  height={120}
                  alt="Action"
                  onClick={() => push(`/novels/details/${fourthData.novel_id}`)}
                />
              )}
            </CardContent>
            <CardFooter className="grid grid-cols-1">
              <p
                className="text-sm font-bold text-center hover:cursor-pointer"
                onClick={() => push(`/novels/details/${fourthData.novel_id}`)}
              >
                {fourthData?.title}
              </p>
              <p className="text-sm">{limitText(fourthData?.synopsis, 70)}</p>
            </CardFooter>
          </Card>
        </CarouselItem>
        <CarouselItem className="flex gap-10">
          <Card className="w-[238px] h-[350px] bg-gradient-to-br from-pink-900 to-gray-300">
            <CardTitle className="text-center m-1 text-white text-lg font-bold">
              {mapGenre(fifthData?.genre)}
            </CardTitle>
            <CardContent className="flex items-center justify-center p-1">
              {fifthData && (
                <Image
                  className="rounded-r-lg hover:cursor-pointer"
                  src={fifthData?.image_url_cover}
                  width={120}
                  height={120}
                  alt="Action"
                  onClick={() => push(`/novels/details/${fifthData.novel_id}`)}
                />
              )}
            </CardContent>
            <CardFooter className="grid grid-cols-1">
              <p
                className="text-sm font-bold text-center hover:cursor-pointer"
                onClick={() => push(`/novels/details/${fifthData.novel_id}`)}
              >
                {fifthData?.title}
              </p>
              <p className="text-sm">{limitText(fifthData?.synopsis, 70)}</p>
            </CardFooter>
          </Card>

          <Card className="w-[238px] h-[350px] bg-gradient-to-br from-blue-300 to-green-300">
            <CardTitle className="text-center m-1 text-white text-lg font-bold">
              {mapGenre(sixData?.genre)}
            </CardTitle>
            <CardContent className="flex items-center justify-center p-1">
              {sixData && (
                <Image
                  className="rounded-r-lg hover:cursor-pointer"
                  src={sixData?.image_url_cover}
                  width={120}
                  height={120}
                  alt="Action"
                  onClick={() => push(`/novels/details/${sixData.novel_id}`)}
                />
              )}
            </CardContent>
            <CardFooter className="grid grid-cols-1">
              <p
                className="text-sm font-bold text-center hover:cursor-pointer"
                onClick={() => push(`/novels/details/${sixData.novel_id}`)}
              >
                {sixData?.title}
              </p>
              <p className="text-sm">{limitText(sixData?.synopsis, 70)}</p>
            </CardFooter>
          </Card>

          <Card className="w-[238px] h-[350px] bg-gradient-to-br from-blue-300 to-indigo-300">
            <CardTitle className="text-center m-1 text-white text-lg font-bold">
              {mapGenre(sevenData?.genre)}
            </CardTitle>
            <CardContent className="flex items-center justify-center p-1">
              {sevenData && (
                <Image
                  className="rounded-r-lg hover:cursor-pointer"
                  src={sevenData?.image_url_cover}
                  width={120}
                  height={120}
                  alt="Action"
                  onClick={() => push(`/novels/details/${sevenData.novel_id}`)}
                />
              )}
            </CardContent>
            <CardFooter className="grid grid-cols-1">
              <p
                className="text-sm font-bold text-center hover:cursor-pointer"
                onClick={() => push(`/novels/details/${sevenData.novel_id}`)}
              >
                {sevenData?.title}
              </p>
              <p className="text-sm">{limitText(sevenData?.synopsis, 70)}</p>
            </CardFooter>
          </Card>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default Slider;
