import { ChildProfile } from "../childProfile/ChildProfile";

export type LocalAuthority = {
  address_1: string | null;
  address_2: string | null;
  childProfiles?: ChildProfile | null;
  createdAt: Date;
  email: string;
  id: string;
  name: string;
  phoneNumber: string;
  postCode: number | null;
  updatedAt: Date;
  website: string | null;
};
