import { Manufacturer as TManufacturer } from "../api/manufacturer/Manufacturer";

export const MANUFACTURER_TITLE_FIELD = "createdBy";

export const ManufacturerTitle = (record: TManufacturer): string => {
  return record.createdBy?.toString() || String(record.id);
};
