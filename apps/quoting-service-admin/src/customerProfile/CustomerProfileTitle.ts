import { CustomerProfile as TCustomerProfile } from "../api/customerProfile/CustomerProfile";

export const CUSTOMERPROFILE_TITLE_FIELD = "firstname";

export const CustomerProfileTitle = (record: TCustomerProfile): string => {
  return record.firstname?.toString() || String(record.id);
};
