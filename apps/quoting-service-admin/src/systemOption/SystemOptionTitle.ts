import { SystemOption as TSystemOption } from "../api/systemOption/SystemOption";

export const SYSTEMOPTION_TITLE_FIELD = "systemName";

export const SystemOptionTitle = (record: TSystemOption): string => {
  return record.systemName?.toString() || String(record.id);
};
