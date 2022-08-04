import { LocalAuthorityCreateNestedManyWithoutChildProfilesInput } from "./LocalAuthorityCreateNestedManyWithoutChildProfilesInput";
import { UnitCreateNestedManyWithoutChildProfilesInput } from "./UnitCreateNestedManyWithoutChildProfilesInput";

export type ChildProfileCreateInput = {
  allergies?: string | null;
  clientName?: string | null;
  dateOfBirth?: Date | null;
  floatingSupport?: "Yes" | "No" | null;
  gender?: "Male" | "Female" | null;
  localAuthorities?: LocalAuthorityCreateNestedManyWithoutChildProfilesInput;
  nameOfKeyWorker?: string | null;
  semiIndependentLiving?: "Yes" | "No" | null;
  startDate?: Date | null;
  units?: UnitCreateNestedManyWithoutChildProfilesInput;
};
