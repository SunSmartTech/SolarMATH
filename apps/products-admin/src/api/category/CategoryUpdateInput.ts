import { SubCategoryUpdateManyWithoutCategoriesInput } from "./SubCategoryUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  label?: string;
  subCategories?: SubCategoryUpdateManyWithoutCategoriesInput;
};
