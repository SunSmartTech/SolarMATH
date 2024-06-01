import { CategoryOption } from "../categoryOption/CategoryOption";

export type Category = {
  categoryOptions?: Array<CategoryOption>;
  createdBy: string | null;
  createdOn: Date;
  id: string;
  label: string;
  modifiedBy: string | null;
  modifiedOn: Date | null;
};
