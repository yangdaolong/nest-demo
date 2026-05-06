import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Book } from './Book';

@Index('user_pkey', ['id'], { unique: true })
@Entity('user', { schema: 'public' })
export class User {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'username', length: 255 })
  username: string;

  @Column('character varying', {
    name: 'password',
    nullable: true,
    length: 255,
  })
  password: string | null;

  @Column('integer', { name: 'point', nullable: true, default: () => '0' })
  point: number | null;

  @Column('integer', { name: 'level', nullable: true, default: () => '0' })
  level: number | null;

  @Column('timestamp with time zone', { name: 'createdAt' })
  createdAt: Date;

  @Column('timestamp with time zone', { name: 'updatedAt' })
  updatedAt: Date;

  @OneToMany(() => Book, (book) => book.user)
  books: Book[];
}
