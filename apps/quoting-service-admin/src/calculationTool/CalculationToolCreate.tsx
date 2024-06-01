import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CustomerProfileTitle } from "../customerProfile/CustomerProfileTitle";

export const CalculationToolCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput
          label="calculationDetails"
          multiline
          source="calculationDetails"
        />
        <ReferenceInput
          source="customerProfile.id"
          reference="CustomerProfile"
          label="CustomerProfile"
        >
          <SelectInput optionText={CustomerProfileTitle} />
        </ReferenceInput>
        <div />
        <TextInput label="toolName" source="toolName" />
      </SimpleForm>
    </Create>
  );
};
