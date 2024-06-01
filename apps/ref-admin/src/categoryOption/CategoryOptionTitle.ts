import { CategoryOption as TCategoryOption } from "../api/categoryOption/CategoryOption";

export const CATEGORYOPTION_TITLE_FIELD = "id";

export const CategoryOptionTitle = (record: TCategoryOption): string => {
  return record.id?.toString() || String(record.id);
};
