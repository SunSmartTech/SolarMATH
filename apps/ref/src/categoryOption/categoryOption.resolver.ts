import * as graphql from "@nestjs/graphql";
import { CategoryOptionResolverBase } from "./base/categoryOption.resolver.base";
import { CategoryOption } from "./base/CategoryOption";
import { CategoryOptionService } from "./categoryOption.service";

@graphql.Resolver(() => CategoryOption)
export class CategoryOptionResolver extends CategoryOptionResolverBase {
  constructor(protected readonly service: CategoryOptionService) {
    super(service);
  }
}
