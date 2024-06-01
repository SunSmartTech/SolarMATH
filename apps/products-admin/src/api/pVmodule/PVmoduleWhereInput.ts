import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ManufacturerWhereUniqueInput } from "../manufacturer/ManufacturerWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type PVmoduleWhereInput = {
  cellQuantity?: IntNullableFilter;
  id?: StringFilter;
  manufacturer?: ManufacturerWhereUniqueInput;
  maxPvVoltage?: IntNullableFilter;
  model?: StringFilter;
  ratedPower?: IntNullableFilter;
  temperatureHighC?: IntNullableFilter;
  temperatureLowC?: IntNullableFilter;
  unitPrice?: FloatNullableFilter;
};
