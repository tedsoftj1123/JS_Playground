import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity("post")
export class Post {
     @PrimaryGeneratedColumn()
     id: number

     @Column({type: "varchar"})
     title: string

     @Column({type : "varchar"})
     content: string

     @ManyToOne(() => User)
     @JoinColumn({name: "user_id"})
     user: Promise<User>

}