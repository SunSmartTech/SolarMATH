import { CategoryOption } from "../categoryOption/CategoryOption";

export type Option = {
  categoryOptions?: Array<CategoryOption>;
  createdAt: Date;
  createdBy: string | null;
  id: string;
  label: string | null;
  modifiedBy: string | null;
  updatedAt: Date;
  value: string | null;
};
