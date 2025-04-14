import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
    id!: number;

  @Column()
    title!: string;

  @Column({ default: false })
    completed!: boolean;

  @Column({ nullable: true })
  dueDate?: Date;

  @Column({ type: 'text', nullable: true })
  description?: string;
}