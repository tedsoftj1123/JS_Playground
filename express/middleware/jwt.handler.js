import jwt from 'jsonwebtoken';
const jwtSecret = process.env.JWT_SECRET;

export const authorize = (req, res, next) => {
     const token = req.headers.authorization.split('Bearer ')[1];

     try {
          console.log(jwt.verify(token, jwtSecret));
          res.send();
     } catch (err) {
          next(err);
     }
}