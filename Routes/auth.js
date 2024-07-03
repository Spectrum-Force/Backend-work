import { Router } from "express";
import authRouter from "../Controllers/auth.js";




//  Create a router
const authenticationRouter = Router();

// Define routes
authenticationRouter.use('/auth', authRouter);

// Export router
export default authenticationRouter;