export interface ICharacter {
  characterIndex: number;
  name: string;
  gender: string;
  birthYear: string;
  eyeColor: string;
  skinColor: string;
}

export interface IPlanet {
  planetIndex: number;
  name: string;
  population: string;
  climate: string;
  gravity: string;
}

export const CHARACTERS: { [key: string]: ICharacter } = {
  anakin: {
    characterIndex: 2,
    name: "Anakin Skywalker",
    gender: "male",
    birthYear: "41.9BBY",
    eyeColor: "blue",
    skinColor: "fair",
  },
  luke: {
    characterIndex: 1,
    name: "Luke Skywalker",
    gender: "male",
    birthYear: "19BBY",
    eyeColor: "blue",
    skinColor: "fair",
  },
  luminara: {
    characterIndex: 2,
    name: "Luminara Unduli",
    gender: "male",
    birthYear: "58BBY",
    eyeColor: "blue",
    skinColor: "yellow",
  },
  shmi: {
    characterIndex: 3,
    name: "Shmi Skywalker",
    gender: "female",
    birthYear: "72BBY",
    eyeColor: "brown",
    skinColor: "fair",
  },
};

export const PLANETS: { [key: string]: IPlanet } = {
  hoth: {
    planetIndex: 1,
    name: "Hoth",
    population: "unknown",
    climate: "frozen",
    gravity: "1.1 standard",
  },
};
