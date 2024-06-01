import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const CustomerProfileList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"CustomerProfiles"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
