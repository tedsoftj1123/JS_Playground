import { Router } from "express"
import { recieveToken, whoami } from "../controller/auth.controller";
import { authHandler } from "../middleware/authHandler";

export const mainRoute = () => {
     const app = Router();

     app.get('/whoami', authHandler, whoami)

     app.get('/auth', recieveToken)
     return app;
}