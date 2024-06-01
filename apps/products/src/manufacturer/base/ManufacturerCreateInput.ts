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
import { IsString, IsOptional, IsInt, ValidateNested } from "class-validator";
import { PVmoduleCreateNestedManyWithoutManufacturersInput } from "./PVmoduleCreateNestedManyWithoutManufacturersInput";
import { Type } from "class-transformer";

@InputType()
class ManufacturerCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  createdBy?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  displayOrder?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  label?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  modifiedBy?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  productTypes?: string | null;

  @ApiProperty({
    required: false,
    type: () => PVmoduleCreateNestedManyWithoutManufacturersInput,
  })
  @ValidateNested()
  @Type(() => PVmoduleCreateNestedManyWithoutManufacturersInput)
  @IsOptional()
  @Field(() => PVmoduleCreateNestedManyWithoutManufacturersInput, {
    nullable: true,
  })
  pVmodules?: PVmoduleCreateNestedManyWithoutManufacturersInput;
}

export { ManufacturerCreateInput as ManufacturerCreateInput };