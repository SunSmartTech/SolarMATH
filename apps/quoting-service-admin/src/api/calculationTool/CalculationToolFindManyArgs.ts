import { CalculationToolWhereInput } from "./CalculationToolWhereInput";
import { CalculationToolOrderByInput } from "./CalculationToolOrderByInput";

export type CalculationToolFindManyArgs = {
  where?: CalculationToolWhereInput;
  orderBy?: Array<CalculationToolOrderByInput>;
  skip?: number;
  take?: number;
};
