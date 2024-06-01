import { Module } from "@nestjs/common";
import { CategoryOptionModuleBase } from "./base/categoryOption.module.base";
import { CategoryOptionService } from "./categoryOption.service";
import { CategoryOptionController } from "./categoryOption.controller";
import { CategoryOptionResolver } from "./categoryOption.resolver";

@Module({
  imports: [CategoryOptionModuleBase],
  controllers: [CategoryOptionController],
  providers: [CategoryOptionService, CategoryOptionResolver],
  exports: [CategoryOptionService],
})
export class CategoryOptionModule {}
