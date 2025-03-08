import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('api/qna')
export class Qna {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  content: string;

  @Column({ nullable: true })
  answer: string;

  @CreateDateColumn()
  created_at: Date;
}
