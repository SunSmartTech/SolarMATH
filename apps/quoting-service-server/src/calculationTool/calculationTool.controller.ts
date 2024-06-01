import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CalculationToolService } from "./calculationTool.service";
import { CalculationToolControllerBase } from "./base/calculationTool.controller.base";

@swagger.ApiTags("calculationTools")
@common.Controller("calculationTools")
export class CalculationToolController extends CalculationToolControllerBase {
  constructor(protected readonly service: CalculationToolService) {
    super(service);
  }
}
