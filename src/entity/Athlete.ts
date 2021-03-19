import {
  BaseEntity,
  PrimaryGeneratedColumn,
  Entity,
  OneToOne,
  JoinColumn,
  // BeforeInsert,
} from "typeorm";
import { User } from "./User";

@Entity()
export class Athlete extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;
}
