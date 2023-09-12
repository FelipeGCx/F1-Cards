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
  season: number;
  team: Team;
};

export type DriverNumber = {
  digit: number;
  icon: string;
};

export type Team = {
  id: number;
  name: string;
  scudery: Scudery;
  country: Country;
};

export type Scudery = {
  id: number;
  name: string;
  icon: string;
};

export type Country = {
  id: number;
  name: string;
  iso: string;
  flag: Flag;
};

export type Flag = {
  fullscreen: string;
  widescreen: string;
};
