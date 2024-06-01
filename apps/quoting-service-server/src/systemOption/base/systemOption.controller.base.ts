/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { SystemOptionService } from "../systemOption.service";
import { SystemOptionCreateInput } from "./SystemOptionCreateInput";
import { SystemOption } from "./SystemOption";
import { SystemOptionFindManyArgs } from "./SystemOptionFindManyArgs";
import { SystemOptionWhereUniqueInput } from "./SystemOptionWhereUniqueInput";
import { SystemOptionUpdateInput } from "./SystemOptionUpdateInput";

export class SystemOptionControllerBase {
  constructor(protected readonly service: SystemOptionService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SystemOption })
  async createSystemOption(
    @common.Body() data: SystemOptionCreateInput
  ): Promise<SystemOption> {
    return await this.service.createSystemOption({
      data: data,
      select: {
        cost: true,
        createdAt: true,
        description: true,
        id: true,
        systemName: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [SystemOption] })
  @ApiNestedQuery(SystemOptionFindManyArgs)
  async systemOptions(@common.Req() request: Request): Promise<SystemOption[]> {
    const args = plainToClass(SystemOptionFindManyArgs, request.query);
    return this.service.systemOptions({
      ...args,
      select: {
        cost: true,
        createdAt: true,
        description: true,
        id: true,
        systemName: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SystemOption })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async systemOption(
    @common.Param() params: SystemOptionWhereUniqueInput
  ): Promise<SystemOption | null> {
    const result = await this.service.systemOption({
      where: params,
      select: {
        cost: true,
        createdAt: true,
        description: true,
        id: true,
        systemName: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: SystemOption })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateSystemOption(
    @common.Param() params: SystemOptionWhereUniqueInput,
    @common.Body() data: SystemOptionUpdateInput
  ): Promise<SystemOption | null> {
    try {
      return await this.service.updateSystemOption({
        where: params,
        data: data,
        select: {
          cost: true,
          createdAt: true,
          description: true,
          id: true,
          systemName: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: SystemOption })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteSystemOption(
    @common.Param() params: SystemOptionWhereUniqueInput
  ): Promise<SystemOption | null> {
    try {
      return await this.service.deleteSystemOption({
        where: params,
        select: {
          cost: true,
          createdAt: true,
          description: true,
          id: true,
          systemName: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}