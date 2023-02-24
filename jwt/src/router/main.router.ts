import { Router } from "express"
import { recieveToken, whoami } from "../controller/auth.controller";
import { authHandler } from "../middleware/authHandler";
import { errorHandler } from "../middleware/globalErrorHandler";

export const mainRoute = () => {
     const app = Router();

     app.get('/whoami', authHandler, errorHandler(whoami))

     app.get('/auth', errorHandler(recieveToken))
     return app;
}