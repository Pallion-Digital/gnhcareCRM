import { ChildProfileWhereInput } from "./ChildProfileWhereInput";
import { ChildProfileOrderByInput } from "./ChildProfileOrderByInput";

export type ChildProfileFindManyArgs = {
  where?: ChildProfileWhereInput;
  orderBy?: Array<ChildProfileOrderByInput>;
  skip?: number;
  take?: number;
};
