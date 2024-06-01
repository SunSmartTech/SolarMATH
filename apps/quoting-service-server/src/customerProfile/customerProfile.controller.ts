import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CustomerProfileService } from "./customerProfile.service";
import { CustomerProfileControllerBase } from "./base/customerProfile.controller.base";

@swagger.ApiTags("customerProfiles")
@common.Controller("customerProfiles")
export class CustomerProfileController extends CustomerProfileControllerBase {
  constructor(protected readonly service: CustomerProfileService) {
    super(service);
  }
}
