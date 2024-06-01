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
import { CategoryCreateNestedManyWithoutCategoryOptionsInput } from "./CategoryCreateNestedManyWithoutCategoryOptionsInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { OptionCreateNestedManyWithoutCategoryOptionsInput } from "./OptionCreateNestedManyWithoutCategoryOptionsInput";

@InputType()
class CategoryOptionCreateInput {
  @ApiProperty({
    required: false,
    type: () => CategoryCreateNestedManyWithoutCategoryOptionsInput,
  })
  @ValidateNested()
  @Type(() => CategoryCreateNestedManyWithoutCategoryOptionsInput)
  @IsOptional()
  @Field(() => CategoryCreateNestedManyWithoutCategoryOptionsInput, {
    nullable: true,
  })
  category?: CategoryCreateNestedManyWithoutCategoryOptionsInput;

  @ApiProperty({
    required: false,
    type: () => OptionCreateNestedManyWithoutCategoryOptionsInput,
  })
  @ValidateNested()
  @Type(() => OptionCreateNestedManyWithoutCategoryOptionsInput)
  @IsOptional()
  @Field(() => OptionCreateNestedManyWithoutCategoryOptionsInput, {
    nullable: true,
  })
  option?: OptionCreateNestedManyWithoutCategoryOptionsInput;
}

export { CategoryOptionCreateInput as CategoryOptionCreateInput };