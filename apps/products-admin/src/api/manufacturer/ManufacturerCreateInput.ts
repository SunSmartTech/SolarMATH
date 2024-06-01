import { PVmoduleCreateNestedManyWithoutManufacturersInput } from "./PVmoduleCreateNestedManyWithoutManufacturersInput";

export type ManufacturerCreateInput = {
  createdBy?: string | null;
  displayOrder?: number | null;
  label?: string | null;
  modifiedBy?: string | null;
  productTypes?: string | null;
  pVmodules?: PVmoduleCreateNestedManyWithoutManufacturersInput;
};
