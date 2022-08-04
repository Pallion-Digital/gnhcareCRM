import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { ChildProfileTitle } from "../childProfile/ChildProfileTitle";

export const UnitCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput
          label="Additional Unit Infomation"
          multiline
          source="additionalUnitInfomation"
        />
        <ReferenceInput
          source="childprofile.id"
          reference="ChildProfile"
          label="Child Profile"
        >
          <SelectInput optionText={ChildProfileTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Name" source="name" />
        <NumberInput
          step={1}
          label="Number of Bedrooms"
          source="numberOfBedrooms"
        />
        <NumberInput
          step={1}
          label="Number of Vacant Rooms"
          source="numberOfVacantRooms"
        />
        <NumberInput step={1} label="Post Code" source="postCode" />
      </SimpleForm>
    </Create>
  );
};
