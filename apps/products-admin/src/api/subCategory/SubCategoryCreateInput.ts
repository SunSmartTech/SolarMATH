import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";

export type SubCategoryCreateInput = {
  category: CategoryWhereUniqueInput;
  label: string;
};
