import jwt from 'jsonwebtoken';
import { UnauthorizedException } from '../error/error.js';
const jwtSecret = process.env.JWT_SECRET;

export const authorize = (req, res, next) => {
     const token = req.headers.authorization?.split('Bearer ')[1];

     if(!token) {
          throw new UnauthorizedException("Invalid Token");
     }

     try {
          req.currentUserId = jwt.verify(token, jwtSecret)?.sub
          next();
     } catch (err) {
          next(new UnauthorizedException(err.message));
     }
}