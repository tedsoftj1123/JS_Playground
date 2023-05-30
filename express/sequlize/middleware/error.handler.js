
export const errorHandler = (service) => {
     return async (req, res, next) => {
          try {
               await service(req, res, next);
          } catch (err) {
               next(err);
          }
     }
}