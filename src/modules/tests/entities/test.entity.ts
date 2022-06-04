import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../bases/entities/base.entity';

@Entity()
export class Test extends BaseEntity {
  @Column({nullable: true, unique: true})
  ex: number;

  @Column({nullable: true, unique: true})
  exx: string;

  @Column({nullable: true})
  exxx: string;
}
