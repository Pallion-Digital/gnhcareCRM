import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CHILDPROFILE_TITLE_FIELD } from "../childProfile/ChildProfileTitle";

export const LocalAuthorityList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Local Authorities"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
