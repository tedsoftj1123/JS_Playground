import jwt from 'jsonwebtoken';
require('dotenv').config();

export const generateToken = (userId: string) => {
     return jwt.sign(
          { 
               sub: `${userId}`
           },
          process.env.JWT_SECRET,
          {
               "algorithm" : "HS256",
               expiresIn : process.env.JWT_EXP
          }
     );
}