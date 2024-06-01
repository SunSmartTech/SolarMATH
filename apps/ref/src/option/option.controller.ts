import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OptionService } from "./option.service";
import { OptionControllerBase } from "./base/option.controller.base";

@swagger.ApiTags("options")
@common.Controller("options")
export class OptionController extends OptionControllerBase {
  constructor(protected readonly service: OptionService) {
    super(service);
  }
}
