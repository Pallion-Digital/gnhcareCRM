import { ChildProfileWhereUniqueInput } from "../childProfile/ChildProfileWhereUniqueInput";

export type UnitCreateInput = {
  additionalUnitInfomation?: string | null;
  childProfile?: ChildProfileWhereUniqueInput | null;
  name: string;
  numberOfBedrooms?: string | null;
  numberOfVacantRooms?: string | null;
  postCode?: number | null;
};
