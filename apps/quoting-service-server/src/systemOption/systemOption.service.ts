import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SystemOptionServiceBase } from "./base/systemOption.service.base";

@Injectable()
export class SystemOptionService extends SystemOptionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
