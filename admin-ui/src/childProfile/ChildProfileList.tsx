import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ChildProfileList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Child Profiles"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
