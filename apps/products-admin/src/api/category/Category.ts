import { SubCategory } from "../subCategory/SubCategory";

export type Category = {
  id: string;
  label: string;
  subCategories?: Array<SubCategory>;
};
