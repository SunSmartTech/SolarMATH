import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CategoryList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Categories"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Created By" source="createdBy" />
        <DateField source="createdOn" label="Created On" />
        <TextField label="ID" source="id" />
        <TextField label="Label" source="label" />
        <TextField label="Modified By" source="modifiedBy" />
        <DateField source="modifiedOn" label="Modified On" />
      </Datagrid>
    </List>
  );
};
