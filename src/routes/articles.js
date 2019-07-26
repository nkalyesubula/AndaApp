import express from "express";
import Article from "../controllers/Article";
import validate from "../middleware/validationMiddleware";
import { schema } from "../helpers/validations/schemas";
const router = express.Router();

router.post(
  "/api/article",
  validate(schema.articleSchema),
  Article.createArticle
);

export default router;
