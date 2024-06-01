import { Category as TCategory } from "../api/category/Category";

export const CATEGORY_TITLE_FIELD = "label";

export const CategoryTitle = (record: TCategory): string => {
  return record.label?.toString() || String(record.id);
};
