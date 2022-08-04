import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { ChildProfileTitle } from "../childProfile/ChildProfileTitle";

export const UnitEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
        <TextInput label="Name" source="name" />
        <TextInput label="Number of Bedrooms" source="numberOfBedrooms" />
        <TextInput
          label="Number of Vacant Rooms"
          source="numberOfVacantRooms"
        />
        <NumberInput step={1} label="Post Code" source="postCode" />
      </SimpleForm>
    </Edit>
  );
};
