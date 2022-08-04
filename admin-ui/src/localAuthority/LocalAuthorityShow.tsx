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

export const LocalAuthorityShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
