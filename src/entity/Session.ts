import {
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  Entity,
  ManyToMany,
  JoinTable,
  // BeforeInsert,
} from "typeorm";
import { Athlete } from "./Athlete";
import { Workout } from "./Workout";

@Entity()
export class Session extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: false })
  completed: boolean;

  @Column()
  coachNotes: string;

  @Column()
  athleteNotes: string;

  @Column()
  dateToBeCompleted: string;

  @Column()
  dateCompleted: string;

  @Column()
  percentFinished: number;

  @ManyToMany(() => Athlete)
  @JoinTable()
  athlete: Athlete;

  @ManyToMany(() => Workout)
  @JoinTable()
  workout: Workout;
}
