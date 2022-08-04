import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ChildProfileWhereUniqueInput } from "../childProfile/ChildProfileWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type UnitWhereInput = {
  additionalUnitInfomation?: StringNullableFilter;
  childProfile?: ChildProfileWhereUniqueInput;
  id?: StringFilter;
<<<<<<< HEAD
  name?: IntNullableFilter;
=======
  name?: StringFilter;
>>>>>>> 684be94395e655717b466a23a22fd2476256ef3e
  numberOfBedrooms?: IntNullableFilter;
  numberOfVacantRooms?: IntNullableFilter;
  postCode?: IntNullableFilter;
};
