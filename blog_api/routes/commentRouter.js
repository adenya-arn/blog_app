import { Router } from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";

import {
  createComment,
  getCommentsByPost,
} from "../controllers/commentController.js";

const commentRouter = Router();

// public - view comments
commentRouter.get("/post/:id", getCommentsByPost);

// protected - create comment
commentRouter.post("/post/:id", authMiddleware, createComment);

export default commentRouter;
