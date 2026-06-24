import { Router } from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";

import {
  createComment,
  getCommentsByPost,
  deleteComment,
  updateComment,
  getAllComments,
} from "../controllers/commentController.js";

const commentRouter = Router();

// public - view comments
commentRouter.get("/post/:id", getCommentsByPost);

// protected - create comment
commentRouter.post("/post/:id", authMiddleware, createComment);

commentRouter.delete("/:id", authMiddleware, deleteComment);

commentRouter.put("/:id", authMiddleware, updateComment);

commentRouter.get("/", authMiddleware, getAllComments);

export default commentRouter;
