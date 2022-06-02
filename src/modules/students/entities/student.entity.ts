import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../../bases/entities/base.entity';

@Entity()
export class Student extends BaseEntity {

  @Column()
  name: string;

  @Column()
  key: string;

}
