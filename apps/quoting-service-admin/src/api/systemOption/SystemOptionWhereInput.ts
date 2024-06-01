import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type SystemOptionWhereInput = {
  cost?: FloatNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  systemName?: StringNullableFilter;
};
