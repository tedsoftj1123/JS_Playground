import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const provideToken = (sub, type) => {
     return jwt.sign({
          sub,type
     }, process.env.JWT_SECRET, {
          algorithm: 'HS256',
          expiresIn: '1h'
     });
}