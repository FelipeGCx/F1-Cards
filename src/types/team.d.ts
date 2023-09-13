import { Country, Scudery } from "./index";

export type Team = {
  id: number;
  name: string;
  picture: string;
  chasis: string;
  engine: string;
  city: string;
  color: string;
  country: Country;
  scudery: Scudery;
  season: number;
};
