import express from "express";
import LivroContoller from "../controllers/livroController.js";

const routes = express.Router();

routes.get("/livros", LivroContoller.listarLivros);
routes.get("/livros/:id", LivroContoller.listarLivroPorId);
routes.post("/livros/", LivroContoller.cadastrarLivro);
routes.put("/livros/:id", LivroContoller.atualizarLivro);
routes.delete("/livros/:id", LivroContoller.excluirLivro);

export default routes;
