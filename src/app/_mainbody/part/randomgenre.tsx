"use client";
import React, { useState,useEffect } from "react";
import { Button } from "@/components/ui/button";
import RandomGenreBook from "./randomgenrebook";
import { useFetchSevenRandom } from "@/app/_components/hooks/useFetchSevenRandom";
import { useRouter } from "next/navigation";
import { GENRE } from "@/app/_components/enums/newgenre"


const Randomgenre = () => {
  const [toggler, setToggler] = useState(1);
    const [shuffledGenres, setShuffledGenres] = useState<string[]>([]);
  
    useEffect(() => {
      // Shuffle the GENRE array and pick the first 8 genres
      const shuffled = [...GENRE].sort(() => Math.random() - 0.5).slice(0, 8);
      setShuffledGenres(shuffled);
    }, []); 

  const { push } = useRouter();

  const { data: firstData } = useFetchSevenRandom(shuffledGenres[0]);
  // const { data: secondData } = useFetchSevenRandom(shuffledGenres[1]);
  // const { data: thirdData } = useFetchSevenRandom(shuffledGenres[2]);
  // const { data: fourthData } = useFetchSevenRandom(shuffledGenres[4]);
  // const { data: fifthData } = useFetchSevenRandom(shuffledGenres[5]);
  // const { data: sixData } = useFetchSevenRandom(shuffledGenres[6]);
  // const { data: sevenData } = useFetchSevenRandom(shuffledGenres[7]);
  return (
    <>
      <div>
        <Button
          className="lg:mr-1 xl:mr-2"
          // variant={toggler === GENRE.ACTION ? undefined : "outline"}
          // onClick={() => setToggler(GENRE.ACTION)}
        >
          ACTION
        </Button>
        <Button
          className="mr-2"
          // variant={toggler === GENRE.COMEDY ? undefined : "outline"}
          // onClick={() => setToggler(GENRE.COMEDY)}
        >
          COMEDY
        </Button>
        <Button
          className="mr-2"
          // variant={toggler === GENRE.ADVENTURE ? undefined : "outline"}
          // onClick={() => setToggler(GENRE.ADVENTURE)}
        >
          ADVENTURE
        </Button>
        <Button
          className="mr-2"
          // variant={toggler === GENRE.DRAMA ? undefined : "outline"}
          // onClick={() => setToggler(GENRE.DRAMA)}
        >
          DRAMA
        </Button>
        <Button
          className="mr-2"
          // variant={toggler === GENRE.EASTERN ? undefined : "outline"}
          // onClick={() => setToggler(GENRE.EASTERN)}
        >
          EASTERN
        </Button>
        <Button
          className="mr-2"
          // variant={toggler === GENRE.FANTASY ? undefined : "outline"}
          // onClick={() => setToggler(GENRE.FANTASY)}
        >
          FANTASY
        </Button>
        <Button
          className="mr-2"
          // variant={toggler === GENRE.HAREM ? undefined : "outline"}
          // onClick={() => setToggler(GENRE.HAREM)}
        >
          HAREM
        </Button>
      </div>
      <div>
        {/* {toggler === GENRE.ACTION && ( */}
          <div>
            <RandomGenreBook data={firstData} />
          </div>
        {/* )}
        {toggler === GENRE.COMEDY && ( */}
          <div>
            {" "}
            {/* <RandomGenreBook data={secondData} /> */}
          </div>
        {/* )}
        {toggler === GENRE.ADVENTURE && ( */}
          <div>
            {" "}
            {/* <RandomGenreBook data={thirdData} /> */}
          </div>
        {/* )} */}
        {/* {toggler === GENRE.DRAMA && ( */}
          <div>
            {" "}
            {/* <RandomGenreBook data={fourthData} /> */}
          </div>
        {/* )}
        {toggler === GENRE.EASTERN && ( */}
          <div>
            {" "}
            {/* <RandomGenreBook data={fifthData} /> */}
          </div>
        {/* )}
        {toggler === GENRE.FANTASY && ( */}
          <div>
            {" "}
            {/* <RandomGenreBook data={sixData} /> */}
          </div>
        {/* )}
        {toggler === GENRE.HAREM && ( */}
          <div>
            {" "}
            {/* <RandomGenreBook data={sevenData} /> */}
          </div>
        {/* )} */}
      </div>
    </>
  );
};

export default Randomgenre;
