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
import { CategoryOptionWhereInput } from "./CategoryOptionWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class CategoryOptionCountArgs {
  @ApiProperty({
    required: false,
    type: () => CategoryOptionWhereInput,
  })
  @Field(() => CategoryOptionWhereInput, { nullable: true })
  @Type(() => CategoryOptionWhereInput)
  where?: CategoryOptionWhereInput;
}

export { CategoryOptionCountArgs as CategoryOptionCountArgs };