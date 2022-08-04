import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import { CHILDPROFILE_TITLE_FIELD } from "../childProfile/ChildProfileTitle";

export const UnitShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
