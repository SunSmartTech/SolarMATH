/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Option as PrismaOption,
  CategoryOption as PrismaCategoryOption,
} from "@prisma/client";

export class OptionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.OptionCountArgs, "select">): Promise<number> {
    return this.prisma.option.count(args);
  }

  async options<T extends Prisma.OptionFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.OptionFindManyArgs>
  ): Promise<PrismaOption[]> {
    return this.prisma.option.findMany<Prisma.OptionFindManyArgs>(args);
  }
  async option<T extends Prisma.OptionFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.OptionFindUniqueArgs>
  ): Promise<PrismaOption | null> {
    return this.prisma.option.findUnique(args);
  }
  async createOption<T extends Prisma.OptionCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OptionCreateArgs>
  ): Promise<PrismaOption> {
    return this.prisma.option.create<T>(args);
  }
  async updateOption<T extends Prisma.OptionUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OptionUpdateArgs>
  ): Promise<PrismaOption> {
    return this.prisma.option.update<T>(args);
  }
  async deleteOption<T extends Prisma.OptionDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.OptionDeleteArgs>
  ): Promise<PrismaOption> {
    return this.prisma.option.delete(args);
  }

  async findCategoryOptions(
    parentId: string,
    args: Prisma.CategoryOptionFindManyArgs
  ): Promise<PrismaCategoryOption[]> {
    return this.prisma.option
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .categoryOptions(args);
  }
}
