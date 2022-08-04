import { ChildProfile as TChildProfile } from "../api/childProfile/ChildProfile";

export const CHILDPROFILE_TITLE_FIELD = "clientName";

export const ChildProfileTitle = (record: TChildProfile): string => {
  return record.clientName || record.id;
};
