import { Module } from "@nestjs/common";
import { CustomerProfileModuleBase } from "./base/customerProfile.module.base";
import { CustomerProfileService } from "./customerProfile.service";
import { CustomerProfileController } from "./customerProfile.controller";
import { CustomerProfileResolver } from "./customerProfile.resolver";

@Module({
  imports: [CustomerProfileModuleBase],
  controllers: [CustomerProfileController],
  providers: [CustomerProfileService, CustomerProfileResolver],
  exports: [CustomerProfileService],
})
export class CustomerProfileModule {}
