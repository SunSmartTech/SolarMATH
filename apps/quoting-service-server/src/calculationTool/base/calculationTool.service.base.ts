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
  CalculationTool as PrismaCalculationTool,
  CustomerProfile as PrismaCustomerProfile,
} from "@prisma/client";

export class CalculationToolServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.CalculationToolCountArgs, "select">
  ): Promise<number> {
    return this.prisma.calculationTool.count(args);
  }

  async calculationTools<T extends Prisma.CalculationToolFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CalculationToolFindManyArgs>
  ): Promise<PrismaCalculationTool[]> {
    return this.prisma.calculationTool.findMany<Prisma.CalculationToolFindManyArgs>(
      args
    );
  }
  async calculationTool<T extends Prisma.CalculationToolFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CalculationToolFindUniqueArgs>
  ): Promise<PrismaCalculationTool | null> {
    return this.prisma.calculationTool.findUnique(args);
  }
  async createCalculationTool<T extends Prisma.CalculationToolCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CalculationToolCreateArgs>
  ): Promise<PrismaCalculationTool> {
    return this.prisma.calculationTool.create<T>(args);
  }
  async updateCalculationTool<T extends Prisma.CalculationToolUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CalculationToolUpdateArgs>
  ): Promise<PrismaCalculationTool> {
    return this.prisma.calculationTool.update<T>(args);
  }
  async deleteCalculationTool<T extends Prisma.CalculationToolDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CalculationToolDeleteArgs>
  ): Promise<PrismaCalculationTool> {
    return this.prisma.calculationTool.delete(args);
  }

  async getCustomerProfile(
    parentId: string
  ): Promise<PrismaCustomerProfile | null> {
    return this.prisma.calculationTool
      .findUnique({
        where: { id: parentId },
      })
      .customerProfile();
  }
}