import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import useFetchSingleRandom from "@/app/_components/hooks/useFetchSingleRandom";
import { GENRE } from "@/app/_components/enums/newgenre";
import SliderCard from "./sliderCard";

const SLIDER_CARD_CONFIGS = [
  { bgGradient: "from-blue-500 to-purple-500", hidden: "" },
  { bgGradient: "from-yellow-600 to-pink-500", hidden: "" },
  { bgGradient: "from-teal-900 to-blue-500", hidden: "hidden sm:block" },
  { bgGradient: "from-purple-900 to-white", hidden: "hidden lg:block" },
  { bgGradient: "from-pink-900 to-gray-300", hidden: "" },
  { bgGradient: "from-blue-300 to-green-300", hidden: "" },
  { bgGradient: "from-blue-300 to-indigo-300", hidden: "hidden sm:block" },
  { bgGradient: "from-red-300 to-orange-300", hidden: "hidden lg:block" },
];

const INITIAL_GENRES = Array(8).fill('');

const Slider = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [shuffledGenres, setShuffledGenres] = useState<string[]>(INITIAL_GENRES);

  useEffect(() => {
    const shuffled = [...GENRE].sort(() => Math.random() - 0.5).slice(0, 8);
    setShuffledGenres(shuffled);
    setIsMounted(true);
  }, []);

  const data = [
    useFetchSingleRandom(shuffledGenres[0]).data,
    useFetchSingleRandom(shuffledGenres[1]).data,
    useFetchSingleRandom(shuffledGenres[2]).data,
    useFetchSingleRandom(shuffledGenres[3]).data,
    useFetchSingleRandom(shuffledGenres[4]).data,
    useFetchSingleRandom(shuffledGenres[5]).data,
    useFetchSingleRandom(shuffledGenres[6]).data,
    useFetchSingleRandom(shuffledGenres[7]).data,
  ];

  if (!isMounted) {
    return null;
  }

  return (
  <Carousel className="max-w-5xl w-full">
    <CarouselContent className="pl-0 ml-0 sm:gap-4">
      {data.map((itemData, index) => {
        const configIndex = index;
        return (
          <CarouselItem 
            key={index}
            className="pl-0 basis-1/2 sm:basis-1/3 md:basis-1/4 flex justify-center"
          >
            <SliderCard
              data={itemData}
              title={shuffledGenres[configIndex]}
              bgGradient={SLIDER_CARD_CONFIGS[configIndex].bgGradient}
              className={SLIDER_CARD_CONFIGS[configIndex].hidden}
            />
          </CarouselItem>
        );
      })}
    </CarouselContent>
  </Carousel>
  );
};

export default Slider;