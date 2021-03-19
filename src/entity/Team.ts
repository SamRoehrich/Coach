import {
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  // BeforeInsert,
} from "typeorm";
import { Athlete } from "./Athlete";
import { Workout } from "./Workout";

@Entity()
export class Team extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(
    () => Athlete,
    (Athlete) => Athlete.id
  )
  athletes: Athlete[];

  @OneToMany(
    () => Workout,
    (workout) => workout.team
  )
  workouts: Workout[];
}
