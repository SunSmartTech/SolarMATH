import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CUSTOMERPROFILE_TITLE_FIELD } from "../customerProfile/CustomerProfileTitle";

export const CalculationToolList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"CalculationTools"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
