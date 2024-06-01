import { SortOrder } from "../../util/SortOrder";

export type PVmoduleOrderByInput = {
  cellQuantity?: SortOrder;
  id?: SortOrder;
  manufacturerId?: SortOrder;
  maxPvVoltage?: SortOrder;
  model?: SortOrder;
  ratedPower?: SortOrder;
  temperatureHighC?: SortOrder;
  temperatureLowC?: SortOrder;
  unitPrice?: SortOrder;
};
