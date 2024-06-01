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
import { CategoryOptionCreateNestedManyWithoutCategoriesInput } from "./CategoryOptionCreateNestedManyWithoutCategoriesInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CategoryCreateInput {
  @ApiProperty({
    required: false,
    type: () => CategoryOptionCreateNestedManyWithoutCategoriesInput,
  })
  @ValidateNested()
  @Type(() => CategoryOptionCreateNestedManyWithoutCategoriesInput)
  @IsOptional()
  @Field(() => CategoryOptionCreateNestedManyWithoutCategoriesInput, {
    nullable: true,
  })
  categoryOptions?: CategoryOptionCreateNestedManyWithoutCategoriesInput;

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
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  label!: string;

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
}

export { CategoryCreateInput as CategoryCreateInput };