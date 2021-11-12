import { Router } from "express";
import * as userController from '../controller/user.controller'


const userRoute = Router();

userRoute.get('/',userController.getUsers);


export default userRoute;