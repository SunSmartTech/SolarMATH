import { CustomerProfile } from "../customerProfile/CustomerProfile";
import { JsonValue } from "type-fest";

export type CalculationTool = {
  calculationDetails: string | null;
  createdAt: Date;
  customerProfile?: CustomerProfile | null;
  id: string;
  result: JsonValue;
  toolName: string | null;
  updatedAt: Date;
};
