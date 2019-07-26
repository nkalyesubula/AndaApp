import express from "express";
import Article from "../controllers/Article";
import validate from "../middleware/validationMiddleware";
import { schema } from "../helpers/validations/schemas";
import singleArticle from "../controllers/article/getArticle";
const router = express.Router();

router.post(
  "/api/article",
  validate(schema.articleSchema),
  Article.createArticle
);
router.get("/api/article/:articleId", singleArticle.detail);
router.get('/api/articles',Article.getallArticle);
router.delete('/api/articles/:id',Article.deleteBlog);
export default router;
