import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PVmoduleModuleBase } from "./base/pVmodule.module.base";
import { PVmoduleService } from "./pVmodule.service";
import { PVmoduleController } from "./pVmodule.controller";
import { PVmoduleResolver } from "./pVmodule.resolver";

@Module({
  imports: [PVmoduleModuleBase, forwardRef(() => AuthModule)],
  controllers: [PVmoduleController],
  providers: [PVmoduleService, PVmoduleResolver],
  exports: [PVmoduleService],
})
export class PVmoduleModule {}
