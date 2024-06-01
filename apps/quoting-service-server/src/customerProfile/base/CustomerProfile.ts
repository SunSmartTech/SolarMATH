/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumCustomerProfileBestContactTimes } from "./EnumCustomerProfileBestContactTimes";
import {
  IsEnum,
  IsOptional,
  ValidateNested,
  IsDate,
  IsInt,
  IsString,
  IsBoolean,
} from "class-validator";
import { CalculationTool } from "../../calculationTool/base/CalculationTool";
import { Type } from "class-transformer";

@ObjectType()
class CustomerProfile {
  @ApiProperty({
    required: false,
    enum: EnumCustomerProfileBestContactTimes,
  })
  @IsEnum(EnumCustomerProfileBestContactTimes)
  @IsOptional()
  @Field(() => EnumCustomerProfileBestContactTimes, {
    nullable: true,
  })
  bestContactTimes?:
    | "middays"
    | "evenings"
    | "mornings"
    | "afternoons"
    | "any_time"
    | null;

  @ApiProperty({
    required: false,
    type: () => [CalculationTool],
  })
  @ValidateNested()
  @Type(() => CalculationTool)
  @IsOptional()
  calculationTools?: Array<CalculationTool>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  customerStatusId!: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  customerType!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstname!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastname!: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  notYetAssigned!: boolean | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  phone!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  requirements!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  site_adress!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { CustomerProfile as CustomerProfile };