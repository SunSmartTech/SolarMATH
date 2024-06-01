import { CategoryOptionListRelationFilter } from "../categoryOption/CategoryOptionListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type CategoryWhereInput = {
  categoryOptions?: CategoryOptionListRelationFilter;
  createdBy?: StringNullableFilter;
  id?: StringFilter;
  modifiedBy?: StringNullableFilter;
  modifiedOn?: DateTimeNullableFilter;
};
