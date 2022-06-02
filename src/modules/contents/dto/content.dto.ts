import { ObjectType } from '@nestjs/graphql';
import { BaseDTO } from '../../bases/dto/base.dto';
import { FilterableField, FilterableRelation } from '@nestjs-query/query-graphql'
import { LessonDTO } from '../../lessons/dto/lesson.dto';

@ObjectType('Content')
@FilterableRelation('lesson', () => LessonDTO)
export class ContentDTO extends BaseDTO {
  @FilterableField()
  description: string;

  @FilterableField({ nullable: true})
  linkContent: string;
}
