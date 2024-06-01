import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  TextInput,
  BooleanInput,
} from "react-admin";

import { CalculationToolTitle } from "../calculationTool/CalculationToolTitle";

export const CustomerProfileCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="bestContactTimes"
          label="Best Contact Times"
          choices={[
            { label: "Middays", value: "middays" },
            { label: "Evenings", value: "evenings" },
            { label: "Mornings", value: "mornings" },
            { label: "Afternoons", value: "afternoons" },
            { label: "Any Time", value: "any_time" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceArrayInput
          source="calculationTools"
          reference="CalculationTool"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CalculationToolTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="Status" source="customerStatusId" />
        <TextInput label="Customer Type" source="customerType" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="Firstname" source="firstname" />
        <TextInput label="Lastname" source="lastname" />
        <BooleanInput label="Not Yet Assigned" source="notYetAssigned" />
        <TextInput label="Phone" source="phone" />
        <TextInput label="requirements" multiline source="requirements" />
        <TextInput label="Site Address" source="site_adress" />
      </SimpleForm>
    </Create>
  );
};
