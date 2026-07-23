import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './User';

@Index('book_pkey', ['id'], { unique: true })
@Entity('book', { schema: 'public' })
export class Book {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'name', nullable: true, length: 255 })
  name: string | null;

  @Column('integer', { name: 'userid', nullable: true })
  userid: number | null;

  @Column('integer', { name: 'cateid', nullable: true })
  cateid: number | null;

  @CreateDateColumn({ name: 'createdAt', precision: 3 })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updatedAt', precision: 3 })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deletedAt', precision: 3 })
  deletedAt: Date;

  @ManyToOne(() => User, (user) => user.books, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userid' })
  user: User | null;
}
