/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { CustomerProfileWhereUniqueInput } from "../../customerProfile/base/CustomerProfileWhereUniqueInput";
import { Type } from "class-transformer";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";

@InputType()
class CalculationToolUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  calculationDetails?: string | null;

  @ApiProperty({
    required: false,
    type: () => CustomerProfileWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CustomerProfileWhereUniqueInput)
  @IsOptional()
  @Field(() => CustomerProfileWhereUniqueInput, {
    nullable: true,
  })
  customerProfile?: CustomerProfileWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  result?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  toolName?: string | null;
}

export { CalculationToolUpdateInput as CalculationToolUpdateInput };
