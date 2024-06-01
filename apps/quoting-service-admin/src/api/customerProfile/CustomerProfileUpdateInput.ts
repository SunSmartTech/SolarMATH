import { CalculationToolUpdateManyWithoutCustomerProfilesInput } from "./CalculationToolUpdateManyWithoutCustomerProfilesInput";

export type CustomerProfileUpdateInput = {
  bestContactTimes?:
    | "middays"
    | "evenings"
    | "mornings"
    | "afternoons"
    | "any_time"
    | null;
  calculationTools?: CalculationToolUpdateManyWithoutCustomerProfilesInput;
  customerStatusId?: number | null;
  customerType?: string | null;
  email?: string | null;
  firstname?: string | null;
  lastname?: string | null;
  notYetAssigned?: boolean | null;
  phone?: string | null;
  requirements?: string | null;
  site_adress?: string;
};
