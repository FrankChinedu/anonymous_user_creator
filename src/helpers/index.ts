import { uniqueNamesGenerator, Config, names } from "unique-names-generator";

const config: Config = {
  dictionaries: [names],
};

export const getRandomName = (): string => {
  const characterName: string = uniqueNamesGenerator(config);
  return characterName;
};
