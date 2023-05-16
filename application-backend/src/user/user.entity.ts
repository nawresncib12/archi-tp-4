import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  profession: string;

  @Column()
  accountNumber: string;

  @Column({ type: 'int' })
  credit: number;

  @Column({ default: false })
  eligibleForLoan: boolean;
}
