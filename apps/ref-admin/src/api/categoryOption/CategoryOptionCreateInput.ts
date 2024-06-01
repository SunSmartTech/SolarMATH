import { CategoryCreateNestedManyWithoutCategoryOptionsInput } from "./CategoryCreateNestedManyWithoutCategoryOptionsInput";
import { OptionCreateNestedManyWithoutCategoryOptionsInput } from "./OptionCreateNestedManyWithoutCategoryOptionsInput";

export type CategoryOptionCreateInput = {
  category?: CategoryCreateNestedManyWithoutCategoryOptionsInput;
  option?: OptionCreateNestedManyWithoutCategoryOptionsInput;
};
