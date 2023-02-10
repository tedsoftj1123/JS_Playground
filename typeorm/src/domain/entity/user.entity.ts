import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./post.entity";

@Entity("user")
export class User extends BaseEntity{

     @PrimaryGeneratedColumn()
     id: number

     @Column({type: "varchar", length:"20"})
     accountId: string

     @Column({type: "varchar", length:"10"})
     name: string

     @Column({type: "varchar", length:"60"})
     password: string

     @Column({type: "varchar", length:"30"})
     email: string

     @Column({type: "integer"})
     age: number

     @OneToMany(() => Post, (post) => post.user)
     poasts: Post[]
}