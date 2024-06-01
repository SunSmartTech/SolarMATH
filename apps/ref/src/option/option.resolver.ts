import * as graphql from "@nestjs/graphql";
import { OptionResolverBase } from "./base/option.resolver.base";
import { Option } from "./base/Option";
import { OptionService } from "./option.service";

@graphql.Resolver(() => Option)
export class OptionResolver extends OptionResolverBase {
  constructor(protected readonly service: OptionService) {
    super(service);
  }
}
