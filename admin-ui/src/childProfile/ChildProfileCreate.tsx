import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { LocalAuthorityTitle } from "../localAuthority/LocalAuthorityTitle";
import { UnitTitle } from "../unit/UnitTitle";

export const ChildProfileCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Allergies" multiline source="allergies" />
        <TextInput label="Client Name" source="clientName" />
        <DateTimeInput label="Date of Birth" source="dateOfBirth" />
        <SelectInput
          source="floatingSupport"
          label="Floating Support"
          choices={[
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="gender"
          label="Gender"
          choices={[
            { label: "Male", value: "Male" },
            { label: "Female", value: "Female" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceArrayInput
          source="localAuthorities"
          reference="LocalAuthority"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LocalAuthorityTitle} />
        </ReferenceArrayInput>
        <TextInput label="Name of Key Worker" source="nameOfKeyWorker" />
        <SelectInput
          source="semiIndependentLiving"
          label="Semi Independent Living"
          choices={[
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="Placement Start Date" source="startDate" />
        <ReferenceArrayInput
          source="units"
          reference="Unit"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UnitTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
