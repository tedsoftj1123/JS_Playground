import { Post } from "../domain/entity/post.entity";
import { User } from "../domain/entity/user.entity";
import { postRepository } from "../domain/repository/post.repository";
import { userRepository } from "../domain/repository/user.repository";

export class PostService {
     
     async findByUserId(userId: number): Promise<Post[]> {
          return await postRepository.findByUserId(userId);
     }

     async savePost(post: Post, userId: number): Promise<Post> {
          const user: User = await userRepository.findOne({where: {"id": userId}});
          if(user == null) {
               throw new Error("User not found");
          }
          post.user = user;

          return await postRepository.save(post);
     }
}