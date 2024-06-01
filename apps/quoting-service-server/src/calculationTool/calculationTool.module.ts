import { Module } from "@nestjs/common";
import { CalculationToolModuleBase } from "./base/calculationTool.module.base";
import { CalculationToolService } from "./calculationTool.service";
import { CalculationToolController } from "./calculationTool.controller";
import { CalculationToolResolver } from "./calculationTool.resolver";

@Module({
  imports: [CalculationToolModuleBase],
  controllers: [CalculationToolController],
  providers: [CalculationToolService, CalculationToolResolver],
  exports: [CalculationToolService],
})
export class CalculationToolModule {}
