import {
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  Entity,
  ManyToOne,
  // BeforeInsert,
} from "typeorm";
import { Team } from "./Team";

@Entity()
export class Workout extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  activeTime: number; //seconds

  @Column()
  restTime: number; //seconds

  @Column()
  warmupTime: number; //seconds

  @Column()
  sets: number;

  @Column()
  reps: number;

  @ManyToOne(
    () => Team,
    (team) => team.workouts
  )
  team: Team;
}
