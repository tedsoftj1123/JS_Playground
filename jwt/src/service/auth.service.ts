import { generateToken } from "../security/jwt/tokenProvider";

export class AuthService {

     recieveToken(userId: string) {
          const token = generateToken(userId)

          return token
     }
}