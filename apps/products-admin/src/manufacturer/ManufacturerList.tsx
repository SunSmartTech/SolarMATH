import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ManufacturerList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Manufacturers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Created By" source="createdBy" />
        <DateField source="createdOn" label="Created On" />
        <TextField label="Display Order" source="displayOrder" />
        <TextField label="ID" source="id" />
        <TextField label="Label" source="label" />
        <TextField label="Modified By" source="modifiedBy" />
        <DateField source="modifiedOn" label="Modified On" />
        <TextField label="Product Types" source="productTypes" />
      </Datagrid>
    </List>
  );
};
