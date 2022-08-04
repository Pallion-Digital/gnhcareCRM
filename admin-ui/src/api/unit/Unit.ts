import { ChildProfile } from "../childProfile/ChildProfile";

export type Unit = {
  additionalUnitInfomation: string | null;
  childProfile?: ChildProfile | null;
  createdAt: Date;
  id: string;
  name: number | null;
  numberOfBedrooms: number | null;
  numberOfVacantRooms: number | null;
  postCode: number | null;
  updatedAt: Date;
};
