import { ChildProfileWhereUniqueInput } from "../childProfile/ChildProfileWhereUniqueInput";

export type UnitCreateInput = {
  additionalUnitInfomation?: string | null;
  childProfile?: ChildProfileWhereUniqueInput | null;
  name?: string | null;
  numberOfBedrooms?: number | null;
  numberOfVacantRooms?: number | null;
  postCode?: number | null;
};
