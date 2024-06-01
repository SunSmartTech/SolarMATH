import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PVmoduleService } from "./pVmodule.service";
import { PVmoduleControllerBase } from "./base/pVmodule.controller.base";

@swagger.ApiTags("pVmodules")
@common.Controller("pVmodules")
export class PVmoduleController extends PVmoduleControllerBase {
  constructor(
    protected readonly service: PVmoduleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
