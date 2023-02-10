import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity("post")
export class Post extends BaseEntity{
     @PrimaryGeneratedColumn()
     id: number

     @Column({type: "varchar"})
     title: string

     @Column({type : "varchar"})
     content: string

     @ManyToOne(() => User, (user) => user.poasts)
     @JoinColumn({name: "user_id"})
     user: User

}