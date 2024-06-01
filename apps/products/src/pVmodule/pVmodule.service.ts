import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PVmoduleServiceBase } from "./base/pVmodule.service.base";

@Injectable()
export class PVmoduleService extends PVmoduleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
