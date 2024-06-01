import { Option as TOption } from "../api/option/Option";

export const OPTION_TITLE_FIELD = "label";

export const OptionTitle = (record: TOption): string => {
  return record.label?.toString() || String(record.id);
};
