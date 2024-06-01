import { CategoryOptionCreateNestedManyWithoutCategoriesInput } from "./CategoryOptionCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  categoryOptions?: CategoryOptionCreateNestedManyWithoutCategoriesInput;
  createdBy?: string | null;
  label: string;
  modifiedBy?: string | null;
};
