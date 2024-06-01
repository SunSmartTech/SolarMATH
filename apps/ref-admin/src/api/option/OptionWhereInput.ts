import { CategoryOptionListRelationFilter } from "../categoryOption/CategoryOptionListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type OptionWhereInput = {
  categoryOptions?: CategoryOptionListRelationFilter;
  createdBy?: StringNullableFilter;
  id?: StringFilter;
  label?: StringNullableFilter;
  modifiedBy?: StringNullableFilter;
  value?: StringNullableFilter;
};
