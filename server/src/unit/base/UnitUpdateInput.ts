/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested, IsInt } from "class-validator";
import { ChildProfileWhereUniqueInput } from "../../childProfile/base/ChildProfileWhereUniqueInput";
import { Type } from "class-transformer";
@InputType()
class UnitUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  additionalUnitInfomation?: string | null;

  @ApiProperty({
    required: false,
    type: () => ChildProfileWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ChildProfileWhereUniqueInput)
  @IsOptional()
  @Field(() => ChildProfileWhereUniqueInput, {
    nullable: true,
  })
  childProfile?: ChildProfileWhereUniqueInput | null;

  @ApiProperty({
    required: false,
<<<<<<< HEAD
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  name?: number | null;
=======
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string;
>>>>>>> 684be94395e655717b466a23a22fd2476256ef3e

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  numberOfBedrooms?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  numberOfVacantRooms?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  postCode?: number | null;
}
export { UnitUpdateInput };
