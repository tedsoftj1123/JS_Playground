import { Request, Response, NextFunction } from "express"

interface BusinessLogic {
  (req: Request, res: Response, next: NextFunction): any;
}

const errorHandler = (service: BusinessLogic) => {
     const logic: BusinessLogic = async (req, res, next) => {
          try {
               await service(req, res, next);
          } catch (error) {
               console.error(error);
               next(error);
          }
     }
     return logic;
}

export {
     BusinessLogic,
     errorHandler,
}