import { Country } from ".";

export type MeasurementSystem = {
  km: number;
  miles: number;
};

export type Turn = {
  total: number;
  left: number;
  right: number;
};
export type City = {
  name: string;
};

export type Circuit = {
  id: number;
  name: string;
  distance: MeasurementSystem;
  length: MeasurementSystem;
  tunrs: Turn;
  debut: number;
  laps: number;
  type: string; // maybe a enum is better option
  image: string;
  city: City;
  country: Country;
};
