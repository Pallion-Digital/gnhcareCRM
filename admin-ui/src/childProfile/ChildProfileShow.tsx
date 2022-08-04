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

import { CHILDPROFILE_TITLE_FIELD } from "./ChildProfileTitle";

export const ChildProfileShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Allergies" source="allergies" />
        <TextField label="Client Name" source="clientName" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Date of Birth" source="dateOfBirth" />
        <TextField label="Floating Support" source="floatingSupport" />
        <TextField label="Gender" source="gender" />
        <TextField label="ID" source="id" />
        <TextField label="Name of Key Worker" source="nameOfKeyWorker" />
        <TextField
          label="Semi Independent Living"
          source="semiIndependentLiving"
        />
        <TextField label="Placement Start Date" source="startDate" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="LocalAuthority"
          target="ChildProfileId"
          label="Local Authorities"
        >
          <Datagrid rowClick="show">
            <TextField label="Address 1" source="address_1" />
            <TextField label="Address 2" source="address_2" />
            <ReferenceField
              label="Child Profiles"
              source="childprofile.id"
              reference="ChildProfile"
            >
              <TextField source={CHILDPROFILE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Email" source="email" />
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <TextField label="Phone Number" source="phoneNumber" />
            <TextField label="PostCode" source="postCode" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Website" source="website" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Unit"
          target="ChildProfileId"
          label="Units"
        >
          <Datagrid rowClick="show">
            <TextField
              label="Additional Unit Infomation"
              source="additionalUnitInfomation"
            />
            <ReferenceField
              label="Child Profile"
              source="childprofile.id"
              reference="ChildProfile"
            >
              <TextField source={CHILDPROFILE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <TextField label="Number of Bedrooms" source="numberOfBedrooms" />
            <TextField
              label="Number of Vacant Rooms"
              source="numberOfVacantRooms"
            />
            <TextField label="Post Code" source="postCode" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
