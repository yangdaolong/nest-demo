import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Index('cate_pkey', ['id'], { unique: true })
@Entity('cate', { schema: 'public' })
export class Cate {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'label', nullable: true, length: 255 })
  label: string | null;

  @Column('character varying', { name: 'desc', nullable: true, length: 255 })
  desc: string | null;

  @CreateDateColumn({ name: 'createdAt', precision: 3 })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updatedAt', precision: 3 })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deletedAt', precision: 3 })
  deletedAt: Date;
}
