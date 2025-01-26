import React, { useEffect, useState } from "react";
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
import  useFetchSingleRandom  from "@/app/_components/hooks/useFetchSingleRandom";
import Image from "next/image";
import { limitText } from "@/app/_components/utils/limittext";
import { mapGenre } from "@/app/_components/enums/genre";
import { useRouter } from "next/navigation";
import { GENRE } from "@/app/_components/enums/newgenre"
import SliderCard from "./sliderCard";

const Slider = () => {
  const [shuffledGenres, setShuffledGenres] = useState<string[]>([]);

  useEffect(() => {
    // Shuffle the GENRE array and pick the first 8 genres
    const shuffled = [...GENRE].sort(() => Math.random() - 0.5).slice(0, 8);
    setShuffledGenres(shuffled);
  }, []); 

  const { data: firstData } = useFetchSingleRandom(shuffledGenres[0]);
  const { data: secondData } = useFetchSingleRandom(shuffledGenres[1]);
  const { data: thirdData } = useFetchSingleRandom(shuffledGenres[2]);
  const { data: fourthData } = useFetchSingleRandom(shuffledGenres[3]);
  const { data: fifthData } = useFetchSingleRandom(shuffledGenres[4]);
  const { data: sixData } = useFetchSingleRandom(shuffledGenres[5]);
  const { data: sevenData } = useFetchSingleRandom(shuffledGenres[6]);
  const { data: eightData } = useFetchSingleRandom(shuffledGenres[7]);

  const { push } = useRouter();

  const placeHolderImage = `/overgeared.jpg`
  const limit = 100

  return (
    <Carousel className="max-w-5xl">
      <CarouselContent>
        <CarouselItem className="flex justify-center xl:justify-start gap-3 xl:gap-10">
          <SliderCard data={firstData} title={shuffledGenres[0]} bgGradient="from-blue-500 to-purple-500" />
          <SliderCard data={secondData} title={shuffledGenres[1]} bgGradient="from-yellow-600 to-pink-500" />
          <SliderCard data={thirdData} title={shuffledGenres[2]} bgGradient="from-teal-900 to-blue-500" />
          <SliderCard data={fourthData} title={shuffledGenres[3]} bgGradient="from-purple-900 to-white hidden lg:block" />     
        </CarouselItem>
        <CarouselItem className="flex justify-center xl:justify-start gap-3 xl:gap-10">
          <SliderCard data={fifthData} title={shuffledGenres[4]} bgGradient="from-pink-900 to-gray-300" />
          <SliderCard data={sixData} title={shuffledGenres[5]} bgGradient="from-blue-300 to-green-300" />
          <SliderCard data={sevenData} title={shuffledGenres[6]} bgGradient="from-blue-300 to-indigo-300" />
          <SliderCard data={eightData} title={shuffledGenres[7]} bgGradient="from-red-300 to-orange-300 hidden lg:block" />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default Slider;
