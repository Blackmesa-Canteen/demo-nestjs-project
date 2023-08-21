import { Column } from 'typeorm';
import { BaseEntity } from './base.entity';

export class CatEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 200 })
  name: string;

  @Column({ type: 'int' })
  age: number;

  @Column({ type: 'varchar', length: 200 })
  breed: string;
}
