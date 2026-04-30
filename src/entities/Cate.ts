import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("cate_pkey", ["id"], { unique: true })
@Entity("cate", { schema: "public" })
export class Cate {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "label", nullable: true, length: 255 })
  label: string | null;

  @Column("character varying", { name: "desc", nullable: true, length: 255 })
  desc: string | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;
}
