import { ManufacturerWhereInput } from "./ManufacturerWhereInput";
import { ManufacturerOrderByInput } from "./ManufacturerOrderByInput";

export type ManufacturerFindManyArgs = {
  where?: ManufacturerWhereInput;
  orderBy?: Array<ManufacturerOrderByInput>;
  skip?: number;
  take?: number;
};
