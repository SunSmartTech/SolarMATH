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
  Manufacturer as PrismaManufacturer,
  PVmodule as PrismaPVmodule,
} from "@prisma/client";

export class ManufacturerServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ManufacturerCountArgs, "select">
  ): Promise<number> {
    return this.prisma.manufacturer.count(args);
  }

  async manufacturers<T extends Prisma.ManufacturerFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ManufacturerFindManyArgs>
  ): Promise<PrismaManufacturer[]> {
    return this.prisma.manufacturer.findMany<Prisma.ManufacturerFindManyArgs>(
      args
    );
  }
  async manufacturer<T extends Prisma.ManufacturerFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ManufacturerFindUniqueArgs>
  ): Promise<PrismaManufacturer | null> {
    return this.prisma.manufacturer.findUnique(args);
  }
  async createManufacturer<T extends Prisma.ManufacturerCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ManufacturerCreateArgs>
  ): Promise<PrismaManufacturer> {
    return this.prisma.manufacturer.create<T>(args);
  }
  async updateManufacturer<T extends Prisma.ManufacturerUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ManufacturerUpdateArgs>
  ): Promise<PrismaManufacturer> {
    return this.prisma.manufacturer.update<T>(args);
  }
  async deleteManufacturer<T extends Prisma.ManufacturerDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ManufacturerDeleteArgs>
  ): Promise<PrismaManufacturer> {
    return this.prisma.manufacturer.delete(args);
  }

  async findPVmodules(
    parentId: string,
    args: Prisma.PVmoduleFindManyArgs
  ): Promise<PrismaPVmodule[]> {
    return this.prisma.manufacturer
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .pVmodules(args);
  }
}