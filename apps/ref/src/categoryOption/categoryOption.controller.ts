import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CategoryOptionService } from "./categoryOption.service";
import { CategoryOptionControllerBase } from "./base/categoryOption.controller.base";

@swagger.ApiTags("categoryOptions")
@common.Controller("categoryOptions")
export class CategoryOptionController extends CategoryOptionControllerBase {
  constructor(protected readonly service: CategoryOptionService) {
    super(service);
  }
}
