import { ChildProfileWhereUniqueInput } from "../childProfile/ChildProfileWhereUniqueInput";

export type UnitUpdateInput = {
  additionalUnitInfomation?: string | null;
  childProfile?: ChildProfileWhereUniqueInput | null;
<<<<<<< HEAD
  name?: number | null;
=======
  name?: string;
>>>>>>> 684be94395e655717b466a23a22fd2476256ef3e
  numberOfBedrooms?: number | null;
  numberOfVacantRooms?: number | null;
  postCode?: number | null;
};
