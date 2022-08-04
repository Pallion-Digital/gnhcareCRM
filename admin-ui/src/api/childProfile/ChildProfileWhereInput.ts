import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LocalAuthorityListRelationFilter } from "../localAuthority/LocalAuthorityListRelationFilter";
import { UnitListRelationFilter } from "../unit/UnitListRelationFilter";

export type ChildProfileWhereInput = {
  allergies?: StringNullableFilter;
  clientName?: StringNullableFilter;
  dateOfBirth?: DateTimeNullableFilter;
  floatingSupport?: "Yes" | "No";
  gender?: "Male" | "Female";
  id?: StringFilter;
  localAuthorities?: LocalAuthorityListRelationFilter;
  nameOfKeyWorker?: StringNullableFilter;
  semiIndependentLiving?: "Yes" | "No";
  startDate?: DateTimeNullableFilter;
  units?: UnitListRelationFilter;
};
