import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('tbl_user')
export class User {

     @PrimaryGeneratedColumn()
     id: number

     @Column({unique: true, nullable: false})
     accountId: string

     @Column()
     age: number

}