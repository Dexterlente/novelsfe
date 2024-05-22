"use client";
import { GENRE } from "@/app/_components/enums/genre";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import RandomGenreBook from "./randomgenrebook";
import { useFetchSevenRandom } from "@/app/_components/hooks/useFetchSevenRandom";

const Randomgenre = () => {
  const [toggler, setToggler] = useState(1);

  const { data: firstData } = useFetchSevenRandom(1);
  const { data: secondData } = useFetchSevenRandom(2);
  const { data: thirdData } = useFetchSevenRandom(3);
  const { data: fourthData } = useFetchSevenRandom(4);
  const { data: fifthData } = useFetchSevenRandom(5);
  const { data: sixData } = useFetchSevenRandom(6);
  const { data: sevenData } = useFetchSevenRandom(7);
  return (
    <>
      <div>
        <Button
          className="mr-2"
          variant={toggler === GENRE.ACTION ? undefined : "outline"}
          onClick={() => setToggler(GENRE.ACTION)}
        >
          ACTION
        </Button>
        <Button
          className="mr-2"
          variant={toggler === GENRE.COMEDY ? undefined : "outline"}
          onClick={() => setToggler(GENRE.COMEDY)}
        >
          COMEDY
        </Button>
        <Button
          className="mr-2"
          variant={toggler === GENRE.ADVENTURE ? undefined : "outline"}
          onClick={() => setToggler(GENRE.ADVENTURE)}
        >
          ADVENTURE
        </Button>
        <Button
          className="mr-2"
          variant={toggler === GENRE.DRAMA ? undefined : "outline"}
          onClick={() => setToggler(GENRE.DRAMA)}
        >
          DRAMA
        </Button>
        <Button
          className="mr-2"
          variant={toggler === GENRE.EASTERN ? undefined : "outline"}
          onClick={() => setToggler(GENRE.EASTERN)}
        >
          EASTERN
        </Button>
        <Button
          className="mr-2"
          variant={toggler === GENRE.FANTASY ? undefined : "outline"}
          onClick={() => setToggler(GENRE.FANTASY)}
        >
          FANTASY
        </Button>
        <Button
          className="mr-2"
          variant={toggler === GENRE.HAREM ? undefined : "outline"}
          onClick={() => setToggler(GENRE.HAREM)}
        >
          HAREM
        </Button>
      </div>
      <div>
        {toggler === GENRE.ACTION && (
          <div>
            <RandomGenreBook data={firstData} />
          </div>
        )}
        {toggler === GENRE.COMEDY && (
          <div>
            {" "}
            <RandomGenreBook data={secondData} />
          </div>
        )}
        {toggler === GENRE.ADVENTURE && (
          <div>
            {" "}
            <RandomGenreBook data={thirdData} />
          </div>
        )}
        {toggler === GENRE.DRAMA && (
          <div>
            {" "}
            <RandomGenreBook data={fourthData} />
          </div>
        )}
        {toggler === GENRE.EASTERN && (
          <div>
            {" "}
            <RandomGenreBook data={fifthData} />
          </div>
        )}
        {toggler === GENRE.FANTASY && (
          <div>
            {" "}
            <RandomGenreBook data={sixData} />
          </div>
        )}
        {toggler === GENRE.HAREM && (
          <div>
            {" "}
            <RandomGenreBook data={sevenData} />
          </div>
        )}
      </div>
    </>
  );
};

export default Randomgenre;
