import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OptionServiceBase } from "./base/option.service.base";

@Injectable()
export class OptionService extends OptionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
