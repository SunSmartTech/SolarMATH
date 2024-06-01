import { PVmodule } from "../pVmodule/PVmodule";

export type Manufacturer = {
  createdBy: string | null;
  createdOn: Date;
  displayOrder: number | null;
  id: string;
  label: string | null;
  modifiedBy: string | null;
  modifiedOn: Date;
  productTypes: string | null;
  pVmodules?: Array<PVmodule>;
};
