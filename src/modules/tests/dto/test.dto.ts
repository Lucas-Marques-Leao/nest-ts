import { FilterableField } from "@nestjs-query/query-graphql";
import { ObjectType } from "@nestjs/graphql";
import { BaseDTO } from "../../bases/dto/base.dto";

@ObjectType('Test')
export class TestDTO extends BaseDTO {
  @FilterableField({nullable: true})
  ex: number;

  @FilterableField({nullable: true})
  exx: string;

  @FilterableField({nullable: true})
  exxx: string;
}
