import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import RandomGenreBook from "./randomgenrebook";
import { useFetchSevenRandom } from "@/app/_components/hooks/useFetchSevenRandom";
import { NEWGENRE } from "@/app/_components/enums/newgenre";
import { useRouter } from "next/navigation";

const Randomgenre = () => {
  const [toggler, setToggler] = useState(NEWGENRE.ACTION);
  const [genre, setGenre] = useState(NEWGENRE.ACTION);

  const { push } = useRouter();

  const { data, isLoading } = useFetchSevenRandom(genre);

  useEffect(() => {
    setGenre(toggler);
  }, [toggler]);

  return (
    <>
      <div className="scroll-container overflow-x-auto whitespace-nowrap md:overflow-visible md:whitespace-normal">
        <div className="flex flex-nowrap">
            {Object.values(NEWGENRE).map((genreType) => (
              <Button
                key={genreType}
                className="mr-2"
                variant={toggler === genreType ? undefined : "outline"}
                onClick={() => setToggler(genreType)}
              >
                {genreType.toUpperCase()}
              </Button>
            ))}
          </div>
        </div>
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <RandomGenreBook data={data} />
        )}
      </div>
    </>
  );
};

export default Randomgenre;