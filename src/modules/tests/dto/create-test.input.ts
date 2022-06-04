import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTestInput {
  ex?: number;

  exx?: string;

  exxx?: string;

}
