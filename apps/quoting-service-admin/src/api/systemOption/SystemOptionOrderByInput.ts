import { SortOrder } from "../../util/SortOrder";

export type SystemOptionOrderByInput = {
  cost?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  systemName?: SortOrder;
  updatedAt?: SortOrder;
};
