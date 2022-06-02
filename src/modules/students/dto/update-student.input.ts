import { CreateStudentInput } from './create-student.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateStudentInput extends PartialType(CreateStudentInput) {
  @Field(() => ID, { nullable: true})
  id?: string
}
