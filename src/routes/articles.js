import express from "express";
import Article from "../controllers/article/createArticle";

const router = express.Router();

router.post("/api/article", Article.createArticle);

export default router;
