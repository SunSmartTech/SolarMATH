import { ManufacturerWhereUniqueInput } from "../manufacturer/ManufacturerWhereUniqueInput";

export type PVmoduleUpdateInput = {
  cellQuantity?: number | null;
  manufacturer?: ManufacturerWhereUniqueInput;
  maxPvVoltage?: number | null;
  model?: string;
  ratedPower?: number | null;
  temperatureHighC?: number | null;
  temperatureLowC?: number | null;
  unitPrice?: number | null;
};
