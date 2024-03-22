import express from "express";
import AutorContoller from "../controllers/autorController.js";

const routes = express.Router();

routes.get("/autores", AutorContoller.listarAutor);
routes.get("/autores/:id", AutorContoller.listarAutorPorId);
routes.post("/autores/", AutorContoller.cadastrarAutor);
routes.put("/autores/:id", AutorContoller.atualizarAutor);
routes.delete("/autores/:id", AutorContoller.excluirAutor);

export default routes;
