import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
} from "react-admin";
import { MANUFACTURER_TITLE_FIELD } from "../manufacturer/ManufacturerTitle";

export const PVmoduleShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
