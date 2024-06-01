/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CategoryOption } from "./CategoryOption";
import { CategoryOptionCountArgs } from "./CategoryOptionCountArgs";
import { CategoryOptionFindManyArgs } from "./CategoryOptionFindManyArgs";
import { CategoryOptionFindUniqueArgs } from "./CategoryOptionFindUniqueArgs";
import { CreateCategoryOptionArgs } from "./CreateCategoryOptionArgs";
import { UpdateCategoryOptionArgs } from "./UpdateCategoryOptionArgs";
import { DeleteCategoryOptionArgs } from "./DeleteCategoryOptionArgs";
import { CategoryFindManyArgs } from "../../category/base/CategoryFindManyArgs";
import { Category } from "../../category/base/Category";
import { OptionFindManyArgs } from "../../option/base/OptionFindManyArgs";
import { Option } from "../../option/base/Option";
import { CategoryOptionService } from "../categoryOption.service";
@graphql.Resolver(() => CategoryOption)
export class CategoryOptionResolverBase {
  constructor(protected readonly service: CategoryOptionService) {}

  async _categoryOptionsMeta(
    @graphql.Args() args: CategoryOptionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [CategoryOption])
  async categoryOptions(
    @graphql.Args() args: CategoryOptionFindManyArgs
  ): Promise<CategoryOption[]> {
    return this.service.categoryOptions(args);
  }

  @graphql.Query(() => CategoryOption, { nullable: true })
  async categoryOption(
    @graphql.Args() args: CategoryOptionFindUniqueArgs
  ): Promise<CategoryOption | null> {
    const result = await this.service.categoryOption(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => CategoryOption)
  async createCategoryOption(
    @graphql.Args() args: CreateCategoryOptionArgs
  ): Promise<CategoryOption> {
    return await this.service.createCategoryOption({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => CategoryOption)
  async updateCategoryOption(
    @graphql.Args() args: UpdateCategoryOptionArgs
  ): Promise<CategoryOption | null> {
    try {
      return await this.service.updateCategoryOption({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => CategoryOption)
  async deleteCategoryOption(
    @graphql.Args() args: DeleteCategoryOptionArgs
  ): Promise<CategoryOption | null> {
    try {
      return await this.service.deleteCategoryOption(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Category], { name: "category" })
  async findCategory(
    @graphql.Parent() parent: CategoryOption,
    @graphql.Args() args: CategoryFindManyArgs
  ): Promise<Category[]> {
    const results = await this.service.findCategory(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Option], { name: "option" })
  async findOption(
    @graphql.Parent() parent: CategoryOption,
    @graphql.Args() args: OptionFindManyArgs
  ): Promise<Option[]> {
    const results = await this.service.findOption(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}