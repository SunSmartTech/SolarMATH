import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";

export type SubCategoryUpdateInput = {
  category?: CategoryWhereUniqueInput;
  label?: string;
};
