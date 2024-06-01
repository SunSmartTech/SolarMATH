import { SortOrder } from "../../util/SortOrder";

export type ManufacturerOrderByInput = {
  createdBy?: SortOrder;
  createdOn?: SortOrder;
  displayOrder?: SortOrder;
  id?: SortOrder;
  label?: SortOrder;
  modifiedBy?: SortOrder;
  modifiedOn?: SortOrder;
  productTypes?: SortOrder;
};
