import { getRepository } from "typeorm";
import { User } from "../User";

export const UserRepository = getRepository(User).extend({
     findByAccountId(accountId: string) {
         return this.createQueryBuilder("user")
             .where("user.accountId = :acccountId", { accountId })
             .getOne()
     }
 });