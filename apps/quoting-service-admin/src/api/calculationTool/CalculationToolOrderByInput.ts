import { SortOrder } from "../../util/SortOrder";

export type CalculationToolOrderByInput = {
  calculationDetails?: SortOrder;
  createdAt?: SortOrder;
  customerProfileId?: SortOrder;
  id?: SortOrder;
  result?: SortOrder;
  toolName?: SortOrder;
  updatedAt?: SortOrder;
};
