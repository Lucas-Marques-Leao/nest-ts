import { ObjectType } from '@nestjs/graphql';
import { BaseDTO } from '../../bases/dto/base.dto';
import { FilterableField } from '@nestjs-query/query-graphql'

@ObjectType('Content')
export class ContentDTO extends BaseDTO {
  @FilterableField()
  description: string;

  @FilterableField({ nullable: true})
  linkContent: string;
}
