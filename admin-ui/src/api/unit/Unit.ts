import { ChildProfile } from "../childProfile/ChildProfile";

export type Unit = {
  additionalUnitInfomation: string | null;
  childProfile?: ChildProfile | null;
  createdAt: Date;
  id: string;
  name: string;
  numberOfBedrooms: number | null;
  numberOfVacantRooms: number | null;
  postCode: number | null;
  updatedAt: Date;
};
