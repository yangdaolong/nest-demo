import dayjs from 'dayjs';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
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
    select: false,
  })
  password: string | null;

  @Column('integer', { name: 'point', nullable: true, default: () => '0' })
  point: number | null;

  @Column('integer', { name: 'level', nullable: true, default: () => '0' })
  level: number | null;

  @CreateDateColumn({
    name: 'createdAt',
    precision: 3,
    transformer: {
      to: (value) => value,
      from: (value) =>
        value ? dayjs(value).format('YYYY-MM-DD HH:mm:ss') : null,
    },
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updatedAt',
    precision: 3,
    transformer: {
      to: (value) => value,
      from: (value) =>
        value ? dayjs(value).format('YYYY-MM-DD HH:mm:ss') : null,
    },
  })
  updatedAt: Date;

  @DeleteDateColumn({
    name: 'deletedAt',
    precision: 3,
    transformer: {
      to: (value) => value,
      from: (value) =>
        value ? dayjs(value).format('YYYY-MM-DD HH:mm:ss') : null,
    },
    select: false,
  })
  deletedAt: Date;

  @OneToMany(() => Book, (book) => book.user, { cascade: true })
  books: Book[];
}
