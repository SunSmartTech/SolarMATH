import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const CategoryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Created By" source="createdBy" />
        <TextInput label="Label" source="label" />
        <TextInput label="Modified By" source="modifiedBy" />
      </SimpleForm>
    </Create>
  );
};
