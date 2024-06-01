import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type SubCategoryWhereInput = {
  category?: CategoryWhereUniqueInput;
  id?: StringFilter;
  label?: StringFilter;
};
