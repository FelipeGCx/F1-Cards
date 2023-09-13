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
