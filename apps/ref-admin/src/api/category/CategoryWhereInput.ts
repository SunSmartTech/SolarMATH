import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type CategoryWhereInput = {
  createdBy?: StringNullableFilter;
  id?: StringFilter;
  modifiedBy?: StringNullableFilter;
  modifiedOn?: DateTimeNullableFilter;
};
