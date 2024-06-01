import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const SystemOptionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="cost" source="cost" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="systemName" source="systemName" />
      </SimpleForm>
    </Edit>
  );
};
