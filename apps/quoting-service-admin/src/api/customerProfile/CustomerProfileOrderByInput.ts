import { SortOrder } from "../../util/SortOrder";

export type CustomerProfileOrderByInput = {
  bestContactTimes?: SortOrder;
  createdAt?: SortOrder;
  customerStatusId?: SortOrder;
  customerType?: SortOrder;
  email?: SortOrder;
  firstname?: SortOrder;
  id?: SortOrder;
  lastname?: SortOrder;
  notYetAssigned?: SortOrder;
  phone?: SortOrder;
  requirements?: SortOrder;
  site_adress?: SortOrder;
  updatedAt?: SortOrder;
};
