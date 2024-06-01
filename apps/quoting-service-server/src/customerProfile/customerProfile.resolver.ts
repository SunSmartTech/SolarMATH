import * as graphql from "@nestjs/graphql";
import { CustomerProfileResolverBase } from "./base/customerProfile.resolver.base";
import { CustomerProfile } from "./base/CustomerProfile";
import { CustomerProfileService } from "./customerProfile.service";

@graphql.Resolver(() => CustomerProfile)
export class CustomerProfileResolver extends CustomerProfileResolverBase {
  constructor(protected readonly service: CustomerProfileService) {
    super(service);
  }
}
