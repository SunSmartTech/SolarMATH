import { CategoryOptionCreateNestedManyWithoutOptionsInput } from "./CategoryOptionCreateNestedManyWithoutOptionsInput";

export type OptionCreateInput = {
  categoryOptions?: CategoryOptionCreateNestedManyWithoutOptionsInput;
  createdBy?: string | null;
  label?: string | null;
  modifiedBy?: string | null;
  value?: string | null;
};
