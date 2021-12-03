import { Router } from "express";
import * as articleController from '../controller/article.controller';


const articleRoute = Router();

articleRoute.get("/articulos",articleController.getArticulos);
articleRoute.post("/articulos/add",articleController.addArticulos);
articleRoute.put("/articulos/edit/:id",articleController.editArticulos);
articleRoute.delete("/articulos/delete/:id",articleController.deleteArticulo);
articleRoute.get("/articulos/get/:id",articleController.getArticuloById);

export default articleRoute;