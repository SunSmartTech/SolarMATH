/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CalculationToolWhereUniqueInput } from "./CalculationToolWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CalculationToolUpdateInput } from "./CalculationToolUpdateInput";

@ArgsType()
class UpdateCalculationToolArgs {
  @ApiProperty({
    required: true,
    type: () => CalculationToolWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CalculationToolWhereUniqueInput)
  @Field(() => CalculationToolWhereUniqueInput, { nullable: false })
  where!: CalculationToolWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => CalculationToolUpdateInput,
  })
  @ValidateNested()
  @Type(() => CalculationToolUpdateInput)
  @Field(() => CalculationToolUpdateInput, { nullable: false })
  data!: CalculationToolUpdateInput;
}

export { UpdateCalculationToolArgs as UpdateCalculationToolArgs };
