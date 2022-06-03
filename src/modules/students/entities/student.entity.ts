import { Column, Entity, ManyToMany } from 'typeorm';
import { BaseEntity } from '../../bases/entities/base.entity';
import { Discipline } from '../../disciplines/entities/discipline.entity';

@Entity()
export class Student extends BaseEntity {

  @Column()
  name: string;

  @Column()
  key: string;

  @ManyToMany(() => Discipline, (disciplines) => disciplines.students ,{
    nullable: true
  })
  disciplines: Discipline[]

}
