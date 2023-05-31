import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('tbl_user')
export class User {

     @PrimaryGeneratedColumn()
     id: number

     @Column('varchar', {unique: true, nullable: false})
     accountId: string

     @Column('tinyint')
     age: number

     @Column('varchar')
     name: string

}