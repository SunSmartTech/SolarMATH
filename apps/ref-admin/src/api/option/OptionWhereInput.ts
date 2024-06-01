import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type OptionWhereInput = {
  createdBy?: StringNullableFilter;
  id?: StringFilter;
  label?: StringNullableFilter;
  modifiedBy?: StringNullableFilter;
  value?: StringNullableFilter;
};
