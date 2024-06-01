import { OptionWhereInput } from "./OptionWhereInput";
import { OptionOrderByInput } from "./OptionOrderByInput";

export type OptionFindManyArgs = {
  where?: OptionWhereInput;
  orderBy?: Array<OptionOrderByInput>;
  skip?: number;
  take?: number;
};
