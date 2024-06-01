import { CalculationToolListRelationFilter } from "../calculationTool/CalculationToolListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CustomerProfileWhereInput = {
  bestContactTimes?:
    | "middays"
    | "evenings"
    | "mornings"
    | "afternoons"
    | "any_time";
  calculationTools?: CalculationToolListRelationFilter;
  customerStatusId?: IntNullableFilter;
  customerType?: StringNullableFilter;
  email?: StringNullableFilter;
  firstname?: StringNullableFilter;
  id?: StringFilter;
  lastname?: StringNullableFilter;
  phone?: StringNullableFilter;
  requirements?: StringNullableFilter;
  site_adress?: StringFilter;
};
