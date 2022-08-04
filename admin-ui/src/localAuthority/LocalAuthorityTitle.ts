import { LocalAuthority as TLocalAuthority } from "../api/localAuthority/LocalAuthority";

export const LOCALAUTHORITY_TITLE_FIELD = "id";

export const LocalAuthorityTitle = (record: TLocalAuthority): string => {
  return record.id || record.id;
};
