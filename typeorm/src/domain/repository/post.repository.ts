import { connection } from "../../loader/db.connection";
import { Post } from "../entity/post.entity";

const baseRepositroy = connection.getRepository(Post);


export const postRepository = baseRepositroy.extend({
     findByUserId (userId: number) {
          return this.createQueryBuilder("post")
               .where("post.user_id = :userId", { userId })
               .getMany()
     }
});