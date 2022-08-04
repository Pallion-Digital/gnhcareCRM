import { LocalAuthority } from "../localAuthority/LocalAuthority";
import { Unit } from "../unit/Unit";

export type ChildProfile = {
  allergies: string | null;
  clientName: string | null;
  createdAt: Date;
  dateOfBirth: Date | null;
  floatingSupport?: "Yes" | "No" | null;
  gender?: "Male" | "Female" | null;
  id: string;
  localAuthorities?: Array<LocalAuthority>;
  nameOfKeyWorker: string | null;
  semiIndependentLiving?: "Yes" | "No" | null;
  startDate: Date | null;
  units?: Array<Unit>;
  updatedAt: Date;
};
