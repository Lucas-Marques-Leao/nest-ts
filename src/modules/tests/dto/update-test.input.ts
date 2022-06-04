import { CreateTestInput } from './create-test.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateTestInput extends PartialType(CreateTestInput) {
  @Field(() => ID, { nullable: true})
  id?: string;
}
