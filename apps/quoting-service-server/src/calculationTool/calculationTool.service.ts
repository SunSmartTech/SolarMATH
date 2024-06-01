import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CalculationToolServiceBase } from "./base/calculationTool.service.base";

@Injectable()
export class CalculationToolService extends CalculationToolServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
