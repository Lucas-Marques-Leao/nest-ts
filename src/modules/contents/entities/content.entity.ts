import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../bases/entities/base.entity';
import { Lesson } from '../../lessons/entities/lesson.entity';

@Entity()
export class Content extends BaseEntity {
  @Column()
  description: string;

  @Column()
  linkContent: string;

  @ManyToOne(() => Lesson)
  lesson: Lesson;
}
