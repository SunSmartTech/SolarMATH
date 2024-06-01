import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CustomerProfileWhereUniqueInput } from "../customerProfile/CustomerProfileWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type CalculationToolWhereInput = {
  calculationDetails?: StringNullableFilter;
  customerProfile?: CustomerProfileWhereUniqueInput;
  id?: StringFilter;
  result?: JsonFilter;
  toolName?: StringNullableFilter;
};
