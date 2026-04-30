import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("book_pkey", ["id"], { unique: true })
@Entity("book", { schema: "public" })
export class Book {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("integer", { name: "userid", nullable: true })
  userid: number | null;

  @Column("integer", { name: "cateid", nullable: true })
  cateid: number | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;
}
