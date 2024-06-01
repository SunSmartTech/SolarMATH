import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { CategoryOptionTitle } from "../categoryOption/CategoryOptionTitle";

export const CategoryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
