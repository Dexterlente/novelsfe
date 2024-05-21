"use client";
import { GENRE } from "@/app/_components/enums/genre";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const Randomgenre = () => {
  const [toggler, setToggler] = useState(1);
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
        {toggler === GENRE.ACTION && <div>Action</div>}
        {toggler === GENRE.COMEDY && <div>Comedy</div>}
        {toggler === GENRE.ADVENTURE && <div>Adventure</div>}
        {toggler === GENRE.DRAMA && <div>Drama</div>}
        {toggler === GENRE.EASTERN && <div>Eastern</div>}
        {toggler === GENRE.FANTASY && <div>Fantasy</div>}
        {toggler === GENRE.HAREM && <div>Harem</div>}
      </div>
    </>
  );
};

export default Randomgenre;
