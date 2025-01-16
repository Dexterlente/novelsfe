export const GENRE = [
    'Action',
    'Fantasy',
    'Adventure',
    'Harem',
    'Romance',
    'Comedy',
    'Supernatural',
    'Mystery',
    'Martial Arts',
    'School Life',
    'Mature',
    'Slice of Life',
    'Tragedy',
    'Drama',
    'Psychological',
    'Video Games',
    'Xianxia',
    'Sci-fi',
    'Xuanhuan',
    'Shounen',
    'Seinen',
    'Wuxia',
    'Eastern Fantasy',
    'Horror',
    'Adult',
    'Ecchi',
    'Historical',
    'Magical Realism',
    'Smut',
    'Josei',
    'Mecha',
    'Fantasy Romance',
    'Sports',
  ]
  

  export enum NEWGENRE {
    ACTION = "action",
    FANTASY = "fantasy",
    ADVENTURE = "adventure",
    ROMANCE = "romance",
    HAREM = "harem",
    COMEDY = "comedy",
    MARTIALARTS = "martial arts",
  }
  
  export const mapGenre = (genre: NEWGENRE): string => {
    return genre || "UNKNOWN";
  };
  
  