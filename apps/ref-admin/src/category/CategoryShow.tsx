import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const CategoryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Created By" source="createdBy" />
        <DateField source="createdOn" label="Created On" />
        <TextField label="ID" source="id" />
        <TextField label="Label" source="label" />
        <TextField label="Modified By" source="modifiedBy" />
        <DateField source="modifiedOn" label="Modified On" />
      </SimpleShowLayout>
    </Show>
  );
};
