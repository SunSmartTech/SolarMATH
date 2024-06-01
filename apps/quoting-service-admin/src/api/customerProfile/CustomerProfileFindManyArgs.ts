import { CustomerProfileWhereInput } from "./CustomerProfileWhereInput";
import { CustomerProfileOrderByInput } from "./CustomerProfileOrderByInput";

export type CustomerProfileFindManyArgs = {
  where?: CustomerProfileWhereInput;
  orderBy?: Array<CustomerProfileOrderByInput>;
  skip?: number;
  take?: number;
};
