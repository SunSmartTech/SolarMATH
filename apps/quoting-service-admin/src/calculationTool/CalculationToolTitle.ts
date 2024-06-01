import { CalculationTool as TCalculationTool } from "../api/calculationTool/CalculationTool";

export const CALCULATIONTOOL_TITLE_FIELD = "toolName";

export const CalculationToolTitle = (record: TCalculationTool): string => {
  return record.toolName?.toString() || String(record.id);
};
