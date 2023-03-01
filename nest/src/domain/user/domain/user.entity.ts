import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  constructor(accountId: string, name: string, password: string, age: number) {
    this.accountId = accountId;
    this.name = name;
    this.password = password;
    this.age = age;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: '20' })
  accountId: string;

  @Column({ type: 'varchar', length: '10' })
  name: string;

  @Column({ type: 'varchar', length: '60' })
  password: string;

  @Column({ type: 'integer' })
  age: number;
}
