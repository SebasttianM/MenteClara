import { Router } from "express";
import { iniciarSesion, registrarse} from '../controller/auth.controller'

const authRoute = Router();


authRoute.post('/signin',iniciarSesion);
authRoute.post('/signup',registrarse);


export default authRoute;