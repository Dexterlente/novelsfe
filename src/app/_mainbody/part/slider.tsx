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

// Always maintain 8 hooks regardless of content
const INITIAL_GENRES = Array(8).fill('');

const Slider = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [shuffledGenres, setShuffledGenres] = useState<string[]>(INITIAL_GENRES);

  useEffect(() => {
    const shuffled = [...GENRE].sort(() => Math.random() - 0.5).slice(0, 8);
    setShuffledGenres(shuffled);
    setIsMounted(true);
  }, []);

  // Maintain 8 consistent hooks regardless of genre state
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
    return null; // Don't render on server or during initial mount
  }

  const chunkedData = [];
  for (let i = 0; i < data.length; i += 4) {
    chunkedData.push(data.slice(i, i + 4));
  }

  return (
    <Carousel className="max-w-5xl">
      <CarouselContent>
        {chunkedData.map((chunk, chunkIndex) => (
          <CarouselItem 
            key={chunkIndex}
            className="flex justify-center xl:justify-start gap-5 xl:gap-10"
          >
            {chunk.map((itemData, index) => {
              const configIndex = chunkIndex * 4 + index;
              return (
                <SliderCard
                  key={configIndex}
                  data={itemData}
                  title={shuffledGenres[configIndex]}
                  bgGradient={SLIDER_CARD_CONFIGS[configIndex].bgGradient}
                  className={SLIDER_CARD_CONFIGS[configIndex].hidden}
                />
              );
            })}
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Slider;