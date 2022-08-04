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

export const UnitList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Units"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
