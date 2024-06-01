import * as graphql from "@nestjs/graphql";
import { SystemOptionResolverBase } from "./base/systemOption.resolver.base";
import { SystemOption } from "./base/SystemOption";
import { SystemOptionService } from "./systemOption.service";

@graphql.Resolver(() => SystemOption)
export class SystemOptionResolver extends SystemOptionResolverBase {
  constructor(protected readonly service: SystemOptionService) {
    super(service);
  }
}
