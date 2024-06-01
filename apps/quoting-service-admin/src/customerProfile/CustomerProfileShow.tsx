import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CUSTOMERPROFILE_TITLE_FIELD } from "./CustomerProfileTitle";

export const CustomerProfileShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Best Contact Times" source="bestContactTimes" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Status" source="customerStatusId" />
        <TextField label="Customer Type" source="customerType" />
        <TextField label="email" source="email" />
        <TextField label="Firstname" source="firstname" />
        <TextField label="ID" source="id" />
        <TextField label="Lastname" source="lastname" />
        <BooleanField label="Not Yet Assigned" source="notYetAssigned" />
        <TextField label="Phone" source="phone" />
        <TextField label="requirements" source="requirements" />
        <TextField label="Site Address" source="site_adress" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="CalculationTool"
          target="customerProfileId"
          label="CalculationTools"
        >
          <Datagrid rowClick="show">
            <TextField label="calculationDetails" source="calculationDetails" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="CustomerProfile"
              source="customerprofile.id"
              reference="CustomerProfile"
            >
              <TextField source={CUSTOMERPROFILE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="result" source="result" />
            <TextField label="toolName" source="toolName" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
