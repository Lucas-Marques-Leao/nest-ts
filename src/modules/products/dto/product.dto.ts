import { FilterableField } from "@nestjs-query/query-graphql";
import { ObjectType } from "@nestjs/graphql";
import { BaseDTO } from "../../bases/dto/base.dto";


@ObjectType('Product')
export class ProductDTO extends BaseDTO {
  @FilterableField()
  name: string;

  @FilterableField()
  brand: string;

  @FilterableField({nullable: true, defaultValue: false})
  isBroken: boolean;
}
