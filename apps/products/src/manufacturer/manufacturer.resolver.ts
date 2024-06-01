import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ManufacturerResolverBase } from "./base/manufacturer.resolver.base";
import { Manufacturer } from "./base/Manufacturer";
import { ManufacturerService } from "./manufacturer.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Manufacturer)
export class ManufacturerResolver extends ManufacturerResolverBase {
  constructor(
    protected readonly service: ManufacturerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
