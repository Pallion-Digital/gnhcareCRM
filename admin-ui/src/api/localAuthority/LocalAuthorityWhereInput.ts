import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ChildProfileWhereUniqueInput } from "../childProfile/ChildProfileWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type LocalAuthorityWhereInput = {
  address_1?: StringNullableFilter;
  address_2?: StringNullableFilter;
  childProfiles?: ChildProfileWhereUniqueInput;
  email?: StringFilter;
  id?: StringFilter;
  name?: StringFilter;
  phoneNumber?: StringFilter;
  postCode?: IntNullableFilter;
  website?: StringNullableFilter;
};
