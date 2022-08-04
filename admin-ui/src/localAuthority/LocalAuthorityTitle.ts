import { LocalAuthority as TLocalAuthority } from "../api/localAuthority/LocalAuthority";

export const LOCALAUTHORITY_TITLE_FIELD = "name";

export const LocalAuthorityTitle = (record: TLocalAuthority): string => {
  return record.name || record.id;
};
