import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const OptionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Created By" source="createdBy" />
        <TextField label="ID" source="id" />
        <TextField label="Label" source="label" />
        <TextField label="Modified By" source="modifiedBy" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Value" source="value" />
      </SimpleShowLayout>
    </Show>
  );
};
