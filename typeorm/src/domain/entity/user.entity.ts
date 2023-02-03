import { userInfo } from "os";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./post.entity";

@Entity("user")
export class User {

     @PrimaryGeneratedColumn()
     id: number

     @Column({type: "varchar", length:"20"})
     accountId: string

     @Column({type: "varchar", length:"10"})
     name: string

     @Column({type: "varchar", length:"10"})
     password: string

     @Column({type: "varchar", length:"10"})
     email: string

     @Column({type: "integer"})
     age: number

     @OneToMany(type => Post, (post) => post.user)
     poasts: Post[]
}