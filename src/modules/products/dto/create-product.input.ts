import { InputType } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  name: string;

  brand: string;

  isBroken?: boolean;
}
