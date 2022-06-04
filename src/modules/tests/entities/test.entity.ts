import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../bases/entities/base.entity';

@Entity()
export class Test extends BaseEntity {
  @Column({nullable: true})
  ex: number;

  @Column({nullable: true})
  exx: string;
}
