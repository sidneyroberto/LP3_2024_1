/* eslint-disable import/prefer-default-export */
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import Area from "./Area";
import { Autor } from "./Autor";

@Entity()
export class Trabalho {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  area: Area;

  @ManyToMany(() => Autor)
  @JoinTable()
  autores: Autor[];
}
