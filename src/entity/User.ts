import {
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  Entity,
  // BeforeInsert,
} from "typeorm";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  lastName: string;

  @Column()
  firstName: string;

  @Column()
  dob: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
