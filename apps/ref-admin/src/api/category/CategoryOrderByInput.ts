import { SortOrder } from "../../util/SortOrder";

export type CategoryOrderByInput = {
  createdBy?: SortOrder;
  createdOn?: SortOrder;
  id?: SortOrder;
  label?: SortOrder;
  modifiedBy?: SortOrder;
  modifiedOn?: SortOrder;
};
