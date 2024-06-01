import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PVmoduleListRelationFilter } from "../pVmodule/PVmoduleListRelationFilter";

export type ManufacturerWhereInput = {
  createdBy?: StringNullableFilter;
  createdOn?: DateTimeFilter;
  displayOrder?: IntNullableFilter;
  id?: StringFilter;
  label?: StringNullableFilter;
  modifiedBy?: StringNullableFilter;
  modifiedOn?: DateTimeFilter;
  productTypes?: StringNullableFilter;
  pVmodules?: PVmoduleListRelationFilter;
};
