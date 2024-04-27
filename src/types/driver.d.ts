import { Country, Team } from "./index";

export type Driver = {
  id: number;
  firstname: string;
  lastname: string;
  nickname: string | null;
  birth: Date;
  death: Date | null;
  races: number;
  victories: number;
  championships: number;
  podiums: number;
  points: number;
  debut: Date;
  retire: Date | null;
  country: Country;
  picture: Media;
  helmet: string;
  number: DriverNumber;
  signature: Media;
  season: number;
  team: Team;
};

export type DriverNumber = {
  digit: number;
  icon: DriverIcon;
};

export type DriverIcon = {
  normal: string;
  border: string;
  oneColor: string;
  image: string;
};

export type Media = {
  avif: string;
  webp: string;
  png: string;
};
