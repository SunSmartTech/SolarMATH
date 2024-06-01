import * as graphql from "@nestjs/graphql";
import { CalculationToolResolverBase } from "./base/calculationTool.resolver.base";
import { CalculationTool } from "./base/CalculationTool";
import { CalculationToolService } from "./calculationTool.service";

@graphql.Resolver(() => CalculationTool)
export class CalculationToolResolver extends CalculationToolResolverBase {
  constructor(protected readonly service: CalculationToolService) {
    super(service);
  }
}
