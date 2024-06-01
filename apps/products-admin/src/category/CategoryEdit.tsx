import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { SubCategoryTitle } from "../subCategory/SubCategoryTitle";

export const CategoryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Label" source="label" />
        <ReferenceArrayInput
          source="subCategories"
          reference="SubCategory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SubCategoryTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
