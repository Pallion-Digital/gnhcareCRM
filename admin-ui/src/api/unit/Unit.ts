import { ChildProfile } from "../childProfile/ChildProfile";

export type Unit = {
  additionalUnitInfomation: string | null;
  childProfile?: ChildProfile | null;
  createdAt: Date;
  id: string;
  name: string;
  numberOfBedrooms: string | null;
  numberOfVacantRooms: string | null;
  postCode: number | null;
  updatedAt: Date;
};
