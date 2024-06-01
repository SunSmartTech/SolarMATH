import { CalculationTool } from "../calculationTool/CalculationTool";

export type CustomerProfile = {
  bestContactTimes?:
    | "middays"
    | "evenings"
    | "mornings"
    | "afternoons"
    | "any_time"
    | null;
  calculationTools?: Array<CalculationTool>;
  createdAt: Date;
  customerStatusId: number | null;
  customerType: string | null;
  email: string | null;
  firstname: string | null;
  id: string;
  lastname: string | null;
  notYetAssigned: boolean | null;
  phone: string | null;
  requirements: string | null;
  site_adress: string;
  updatedAt: Date;
};
