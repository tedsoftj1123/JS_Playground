import { connection } from "../../loader/db.connection";
import { Post } from "../entity/post.entity";

const entity: string = "post";
const baseRepositroy = connection.getRepository(Post);


export const postRepository = baseRepositroy.extend({
     findByUserId (userId: number): Promise<Post[]> {
          return this.createQueryBuilder(entity)
          .where("user_id = :userId", {userId})
          .getMany();
     }
});