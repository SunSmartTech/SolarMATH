import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ManufacturerModuleBase } from "./base/manufacturer.module.base";
import { ManufacturerService } from "./manufacturer.service";
import { ManufacturerController } from "./manufacturer.controller";
import { ManufacturerResolver } from "./manufacturer.resolver";

@Module({
  imports: [ManufacturerModuleBase, forwardRef(() => AuthModule)],
  controllers: [ManufacturerController],
  providers: [ManufacturerService, ManufacturerResolver],
  exports: [ManufacturerService],
})
export class ManufacturerModule {}
