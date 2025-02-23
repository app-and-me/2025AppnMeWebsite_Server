import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Timestamp,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 50, nullable: false })
  name: string;

  @Column({ nullable: false })
  student_number: number;

  @Column({ nullable: false })
  phone_number: string;

  @Column({ nullable: false })
  gender: string;

  @Column({ nullable: false })
  birth_date: string;

  @Column({ nullable: false })
  major: string;

  @Column({ nullable: false })
  lived_dormitory: boolean;

  @Column({ length: 5, nullable: false })
  five_letters: string;

  @Column({ nullable: false })
  motivate: string;

  @CreateDateColumn()
  created_at: Timestamp;
}
