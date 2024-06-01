import { CalculationToolCreateNestedManyWithoutCustomerProfilesInput } from "./CalculationToolCreateNestedManyWithoutCustomerProfilesInput";

export type CustomerProfileCreateInput = {
  bestContactTimes?:
    | "middays"
    | "evenings"
    | "mornings"
    | "afternoons"
    | "any_time"
    | null;
  calculationTools?: CalculationToolCreateNestedManyWithoutCustomerProfilesInput;
  customerStatusId?: number | null;
  customerType?: string | null;
  email?: string | null;
  firstname?: string | null;
  lastname?: string | null;
  notYetAssigned?: boolean | null;
  phone?: string | null;
  requirements?: string | null;
  site_adress: string;
};
