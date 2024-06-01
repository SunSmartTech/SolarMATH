import { PVmodule as TPVmodule } from "../api/pVmodule/PVmodule";

export const PVMODULE_TITLE_FIELD = "model";

export const PVmoduleTitle = (record: TPVmodule): string => {
  return record.model?.toString() || String(record.id);
};
