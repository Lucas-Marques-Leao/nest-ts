import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../bases/entities/base.entity';

@Entity()
export class Content extends BaseEntity {
  @Column()
  description: string;

  @Column()
  linkContent: string;
}
