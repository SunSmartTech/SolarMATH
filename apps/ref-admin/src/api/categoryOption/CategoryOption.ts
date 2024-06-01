import { Category } from "../category/Category";
import { Option } from "../option/Option";

export type CategoryOption = {
  category?: Array<Category>;
  id: string;
  option?: Array<Option>;
};
