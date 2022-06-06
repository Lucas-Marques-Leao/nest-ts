import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../bases/entities/base.entity';

@Entity()
export class Product extends BaseEntity {
  @Column()
  name: string;

  @Column()
  brand: string;

  @Column({default: false, nullable: true})
  isBroken: boolean;
}
