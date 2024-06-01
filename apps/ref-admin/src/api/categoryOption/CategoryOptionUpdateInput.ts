import { CategoryUpdateManyWithoutCategoryOptionsInput } from "./CategoryUpdateManyWithoutCategoryOptionsInput";
import { OptionUpdateManyWithoutCategoryOptionsInput } from "./OptionUpdateManyWithoutCategoryOptionsInput";

export type CategoryOptionUpdateInput = {
  category?: CategoryUpdateManyWithoutCategoryOptionsInput;
  option?: OptionUpdateManyWithoutCategoryOptionsInput;
};
