import { CustomerProfileWhereUniqueInput } from "../customerProfile/CustomerProfileWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type CalculationToolUpdateInput = {
  calculationDetails?: string | null;
  customerProfile?: CustomerProfileWhereUniqueInput | null;
  result?: InputJsonValue;
  toolName?: string | null;
};
