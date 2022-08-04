import { ChildProfileWhereUniqueInput } from "../childProfile/ChildProfileWhereUniqueInput";

export type UnitUpdateInput = {
  additionalUnitInfomation?: string | null;
  childProfile?: ChildProfileWhereUniqueInput | null;
  name?: number | null;
  numberOfBedrooms?: number | null;
  numberOfVacantRooms?: number | null;
  postCode?: number | null;
};
