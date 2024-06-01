import { CategoryListRelationFilter } from "../category/CategoryListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { OptionListRelationFilter } from "../option/OptionListRelationFilter";

export type CategoryOptionWhereInput = {
  category?: CategoryListRelationFilter;
  id?: StringFilter;
  option?: OptionListRelationFilter;
};
