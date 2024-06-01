import { SystemOptionWhereInput } from "./SystemOptionWhereInput";
import { SystemOptionOrderByInput } from "./SystemOptionOrderByInput";

export type SystemOptionFindManyArgs = {
  where?: SystemOptionWhereInput;
  orderBy?: Array<SystemOptionOrderByInput>;
  skip?: number;
  take?: number;
};
