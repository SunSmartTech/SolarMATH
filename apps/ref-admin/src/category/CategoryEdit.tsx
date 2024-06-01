import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const CategoryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Created By" source="createdBy" />
        <TextInput label="Label" source="label" />
        <TextInput label="Modified By" source="modifiedBy" />
      </SimpleForm>
    </Edit>
  );
};
