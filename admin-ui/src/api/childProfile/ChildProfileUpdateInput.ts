import { LocalAuthorityUpdateManyWithoutChildProfilesInput } from "./LocalAuthorityUpdateManyWithoutChildProfilesInput";
import { UnitUpdateManyWithoutChildProfilesInput } from "./UnitUpdateManyWithoutChildProfilesInput";

export type ChildProfileUpdateInput = {
  allergies?: string | null;
  clientName?: string | null;
  dateOfBirth?: Date | null;
  floatingSupport?: "Yes" | "No" | null;
  gender?: "Male" | "Female" | null;
  localAuthorities?: LocalAuthorityUpdateManyWithoutChildProfilesInput;
  nameOfKeyWorker?: string | null;
  semiIndependentLiving?: "Yes" | "No" | null;
  startDate?: Date | null;
  units?: UnitUpdateManyWithoutChildProfilesInput;
};
