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
  picture: string;
  helmet: string;
  number: DriverNumber;
  signature: string;
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
}