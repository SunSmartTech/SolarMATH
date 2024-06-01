import { CategoryOptionWhereInput } from "./CategoryOptionWhereInput";
import { CategoryOptionOrderByInput } from "./CategoryOptionOrderByInput";

export type CategoryOptionFindManyArgs = {
  where?: CategoryOptionWhereInput;
  orderBy?: Array<CategoryOptionOrderByInput>;
  skip?: number;
  take?: number;
};
