import { Manufacturer } from "../manufacturer/Manufacturer";

export type PVmodule = {
  cellQuantity: number | null;
  id: string;
  manufacturer?: Manufacturer;
  maxPvVoltage: number | null;
  model: string;
  ratedPower: number | null;
  temperatureHighC: number | null;
  temperatureLowC: number | null;
  unitPrice: number | null;
};
