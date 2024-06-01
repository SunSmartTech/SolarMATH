import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SystemOptionService } from "./systemOption.service";
import { SystemOptionControllerBase } from "./base/systemOption.controller.base";

@swagger.ApiTags("systemOptions")
@common.Controller("systemOptions")
export class SystemOptionController extends SystemOptionControllerBase {
  constructor(protected readonly service: SystemOptionService) {
    super(service);
  }
}
