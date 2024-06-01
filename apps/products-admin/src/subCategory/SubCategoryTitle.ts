import { SubCategory as TSubCategory } from "../api/subCategory/SubCategory";

export const SUBCATEGORY_TITLE_FIELD = "label";

export const SubCategoryTitle = (record: TSubCategory): string => {
  return record.label?.toString() || String(record.id);
};
