import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ManufacturerServiceBase } from "./base/manufacturer.service.base";

@Injectable()
export class ManufacturerService extends ManufacturerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
