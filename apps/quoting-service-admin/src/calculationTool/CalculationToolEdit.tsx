import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CustomerProfileTitle } from "../customerProfile/CustomerProfileTitle";

export const CalculationToolEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
