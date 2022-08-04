import { ChildProfile } from "../childProfile/ChildProfile";

export type Unit = {
  additionalUnitInfomation: string | null;
  childProfile?: ChildProfile | null;
  createdAt: Date;
  id: string;
<<<<<<< HEAD
  name: number | null;
=======
  name: string;
>>>>>>> 684be94395e655717b466a23a22fd2476256ef3e
  numberOfBedrooms: number | null;
  numberOfVacantRooms: number | null;
  postCode: number | null;
  updatedAt: Date;
};
