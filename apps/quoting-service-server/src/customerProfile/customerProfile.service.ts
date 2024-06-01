import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CustomerProfileServiceBase } from "./base/customerProfile.service.base";

@Injectable()
export class CustomerProfileService extends CustomerProfileServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
