export enum GENRE {
  ACTION = 1,
  COMEDY = 2,
  ADVENTURE = 3,
  DRAMA = 4,
  EASTERN = 5,
  FANTASY = 6,
  HAREM = 7,
}

export const mapGenre = (genre: number): string => {
  switch (genre) {
    case GENRE.ACTION:
      return "Action";
    case GENRE.COMEDY:
      return "Comedy";
    case GENRE.ADVENTURE:
      return "Adventure";
    case GENRE.DRAMA:
      return "Drama";
    case GENRE.EASTERN:
      return "Eastern";
    case GENRE.FANTASY:
      return "Fantasy";
    case GENRE.HAREM:
      return "Harem";
    default:
      return "UNKNOWN";
  }
};

// TRY