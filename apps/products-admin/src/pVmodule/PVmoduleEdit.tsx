import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { ManufacturerTitle } from "../manufacturer/ManufacturerTitle";

export const PVmoduleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Cell Quantity" source="cellQuantity" />
        <ReferenceInput
          source="manufacturer.id"
          reference="Manufacturer"
          label="Manufacturer"
        >
          <SelectInput optionText={ManufacturerTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Max PV Voltage" source="maxPvVoltage" />
        <TextInput label="Model" source="model" />
        <NumberInput step={1} label="Rated Power" source="ratedPower" />
        <NumberInput
          step={1}
          label="Temperature High °C"
          source="temperatureHighC"
        />
        <NumberInput
          step={1}
          label="Temperature Low °C"
          source="temperatureLowC"
        />
        <NumberInput label="Unit Price" source="unitPrice" />
      </SimpleForm>
    </Edit>
  );
};
