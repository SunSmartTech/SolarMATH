import { CategoryOptionUpdateManyWithoutOptionsInput } from "./CategoryOptionUpdateManyWithoutOptionsInput";

export type OptionUpdateInput = {
  categoryOptions?: CategoryOptionUpdateManyWithoutOptionsInput;
  createdBy?: string | null;
  label?: string | null;
  modifiedBy?: string | null;
  value?: string | null;
};
