import { FilterableField, FilterableOffsetConnection } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { BaseDTO } from '../../bases/dto/base.dto';
import { ContentDTO } from '../../contents/dto/content.dto';

//Algo para Muitos => Connection()// Relação única => Relation()
@ObjectType('Lesson')
@FilterableOffsetConnection('contents', () => ContentDTO, { nullable:true})
export class LessonDTO extends BaseDTO {
  @FilterableField()
  description: string;

}
