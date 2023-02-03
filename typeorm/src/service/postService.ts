import { Post } from "../domain/entity/post.entity";
import { postRepository } from "../domain/repository/post.repository";

export class PostService {
     
     async findByUserId(userId: number): Promise<Post[]> {
          return await postRepository.findByUserId(userId);
     }
}