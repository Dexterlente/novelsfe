"use client";
import React, { useState,useEffect } from "react";
import { Button } from "@/components/ui/button";
import RandomGenreBook from "./randomgenrebook";
import { useFetchSevenRandom } from "@/app/_components/hooks/useFetchSevenRandom";
import { useRouter } from "next/navigation";
import { GENRE, NEWGENRE } from "@/app/_components/enums/newgenre"


const Randomgenre = () => {
  const [toggler, setToggler] = useState(NEWGENRE.ACTION);

  const { push } = useRouter();

  const { data: firstData } = useFetchSevenRandom(NEWGENRE.ACTION);
  const { data: secondData } = useFetchSevenRandom(NEWGENRE.FANTASY);
  const { data: thirdData } = useFetchSevenRandom(NEWGENRE.ADVENTURE);
  const { data: fourthData } = useFetchSevenRandom(NEWGENRE.ROMANCE);
  const { data: fifthData } = useFetchSevenRandom(NEWGENRE.HAREM);
  const { data: sixData } = useFetchSevenRandom(NEWGENRE.COMEDY);
  const { data: sevenData } = useFetchSevenRandom(NEWGENRE.MARTIALARTS);
  return (
    <>
      <div>
        <Button
          className="lg:mr-1 xl:mr-2"
          variant={toggler === NEWGENRE.ACTION ? undefined : "outline"}
          onClick={() => setToggler(NEWGENRE.ACTION)}
        >
          {NEWGENRE.ACTION.toUpperCase()}
        </Button>
        <Button
          className="mr-2"
          variant={toggler === NEWGENRE.FANTASY ? undefined : "outline"}
          onClick={() => setToggler(NEWGENRE.FANTASY)}
        >
          {NEWGENRE.FANTASY.toUpperCase()}
        </Button>
        <Button
          className="mr-2"
          variant={toggler === NEWGENRE.ADVENTURE ? undefined : "outline"}
          onClick={() => setToggler(NEWGENRE.ADVENTURE)}
        >
           {NEWGENRE.ADVENTURE.toUpperCase()}
        </Button>
        <Button
          className="mr-2"
          variant={toggler === NEWGENRE.ROMANCE ? undefined : "outline"}
          onClick={() => setToggler(NEWGENRE.ROMANCE)}
        >
           {NEWGENRE.ROMANCE.toUpperCase()}
        </Button>
        <Button
          className="mr-2"
          variant={toggler === NEWGENRE.HAREM ? undefined : "outline"}
          onClick={() => setToggler(NEWGENRE.HAREM)}
        >
          {NEWGENRE.HAREM.toUpperCase()}
        </Button>
        <Button
          className="mr-2"
          variant={toggler === NEWGENRE.COMEDY ? undefined : "outline"}
          onClick={() => setToggler(NEWGENRE.COMEDY)}
        >
          {NEWGENRE.COMEDY.toUpperCase()}
        </Button>
        <Button
          className="mr-2"
          variant={toggler === NEWGENRE.MARTIALARTS ? undefined : "outline"}
          onClick={() => setToggler(NEWGENRE.MARTIALARTS)}
        >
          {NEWGENRE.MARTIALARTS.toUpperCase()}
        </Button>
      </div>
      <div>
        {toggler === NEWGENRE.ACTION && ( 
          <div>
            <RandomGenreBook data={firstData} />
          </div>
        )}
        {toggler === NEWGENRE.FANTASY && ( 
          <div>
            <RandomGenreBook data={secondData} /> 
          </div>
        )}
        {toggler === NEWGENRE.ADVENTURE && (
          <div>
            <RandomGenreBook data={thirdData} /> 
          </div>
        )} 
        {toggler === NEWGENRE.ROMANCE && (
          <div>
            <RandomGenreBook data={fourthData} />
          </div>
         )}
        {toggler === NEWGENRE.HAREM && (
          <div>
            <RandomGenreBook data={fifthData} />
          </div>
        )}
        {toggler === NEWGENRE.COMEDY && (
          <div>
            <RandomGenreBook data={sixData} />
          </div>
          )} 
        {toggler === NEWGENRE.MARTIALARTS && (
          <div>
            <RandomGenreBook data={sevenData} />
          </div>
        )}
      </div>
    </>
  );
};

export default Randomgenre;
