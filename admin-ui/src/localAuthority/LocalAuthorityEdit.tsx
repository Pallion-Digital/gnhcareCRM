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

export const LocalAuthorityEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Address 1" source="address_1" />
        <TextInput label="Address 2" source="address_2" />
        <ReferenceInput
          source="childprofile.id"
          reference="ChildProfile"
          label="Child Profiles"
        >
          <SelectInput optionText={ChildProfileTitle} />
        </ReferenceInput>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Name" source="name" />
        <TextInput label="Phone Number" source="phoneNumber" />
        <NumberInput step={1} label="PostCode" source="postCode" />
        <TextInput label="Website" source="website" />
      </SimpleForm>
    </Edit>
  );
};
