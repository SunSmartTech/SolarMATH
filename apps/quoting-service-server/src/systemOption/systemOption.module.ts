import { Module } from "@nestjs/common";
import { SystemOptionModuleBase } from "./base/systemOption.module.base";
import { SystemOptionService } from "./systemOption.service";
import { SystemOptionController } from "./systemOption.controller";
import { SystemOptionResolver } from "./systemOption.resolver";

@Module({
  imports: [SystemOptionModuleBase],
  controllers: [SystemOptionController],
  providers: [SystemOptionService, SystemOptionResolver],
  exports: [SystemOptionService],
})
export class SystemOptionModule {}
