import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PVmoduleTitle } from "../pVmodule/PVmoduleTitle";

export const ManufacturerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Created By" source="createdBy" />
        <NumberInput step={1} label="Display Order" source="displayOrder" />
        <TextInput label="Label" source="label" />
        <TextInput label="Modified By" source="modifiedBy" />
        <TextInput label="Product Types" source="productTypes" />
        <ReferenceArrayInput
          source="pVmodules"
          reference="PVmodule"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PVmoduleTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
