import { PVmoduleUpdateManyWithoutManufacturersInput } from "./PVmoduleUpdateManyWithoutManufacturersInput";

export type ManufacturerUpdateInput = {
  createdBy?: string | null;
  displayOrder?: number | null;
  label?: string | null;
  modifiedBy?: string | null;
  productTypes?: string | null;
  pVmodules?: PVmoduleUpdateManyWithoutManufacturersInput;
};
