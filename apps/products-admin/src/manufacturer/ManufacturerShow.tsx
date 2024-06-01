import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { MANUFACTURER_TITLE_FIELD } from "./ManufacturerTitle";

export const ManufacturerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Created By" source="createdBy" />
        <DateField source="createdOn" label="Created On" />
        <TextField label="Display Order" source="displayOrder" />
        <TextField label="ID" source="id" />
        <TextField label="Label" source="label" />
        <TextField label="Modified By" source="modifiedBy" />
        <DateField source="modifiedOn" label="Modified On" />
        <TextField label="Product Types" source="productTypes" />
        <ReferenceManyField
          reference="PVmodule"
          target="manufacturerId"
          label="PVmodules"
        >
          <Datagrid rowClick="show">
            <TextField label="Cell Quantity" source="cellQuantity" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Manufacturer"
              source="manufacturer.id"
              reference="Manufacturer"
            >
              <TextField source={MANUFACTURER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Max PV Voltage" source="maxPvVoltage" />
            <TextField label="Model" source="model" />
            <TextField label="Rated Power" source="ratedPower" />
            <TextField label="Temperature High °C" source="temperatureHighC" />
            <TextField label="Temperature Low °C" source="temperatureLowC" />
            <TextField label="Unit Price" source="unitPrice" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
