import jwt from 'jsonwebtoken';
const jwtSecret = process.env.JWT_SECRET;

export const authorize = (req, res, next) => {
     const token = req.headers.authorization.split('Bearer ')[1];
     try {
          req.currentUserId = jwt.verify(token, jwtSecret)?.sub
          next();
     } catch (err) {
          next(err);
     }
}