import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { CategoryOptionTitle } from "../categoryOption/CategoryOptionTitle";

export const CategoryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="categoryOptions"
          reference="CategoryOption"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CategoryOptionTitle} />
        </ReferenceArrayInput>
        <TextInput label="Created By" source="createdBy" />
        <TextInput label="Label" source="label" />
        <TextInput label="Modified By" source="modifiedBy" />
      </SimpleForm>
    </Create>
  );
};
