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
import { CalculationToolWhereInput } from "./CalculationToolWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CalculationToolOrderByInput } from "./CalculationToolOrderByInput";

@ArgsType()
class CalculationToolFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CalculationToolWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CalculationToolWhereInput, { nullable: true })
  @Type(() => CalculationToolWhereInput)
  where?: CalculationToolWhereInput;

  @ApiProperty({
    required: false,
    type: [CalculationToolOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CalculationToolOrderByInput], { nullable: true })
  @Type(() => CalculationToolOrderByInput)
  orderBy?: Array<CalculationToolOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { CalculationToolFindManyArgs as CalculationToolFindManyArgs };