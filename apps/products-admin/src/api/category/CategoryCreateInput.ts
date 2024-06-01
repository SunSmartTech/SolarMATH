import { SubCategoryCreateNestedManyWithoutCategoriesInput } from "./SubCategoryCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  label: string;
  subCategories?: SubCategoryCreateNestedManyWithoutCategoriesInput;
};
