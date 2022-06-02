import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../bases/entities/base.entity';

@Entity()
export class Lesson extends BaseEntity {
  @Column()
  description: string;
}
