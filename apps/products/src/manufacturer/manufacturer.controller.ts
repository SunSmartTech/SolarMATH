import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ManufacturerService } from "./manufacturer.service";
import { ManufacturerControllerBase } from "./base/manufacturer.controller.base";

@swagger.ApiTags("manufacturers")
@common.Controller("manufacturers")
export class ManufacturerController extends ManufacturerControllerBase {
  constructor(
    protected readonly service: ManufacturerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
