import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity('tbl_post')
export class Post {
     @PrimaryGeneratedColumn()
     id: number

     @Column('varchar')
     title: string

     @Column('varchar')
     content: string

     @CreateDateColumn()
     createdAt: Date

     @ManyToOne(() => User)
     @JoinColumn({name: 'user_id'})
     user: User
}