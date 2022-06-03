import { Field, InputType } from '@nestjs/graphql';
import { UpdateLessonInput } from '../../lessons/dto/update-lesson.input';

@InputType()
export class CreateContentInput {
  description: string;

  linkContent?: string;

  lessonId?: string;
}

