import { Router } from "express";
import CommentController from "../controllers/article/comment";

const router = Router();

router.post("/api/comments", CommentController.createComment);

export default router;
