import { CategoryOptionUpdateManyWithoutCategoriesInput } from "./CategoryOptionUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  categoryOptions?: CategoryOptionUpdateManyWithoutCategoriesInput;
  createdBy?: string | null;
  label?: string;
  modifiedBy?: string | null;
};
