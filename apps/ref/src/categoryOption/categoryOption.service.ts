import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CategoryOptionServiceBase } from "./base/categoryOption.service.base";

@Injectable()
export class CategoryOptionService extends CategoryOptionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
