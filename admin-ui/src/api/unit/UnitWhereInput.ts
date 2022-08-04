import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ChildProfileWhereUniqueInput } from "../childProfile/ChildProfileWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type UnitWhereInput = {
  additionalUnitInfomation?: StringNullableFilter;
  childProfile?: ChildProfileWhereUniqueInput;
  id?: StringFilter;
  name?: StringFilter;
  numberOfBedrooms?: IntNullableFilter;
  numberOfVacantRooms?: IntNullableFilter;
  postCode?: IntNullableFilter;
};
