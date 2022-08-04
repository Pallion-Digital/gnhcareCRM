import { ChildProfileWhereUniqueInput } from "../childProfile/ChildProfileWhereUniqueInput";

export type LocalAuthorityCreateInput = {
  address_1?: string | null;
  address_2?: string | null;
  childProfiles?: ChildProfileWhereUniqueInput | null;
  email: string;
  name: string;
  phoneNumber: string;
  postCode?: number | null;
  website?: string | null;
};
