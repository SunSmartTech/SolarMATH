import { StringFilter } from "../../util/StringFilter";
import { SubCategoryListRelationFilter } from "../subCategory/SubCategoryListRelationFilter";

export type CategoryWhereInput = {
  id?: StringFilter;
  label?: StringFilter;
  subCategories?: SubCategoryListRelationFilter;
};
