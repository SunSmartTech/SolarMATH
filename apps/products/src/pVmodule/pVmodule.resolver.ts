import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PVmoduleResolverBase } from "./base/pVmodule.resolver.base";
import { PVmodule } from "./base/PVmodule";
import { PVmoduleService } from "./pVmodule.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PVmodule)
export class PVmoduleResolver extends PVmoduleResolverBase {
  constructor(
    protected readonly service: PVmoduleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
