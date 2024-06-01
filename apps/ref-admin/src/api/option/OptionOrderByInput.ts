import { SortOrder } from "../../util/SortOrder";

export type OptionOrderByInput = {
  createdAt?: SortOrder;
  createdBy?: SortOrder;
  id?: SortOrder;
  label?: SortOrder;
  modifiedBy?: SortOrder;
  updatedAt?: SortOrder;
  value?: SortOrder;
};
