import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { CUSTOMERPROFILE_TITLE_FIELD } from "../customerProfile/CustomerProfileTitle";

export const CalculationToolShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
